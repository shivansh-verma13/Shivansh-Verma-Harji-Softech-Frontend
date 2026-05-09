import { Bell, Search, SlidersHorizontal } from "lucide-react";

type TopbarProps = {
  actionLabel: string;
};

export function Topbar({ actionLabel }: TopbarProps) {
  return (
    <header className="topbar">
      <label className="searchBox" aria-label="Search">
        <Search aria-hidden="true" size={18} />
        <input suppressHydrationWarning placeholder="Search courses, notes, mentors..." />
      </label>
      <div className="topActions">
        <button suppressHydrationWarning className="iconButton" type="button" aria-label="Filters">
          <SlidersHorizontal size={18} />
        </button>
        <button
          suppressHydrationWarning
          className="iconButton"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={18} />
        </button>
        <button suppressHydrationWarning className="darkButton" type="button">
          {actionLabel}
        </button>
      </div>
    </header>
  );
}
