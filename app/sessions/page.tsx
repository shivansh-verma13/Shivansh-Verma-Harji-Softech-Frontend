import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  CircleDot,
  Clock3,
  FileQuestion,
  ListChecks,
  Plus,
  Trophy,
  Video,
} from "lucide-react";
import { SessionTaskFlow } from "@/components/SessionTaskFlow";
import { Shell } from "@/components/Shell";

const concepts = [
  { title: "Responsive hierarchy", meta: "2 examples", icon: BookOpen },
  { title: "Auto layout patterns", meta: "Practice file", icon: ListChecks },
  { title: "Prototype handoff", meta: "4 checkpoints", icon: FileQuestion },
];

export default function SessionsPage() {
  return (
    <Shell actionLabel="Study Plan">
      <section className="pageGrid sessionsGrid">
        <div className="timelineRail" aria-hidden="true">
          <span className="timelineDot active" />
          <span />
          <span className="timelineDot" />
          <span />
          <span className="timelineDot" />
        </div>

        <div className="mainColumn">
          <section className="heroHeader sessionsHeader">
            <div>
              <p className="eyebrow">Your module path</p>
              <h1>Sessions</h1>
            </div>
            <button suppressHydrationWarning className="darkButton" type="button">
              <Plus size={17} /> Add topic
            </button>
          </section>

          <SessionTaskFlow />

          <section className="sessionsList">
            <article className="card conceptCard">
              <div className="sectionTitle compact">
                <div>
                  <p className="eyebrow">Strengthen concepts</p>
                  <h2>Quick practice</h2>
                </div>
                <button suppressHydrationWarning className="textButton" type="button">
                  Save
                </button>
              </div>
              {concepts.map((concept) => {
                const Icon = concept.icon;

                return (
                  <div className="conceptRow" key={concept.title}>
                    <span>
                      <Icon size={17} />
                    </span>
                    <div>
                      <strong>{concept.title}</strong>
                      <small>{concept.meta}</small>
                    </div>
                    <ArrowUpRight size={16} />
                  </div>
                );
              })}
            </article>

            <article className="card notesCard">
              <div className="sectionTitle compact">
                <div>
                  <p className="eyebrow">Recent notes</p>
                  <h2>Mentor comments</h2>
                </div>
                <Clock3 size={18} />
              </div>
              <p>
                Focus on showing why each screen state changes. Add one caption for the
                user goal and one for the design decision.
              </p>
            </article>

            <article className="card quizCard">
              <div>
                <FileQuestion size={20} />
                <strong>Mini quiz: layout systems</strong>
                <span>5 questions, 4 minutes</span>
              </div>
              <button suppressHydrationWarning className="outlineButton" type="button">
                Start
              </button>
            </article>
          </section>
        </div>

        <aside className="rightRail sessionsAside">
          <section className="card progressDialCard">
            <p className="eyebrow">January progress</p>
            <div className="progressDial" aria-label="January progress 86 percent">
              <span>86%</span>
            </div>
            <div className="dialStats">
              <span>
                <b>3</b> sessions
              </span>
              <span>
                <b>1</b> review
              </span>
            </div>
          </section>

          <section className="card recommendation">
            <div className="sectionTitle compact">
              <div>
                <p className="eyebrow">Expert recommendation</p>
                <h2>Ready for planning?</h2>
              </div>
              <BadgeCheck size={18} />
            </div>
            <div className="mentorAvatar red" />
            <strong>Mentor Tyagi</strong>
            <p>Join a live critique and refine your next milestone.</p>
            <button suppressHydrationWarning className="greenButton" type="button">
              Start session
            </button>
          </section>

          <section className="card resourceCard">
            <div className="sectionTitle compact">
              <div>
                <p className="eyebrow">Class learning resources</p>
                <h2>Checklist</h2>
              </div>
              <Trophy size={18} />
            </div>
            <div className="resourceList">
              <span>
                <CheckCircle2 size={16} /> Review submission V1
              </span>
              <span>
                <CircleDot size={16} /> Upload iteration
              </span>
              <span>
                <Video size={16} /> Watch mentor replay
              </span>
            </div>
          </section>
        </aside>
      </section>
    </Shell>
  );
}
