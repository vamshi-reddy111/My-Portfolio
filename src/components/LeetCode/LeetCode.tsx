import { useCallback, useEffect, useRef, useState } from "react";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import {
  fetchLeetCodeStats,
  LEETCODE_PROFILE_URL,
  LEETCODE_USERNAME,
  type LeetCodeStats,
} from "./api";
import { Container } from "./styles";

const REFRESH_INTERVAL = 15 * 60 * 1000;

export function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const requestRef = useRef<AbortController | null>(null);

  const loadStats = useCallback(async () => {
    if (requestRef.current) return;
    const controller = new AbortController();
    requestRef.current = controller;

    try {
      setIsLoading(true);
      const nextStats = await fetchLeetCodeStats(controller.signal);
      setStats(nextStats);
      setError(null);
    } catch (loadError) {
      if (loadError instanceof DOMException && loadError.name === "AbortError") return;
      setError(loadError instanceof Error ? loadError.message : "Unable to load LeetCode statistics.");
    } finally {
      requestRef.current = null;
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const initialRefresh = window.setTimeout(() => void loadStats(), 0);
    const refresh = window.setInterval(loadStats, REFRESH_INTERVAL);
    return () => {
      requestRef.current?.abort();
      window.clearTimeout(initialRefresh);
      window.clearInterval(refresh);
    };
  }, [loadStats]);

  const acceptanceRate = stats?.totalSubmissions && stats.acceptedSubmissions !== null && stats.totalSubmissions > 0
    ? Number(((stats.acceptedSubmissions / stats.totalSubmissions) * 100).toFixed(2))
    : null;

  const acceptanceDisplay = acceptanceRate !== null ? `${acceptanceRate.toFixed(2)}%` : "--%";

  return (
    <Container id="leetcode">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="leetcode-card">
          <div className="leetcode-card-header">
            <span className="leetcode-brand">LeetCode</span>
          </div>

          {isLoading && !stats && <p className="status-message" role="status">Loading live LeetCode statistics...</p>}
          {error && !stats && (
            <p className="status-message error-message" role="alert">{error}</p>
          )}

          {stats && (
            <div className="leetcode-content">
              <div className="leetcode-main-stat">
                <strong>{acceptanceDisplay}</strong>
                <span>Acceptance</span>
              </div>

              <div className="leetcode-side-stat">
                <div className="leetcode-stat-block">
                  <span className="stat-value">{stats.totalSolved}</span>
                  <span className="stat-label">Solved</span>
                </div>
                <div className="leetcode-stat-block">
                  <span className="stat-value">{stats.totalSubmissions ?? 0}</span>
                  <span className="stat-label">Submission</span>
                </div>
              </div>

              <a className="leetcode-arrow" href={LEETCODE_PROFILE_URL} target="_blank" rel="noreferrer" aria-label={`Open ${LEETCODE_USERNAME} LeetCode profile`}>
                →
              </a>
            </div>
          )}

        </div>
      </ScrollAnimation>
    </Container>
  );
}
