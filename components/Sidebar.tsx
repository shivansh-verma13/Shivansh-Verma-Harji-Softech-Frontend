"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  FileStack,
  LayoutDashboard,
  Library,
  MessageSquareText,
  Rocket,
  Settings,
  Sparkles,
  Trophy,
  UploadCloud,
} from "lucide-react";

const primaryNav = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "My courses", href: "/sessions", icon: BookOpenCheck },
  { label: "Calendar", href: "/sessions#calendar", icon: CalendarClock },
  { label: "Messages", href: "/#messages", icon: MessageSquareText },
  { label: "Study library", href: "/#library", icon: Library },
  { label: "Submissions", href: "/#submissions", icon: UploadCloud },
];

const secondaryNav = [
  { label: "Workshop", href: "/#workshop", icon: Sparkles },
  { label: "Job prep training", href: "/sessions", icon: Rocket },
  { label: "Lab work", href: "/#lab", icon: FileStack },
  { label: "Reports", href: "/#reports", icon: BarChart3 },
  { label: "Settings", href: "/#settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="brand" aria-label="CourseFlow home">
        <span className="brandMark">
          <span />
        </span>
        <span>CourseFlow</span>
      </Link>

      <nav className="navGroup" aria-label="Main navigation">
        {primaryNav.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith("/sessions");

          return (
            <Link
              className={`navItem ${active ? "active" : ""}`}
              href={item.href}
              key={item.label}
            >
              <Icon aria-hidden="true" size={17} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <nav className="navGroup lower" aria-label="Learning tools">
        {secondaryNav.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith("/sessions") && item.label === "Job prep training";

          return (
            <Link
              className={`navItem ${active ? "active" : ""}`}
              href={item.href}
              key={item.label}
            >
              <Icon aria-hidden="true" size={17} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="userCard">
        <div className="avatar avatarGreen">A</div>
        <div>
          <strong>Alex</strong>
          <span>Level 4 learner</span>
        </div>
        <Trophy aria-hidden="true" size={18} />
      </div>
    </aside>
  );
}
