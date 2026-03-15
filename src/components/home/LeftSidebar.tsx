import { Home, Users, GraduationCap, Calendar, MessageSquare, Briefcase, Leaf, FolderOpen, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "@/data/mockFeed";

const iconMap: Record<string, React.ElementType> = {
  Home, Users, GraduationCap, Calendar, MessageSquare, Briefcase, Leaf, FolderOpen, BarChart3,
};

const navItems = [
  { label: "Home", icon: "Home" },
  { label: "Alumni Directory", icon: "Users" },
  { label: "Mentorship", icon: "GraduationCap" },
  { label: "Events", icon: "Calendar" },
  { label: "Messages", icon: "MessageSquare", href: "/messages" },
  { label: "Clubs", icon: "Users" },
  { label: "Jobs", icon: "Briefcase" },
  { label: "EcoCampus", icon: "Leaf" },
  { label: "Projects", icon: "FolderOpen" },
  { label: "Skill Analysis", icon: "BarChart3" },
];

const LeftSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-[220px] shrink-0 hidden lg:block space-y-5">
      {/* Profile Card */}
      <div className="bg-card border border-border rounded-xl p-4 text-center shadow-brand-sm">
        <div className="w-14 h-14 rounded-full bg-primary border-2 border-border flex items-center justify-center text-sm font-bold text-primary-foreground mx-auto mb-2 shadow-brand-sm">
          {currentUser.avatar}
        </div>
        <p className="text-sm font-semibold text-foreground truncate">
          {currentUser.rollNo} {currentUser.name}
        </p>
        <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-semibold bg-brand-amber/15 text-brand-amber border border-brand-amber/25 rounded-full">
          Student
        </span>
        <div className="mt-3 space-y-1 text-[11px] text-muted-foreground">
          <p>📍 {currentUser.community}</p>
          <p>🏫 {currentUser.memberOf}</p>
          <p>🎓 Student</p>
        </div>
        <button className="mt-3 w-full py-1.5 text-xs font-medium text-primary-foreground bg-primary rounded-lg hover:bg-brand-teal-light transition-colors focus-brand shadow-brand-sm">
          View Profile
        </button>
      </div>

      {/* Quick Navigation */}
      <div className="bg-card border border-border rounded-xl p-3 shadow-brand-sm">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Quick Navigation</p>
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home;
            return (
              <button
                key={item.label}
                onClick={() => item.href ? navigate(item.href) : null}
                className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-left focus-brand"
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default LeftSidebar;
