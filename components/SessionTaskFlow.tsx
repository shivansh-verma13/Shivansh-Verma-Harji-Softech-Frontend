"use client";

import { CheckCircle2, Lock, Play, RotateCcw } from "lucide-react";
import { sessionTasks } from "@/lib/mockApi";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

type SessionStatus = "not-started" | "in-progress" | "completed";

const initialSessionStatuses: Record<string, SessionStatus> = {};

function getTaskStatus(statuses: Record<string, SessionStatus>, taskId: string) {
  return statuses[taskId] ?? "not-started";
}

function getSessionProgress(statuses: Record<string, SessionStatus>) {
  const completedCount = sessionTasks.filter(
    (task) => getTaskStatus(statuses, task.id) === "completed",
  ).length;
  return Math.round((completedCount / sessionTasks.length) * 100);
}

export function SessionTaskFlow() {
  const [statuses, setStatuses] = useLocalStorageState(
    "courseflow-session-task-flow",
    initialSessionStatuses,
  );
  const progress = getSessionProgress(statuses);
  const completedCount = sessionTasks.filter(
    (task) => getTaskStatus(statuses, task.id) === "completed",
  ).length;

  function advanceTask(taskId: string) {
    setStatuses((currentStatuses) => {
      const status = getTaskStatus(currentStatuses, taskId);

      if (status === "completed") return currentStatuses;

      return {
        ...currentStatuses,
        [taskId]: status === "in-progress" ? "completed" : "in-progress",
      };
    });
  }

  return (
    <section className="card lessonBuilder">
      <div className="sectionTitle">
        <div>
          <p className="eyebrow">Session task flow</p>
          <h2>Product design sprint</h2>
        </div>
        <span className="metricPill">{progress}%</span>
      </div>
      <p>
        Build a compact review route: watch the lesson, complete one challenge, then send
        your mentor a before-and-after screenshot.
      </p>

      <div className="sessionProgressPanel">
        <div
          className="journeyRing"
          style={{ "--progress": `${progress}%` } as React.CSSProperties}
          aria-label={`Circular journey progress ${progress} percent`}
        >
          <span>{progress}%</span>
        </div>
        <div className="progressCopy">
          <strong>{completedCount} completed</strong>
          <span>{sessionTasks.length - completedCount} tasks remaining</span>
          <button
            suppressHydrationWarning
            className="textButton"
            type="button"
            onClick={() => setStatuses(initialSessionStatuses)}
          >
            <RotateCcw size={13} /> Reset flow
          </button>
        </div>
      </div>

      <div className="builderProgress dynamic" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="lessonStack">
        {sessionTasks.map((task, index) => {
          const status = getTaskStatus(statuses, task.id);
          const previousTask = sessionTasks[index - 1];
          const isLocked =
            index > 0 && getTaskStatus(statuses, previousTask.id) !== "completed";
          const label =
            status === "completed" ? "Completed" : status === "in-progress" ? "Continue" : "Start";

          return (
            <article className={`lessonRow flow ${isLocked ? "locked" : ""}`} key={task.id}>
              <span className={status === "completed" ? "lessonIndex done" : "lessonIndex active"}>
                {isLocked ? (
                  <Lock size={14} />
                ) : status === "completed" ? (
                  <CheckCircle2 size={15} />
                ) : status === "in-progress" ? (
                  <Play size={14} />
                ) : (
                  index + 1
                )}
              </span>
              <div>
                <strong>{task.title}</strong>
                <small>{task.detail}</small>
              </div>
              <button
                suppressHydrationWarning
                className={`statusButton ${status === "completed" ? "completed" : ""}`}
                type="button"
                onClick={() => advanceTask(task.id)}
                disabled={isLocked || status === "completed"}
              >
                {isLocked ? "Locked" : label}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
