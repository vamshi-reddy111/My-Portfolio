export type TopicCategory = "Advanced" | "Intermediate" | "Fundamental";
export const LEETCODE_USERNAME = "vamshireddy42";
export const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

export type TopicProgress = {
  topic: string;
  solved: number | null;
  category: TopicCategory;
};

// Update only the solved value when your topic totals change.
export const topicProgress: TopicProgress[] = [
  { topic: "Dynamic Programming", solved: 14, category: "Advanced" },
  { topic: "Graphs", solved: null, category: "Advanced" },
  { topic: "Backtracking", solved: 1, category: "Advanced" },
  { topic: "Tries", solved: 1, category: "Advanced" },
  { topic: "Binary Search Trees", solved: null, category: "Advanced" },
  { topic: "Union-Find", solved: 1, category: "Advanced" },
  { topic: "Game Theory", solved: 2, category: "Advanced" },
  { topic: "Sliding Window", solved: 9, category: "Intermediate" },
  { topic: "Binary Search", solved: 26, category: "Intermediate" },
  { topic: "Trees", solved: null, category: "Intermediate" },
  { topic: "Heaps", solved: null, category: "Intermediate" },
  { topic: "Greedy", solved: 20, category: "Intermediate" },
  { topic: "Two Pointers", solved: 35, category: "Intermediate" },
  { topic: "Divide and Conquer", solved: 6, category: "Intermediate" },
  { topic: "Quickselect", solved: 1, category: "Intermediate" },
  { topic: "Arrays", solved: 148, category: "Fundamental" },
  { topic: "Strings", solved: 62, category: "Fundamental" },
  { topic: "Hashing", solved: 59, category: "Fundamental" },
  { topic: "Linked Lists", solved: 11, category: "Fundamental" },
  { topic: "Stacks", solved: 7, category: "Fundamental" },
  { topic: "Queues", solved: null, category: "Fundamental" },
  { topic: "Sorting", solved: 48, category: "Fundamental" },
  { topic: "Math", solved: 62, category: "Fundamental" },
  { topic: "Bit Manipulation", solved: 17, category: "Fundamental" },
  { topic: "Recursion", solved: 10, category: "Fundamental" },
  { topic: "Database", solved: 8, category: "Fundamental" },
  { topic: "Enumeration", solved: 10, category: "Fundamental" },
  { topic: "Simulation", solved: 19, category: "Fundamental" },
];
