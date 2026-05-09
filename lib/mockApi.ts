export type AiRole = "user" | "assistant";

export type AiMessage = {
  id: string;
  role: AiRole;
  content: string;
};

export type LearningTask = {
  id: string;
  title: string;
  type: string;
  status: string;
  color: "mint" | "blue" | "lime" | "pink" | "amber";
};

export type SessionTask = {
  id: string;
  title: string;
  tag: string;
  detail: string;
};

export const aiSuggestions = [
  "Make a 45-minute revision plan for interaction design.",
  "Summarize my pending tasks by priority.",
  "Give me a checklist for tomorrow's mentor review.",
];

export const initialAiMessages: AiMessage[] = [
  {
    id: "ai-welcome",
    role: "assistant",
    content: "Ask for a plan, quiz recap, feedback checklist, or study order.",
  },
];

export const dashboardTasks: LearningTask[] = [
  { id: "wireframe", title: "Wireframe foundations", type: "Quiz", status: "Due today", color: "mint" },
  { id: "accessibility", title: "Accessibility research notes", type: "Reading", status: "Review", color: "blue" },
  { id: "critique", title: "Landing page critique", type: "Coach", status: "86%", color: "lime" },
  { id: "responsive", title: "Responsive layout lab", type: "Build", status: "Next", color: "pink" },
  { id: "reflection", title: "UI checklist reflection", type: "Journal", status: "Draft", color: "amber" },
];

export const sessionTasks: SessionTask[] = [
  {
    id: "constraints",
    title: "Why frames and constraints matter",
    tag: "12 min",
    detail: "Watch the lesson and identify two responsive layout decisions.",
  },
  {
    id: "tokens",
    title: "Styles, tokens, and reusable UI",
    tag: "18 min",
    detail: "Convert one repeated card pattern into reusable styling notes.",
  },
  {
    id: "critique-loop",
    title: "Turn critique into next steps",
    tag: "Coach",
    detail: "Send your mentor one before-and-after screenshot with a short note.",
  },
];

export async function sendAiMessage(prompt: string): Promise<AiMessage> {
  const normalized = prompt.toLowerCase();
  let content =
    "Start with the smallest unfinished task, spend 25 minutes on focused work, then use the final 10 minutes to write what changed and what needs review.";

  if (normalized.includes("45") || normalized.includes("revision")) {
    content =
      "Here is a 45-minute plan: 10 min recap notes, 20 min responsive layout practice, 10 min critique checklist, and 5 min to write one mentor question.";
  }

  if (normalized.includes("priority") || normalized.includes("pending")) {
    content =
      "Priority order: finish Wireframe foundations, review Accessibility notes, then complete the Responsive layout lab. Keep the reflection as a low-pressure wrap-up.";
  }

  if (normalized.includes("mentor") || normalized.includes("checklist")) {
    content =
      "Mentor review checklist: state the user goal, show the before/after change, explain one design decision, and ask for feedback on one specific interaction.";
  }

  await new Promise((resolve) => setTimeout(resolve, 280));

  return {
    id: `ai-${Date.now()}`,
    role: "assistant",
    content,
  };
}
