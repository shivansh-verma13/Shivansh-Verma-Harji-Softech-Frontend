"use client";

import { CheckCircle2, RotateCcw } from "lucide-react";
import { dashboardTasks } from "@/lib/mockApi";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

const initialCompletedTasks: Record<string, boolean> = {};

function calculateProgress(completedTasks: Record<string, boolean>) {
  const completedCount = dashboardTasks.filter((task) => completedTasks[task.id]).length;
  return Math.round((completedCount / dashboardTasks.length) * 100);
}

export function TaskProgress() {
  const [completedTasks, setCompletedTasks] = useLocalStorageState(
    "courseflow-dashboard-task-progress",
    initialCompletedTasks,
  );
  const progress = calculateProgress(completedTasks);
  const completedCount = dashboardTasks.filter((task) => completedTasks[task.id]).length;

  function toggleTask(taskId: string) {
    setCompletedTasks((currentTasks) => ({
      ...currentTasks,
      [taskId]: !currentTasks[taskId],
    }));
  }

  return (
    <div className="card taskProgressCard">
      <div className="sectionTitle compact">
        <div>
          <p className="eyebrow">Active tasks</p>
          <h2>Queue</h2>
        </div>
        <button
          suppressHydrationWarning
          className="textButton"
          type="button"
          onClick={() => setCompletedTasks(initialCompletedTasks)}
        >
          <RotateCcw size={13} /> Reset
        </button>
      </div>

      <div className="progressSummary">
        <div className="progressCopy">
          <strong>{progress}% complete</strong>
          <span>
            {completedCount} of {dashboardTasks.length} tasks done
          </span>
        </div>
        <div
          className="journeyRing small"
          style={{ "--progress": `${progress}%` } as React.CSSProperties}
          aria-label={`Task journey progress ${progress} percent`}
        >
          <span>{progress}%</span>
        </div>
      </div>

      <div className="dynamicProgressBar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="taskList checklist">
        {dashboardTasks.map((task) => {
          const isComplete = Boolean(completedTasks[task.id]);

          return (
            <label className={`taskRow interactive ${isComplete ? "done" : ""}`} key={task.id}>
              <input
                suppressHydrationWarning
                type="checkbox"
                checked={isComplete}
                onChange={() => toggleTask(task.id)}
              />
              <span className={`taskDot ${task.color}`}>
                {isComplete ? <CheckCircle2 size={13} /> : null}
              </span>
              <div>
                <strong>{task.title}</strong>
                <small>{task.type}</small>
              </div>
              <span className="taskStatus">{isComplete ? "Done" : task.status}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
