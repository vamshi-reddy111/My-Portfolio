export const LEETCODE_USERNAME = "vamshireddy42";
export const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
const LEETCODE_API_URL = `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`;
const REQUEST_TIMEOUT_MS = 15_000;

export type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissions: number | null;
  acceptedSubmissions: number | null;
  submissionCalendar: Record<string, number>;
};

type ProviderStats = {
  totalSolved?: unknown;
  easySolved?: unknown;
  mediumSolved?: unknown;
  hardSolved?: unknown;
  totalSubmissions?: Array<{ difficulty?: unknown; count?: unknown; submissions?: unknown }>;
  matchedUserStats?: {
    acSubmissionNum?: Array<{ difficulty?: unknown; count?: unknown; submissions?: unknown }>;
    totalSubmissionNum?: Array<{ difficulty?: unknown; count?: unknown; submissions?: unknown }>;
  };
  submissionCalendar?: unknown;
};

function isNonNegativeInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0;
}

function parseCalendar(value: unknown): Record<string, number> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.entries(value).reduce<Record<string, number>>((calendar, [timestamp, count]) => {
    if (/^\d+$/.test(timestamp) && isNonNegativeInteger(count)) {
      calendar[timestamp] = count;
    }
    return calendar;
  }, {});
}

export async function fetchLeetCodeStats(signal?: AbortSignal): Promise<LeetCodeStats> {
  const timeoutController = new AbortController();
  const timeout = window.setTimeout(() => timeoutController.abort(), REQUEST_TIMEOUT_MS);
  const abortRequest = () => timeoutController.abort();
  signal?.addEventListener("abort", abortRequest, { once: true });

  let response: Response | undefined;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      response = await fetch(LEETCODE_API_URL, {
        signal: timeoutController.signal,
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
    } catch (error) {
      if (signal?.aborted) throw error;
      if (timeoutController.signal.aborted) {
        throw new Error("The LeetCode data service timed out. Please try again.", { cause: error });
      }
      if (attempt === 1) {
        throw new Error("Unable to reach the LeetCode data service. Please try again.", { cause: error });
      }
    }

    if (response && (response.status < 500 || attempt === 1)) break;
    await new Promise<void>((resolve, reject) => {
      const retryDelay = window.setTimeout(resolve, 750);
      timeoutController.signal.addEventListener("abort", () => {
        window.clearTimeout(retryDelay);
        reject(timeoutController.signal.reason);
      }, { once: true });
    });
  }

  if (!response) {
    if (timeoutController.signal.aborted) {
      throw new Error("The LeetCode data service timed out. Please try again.");
    }
    throw new Error("Unable to reach the LeetCode data service. Please try again.");
  }
  window.clearTimeout(timeout);
  signal?.removeEventListener("abort", abortRequest);

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("The LeetCode data service is rate-limiting requests. Please try again later.");
    }
    throw new Error(`LeetCode data service returned HTTP ${response.status}.`);
  }

  let data: ProviderStats;
  try {
    data = await response.json() as ProviderStats;
  } catch {
    throw new Error("The LeetCode data service returned invalid JSON.");
  }
  if (
    !isNonNegativeInteger(data.totalSolved)
    || !isNonNegativeInteger(data.easySolved)
    || !isNonNegativeInteger(data.mediumSolved)
    || !isNonNegativeInteger(data.hardSolved)
  ) {
    throw new Error("LeetCode data service returned an unexpected profile format.");
  }

  const submissions = Array.isArray(data.totalSubmissions) ? data.totalSubmissions : [];
  const matchedSubmissions = data.matchedUserStats?.acSubmissionNum ?? [];
  const allSubmissions = submissions.find((item) => item.difficulty === "All");
  const allAccepted = matchedSubmissions.find((item) => item.difficulty === "All");
  const totalSubmissions = isNonNegativeInteger(allSubmissions?.submissions)
    ? allSubmissions.submissions
    : null;
  const acceptedSubmissions = isNonNegativeInteger(allAccepted?.count)
    ? allAccepted.count
    : isNonNegativeInteger(allSubmissions?.count)
      ? allSubmissions.count
      : null;

  return {
    totalSolved: data.totalSolved,
    easySolved: data.easySolved,
    mediumSolved: data.mediumSolved,
    hardSolved: data.hardSolved,
    totalSubmissions,
    acceptedSubmissions,
    submissionCalendar: parseCalendar(data.submissionCalendar),
  };
}
