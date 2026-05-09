import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type ShellProps = {
  children: React.ReactNode;
  actionLabel: string;
};

export function Shell({ children, actionLabel }: ShellProps) {
  return (
    <div className="appShell">
      <Sidebar />
      <main className="contentShell">
        <Topbar actionLabel={actionLabel} />
        {children}
      </main>
    </div>
  );
}
