import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Flame,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";
import { AiChat } from "@/components/AiChat";
import { Shell } from "@/components/Shell";
import { TaskProgress } from "@/components/TaskProgress";

const sprints = [
  { title: "UX writing", meta: "2 mini lessons", tint: "cyan" },
  { title: "Visual hierarchy", meta: "4 checkpoints", tint: "yellow" },
  { title: "Design systems", meta: "1 workshop", tint: "violet" },
  { title: "Data dashboards", meta: "3 tasks", tint: "rose" },
];

export default function Home() {
  return (
    <Shell actionLabel="Learning Mode">
      <section className="pageGrid dashboardGrid">
        <div className="mainColumn">
          <section className="heroHeader">
            <div>
              <p className="eyebrow">Your study hub</p>
              <h1>Good morning, Alex</h1>
            </div>
            <div className="softBanner">
              <BadgeCheck size={20} />
              <span>3 assignments are waiting. Keep today light and focused.</span>
            </div>
          </section>

          <AiChat />

          <section className="focusCard card">
            <div>
              <p className="eyebrow">Today&apos;s focus</p>
              <h2>Study base for Product Design 01</h2>
              <p>
                Finish the critique checklist, skim the mentor note, then ship one small
                responsive layout iteration.
              </p>
              <div className="focusStats">
                <span>
                  <Clock3 size={16} /> 42 min
                </span>
                <span>
                  <Target size={16} /> 4 checkpoints
                </span>
                <span>
                  <Flame size={16} /> 9 day streak
                </span>
              </div>
            </div>
            <div className="buddyCard">
              <div className="floatingLeaf" />
              <div className="avatarLarge">A</div>
              <strong>Your study buddy is ready</strong>
              <span>New feedback unlocked</span>
            </div>
          </section>

          <section className="roadmap card">
            <div className="sectionTitle">
              <div>
                <p className="eyebrow">Course roadmap</p>
                <h2>Current milestone</h2>
              </div>
              <span className="metricPill">64%</span>
            </div>
            <div className="roadmapTrack" aria-hidden="true">
              <span className="complete" />
              <span className="complete" />
              <span className="active" />
              <span />
            </div>
            <div className="roadmapSteps">
              <span>
                <CheckCircle2 size={18} /> Foundations
              </span>
              <span>
                <GraduationCap size={18} /> Critique
              </span>
              <span>
                <ShieldCheck size={18} /> Prototype
              </span>
              <span>
                <Star size={18} /> Portfolio
              </span>
            </div>
          </section>

          <section className="lowerGrid">
            <TaskProgress />

            <div className="card chartCard">
              <div className="sectionTitle compact">
                <div>
                  <p className="eyebrow">Mood & focus graph</p>
                  <h2>This week</h2>
                </div>
                <span className="metricPill positive">+8%</span>
              </div>
              <div className="barChart" aria-label="Weekly focus chart">
                {[68, 92, 54, 78, 86, 61, 73].map((height, index) => (
                  <span key={index} style={{ "--bar": `${height}%` } as React.CSSProperties} />
                ))}
              </div>
              <p className="miniNote">Best focus window: 10:00 AM - 12:00 PM</p>
            </div>
          </section>

          <section className="sprintGrid">
            {sprints.map((sprint) => (
              <article className={`sprintCard ${sprint.tint}`} key={sprint.title}>
                <FileText size={19} />
                <strong>{sprint.title}</strong>
                <span>{sprint.meta}</span>
                <ArrowUpRight size={17} />
              </article>
            ))}
          </section>
        </div>

        <aside className="rightRail">
          <section className="card coachCard">
            <p className="eyebrow">Recommended for you</p>
            <div className="mentorAvatar" />
            <h2>Meet Rohan Tyagi</h2>
            <p>Senior product designer. Great for critique loops and portfolio polish.</p>
            <button suppressHydrationWarning className="pinkButton" type="button">
              Book 20 min session
            </button>
          </section>

          <section className="card miniProgress">
            <div className="sectionTitle compact">
              <div>
                <p className="eyebrow">Job progress</p>
                <h2>Applications</h2>
              </div>
              <CalendarDays size={18} />
            </div>
            <div className="progressRows">
              <span>
                UX Intern <b>62%</b>
              </span>
              <progress value="62" max="100" />
              <span>
                Product Designer <b>48%</b>
              </span>
              <progress value="48" max="100" />
            </div>
          </section>

          <section className="card nudges">
            <p className="eyebrow">Mini sprint</p>
            <h2>Feedback loops</h2>
            <p>Two notes need replies before tomorrow&apos;s review.</p>
            <button suppressHydrationWarning className="outlineButton" type="button">
              <MessageCircle size={16} /> Reply now
            </button>
          </section>
        </aside>
      </section>
    </Shell>
  );
}
