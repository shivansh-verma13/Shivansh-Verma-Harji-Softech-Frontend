"use client";

import { FormEvent, useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import {
  aiSuggestions,
  initialAiMessages,
  sendAiMessage,
  type AiMessage,
} from "@/lib/mockApi";

export function AiChat() {
  const [messages, setMessages] = useState<AiMessage[]>(initialAiMessages);
  const [draft, setDraft] = useState("");
  const [isResponding, setIsResponding] = useState(false);

  async function submitMessage(message: string) {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isResponding) return;

    const userMessage: AiMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedMessage,
    };

    setDraft("");
    setIsResponding(true);
    setMessages((currentMessages) => [...currentMessages, userMessage]);

    const aiMessage = await sendAiMessage(trimmedMessage);
    setMessages((currentMessages) => [...currentMessages, aiMessage]);
    setIsResponding(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(draft);
  }

  return (
    <section className="aiPanel card">
      <div className="sectionTitle">
        <div>
          <p className="eyebrow">CourseFlow AI</p>
          <h2>Plan today&apos;s study block</h2>
        </div>
        <button
          suppressHydrationWarning
          className="iconButton teal"
          type="button"
          aria-label="Open AI assistant"
        >
          <Bot size={19} />
        </button>
      </div>
      <div className="aiCanvas">
        <div className="chatMessages" aria-live="polite">
          <span className="sparkleDot">
            <Sparkles size={18} />
          </span>
          {messages.map((message) => (
            <div className={`chatBubble ${message.role}`} key={message.id}>
              {message.content}
            </div>
          ))}
          {isResponding ? <div className="chatBubble assistant">Thinking through your plan...</div> : null}
        </div>

        <div className="suggestionChips" aria-label="AI prompt suggestions">
          {aiSuggestions.map((suggestion) => (
            <button
              suppressHydrationWarning
              className="suggestionChip"
              type="button"
              onClick={() => void submitMessage(suggestion)}
              disabled={isResponding}
              key={suggestion}
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form className="promptBar" onSubmit={handleSubmit}>
          <input
            suppressHydrationWarning
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask CourseFlow AI for a study plan..."
            aria-label="AI chat message"
          />
          <button
            suppressHydrationWarning
            className="sendButton"
            type="submit"
            aria-label="Send prompt"
            disabled={!draft.trim() || isResponding}
          >
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
