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
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-600 border-2 border-white/[0.15] flex items-center justify-center text-sm font-bold text-white mx-auto mb-2">
          {currentUser.avatar}
        </div>
        <p className="text-sm font-semibold text-white truncate">
          {currentUser.rollNo} {currentUser.name}
        </p>
        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full">
          Student
        </span>
        <div className="mt-3 space-y-1 text-[11px] text-white/40">
          <p>📍 {currentUser.community}</p>
          <p>🏫 {currentUser.memberOf}</p>
          <p>🎓 Student</p>
        </div>
        <button className="mt-3 w-full py-1.5 text-xs font-medium text-white bg-white/[0.06] border border-white/10 rounded-lg hover:bg-white/[0.10] transition-colors">
          View Profile
        </button>
      </div>

      {/* Navigation */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-2 px-2">Quick Navigation</p>
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home;
            return (
              <button
                key={item.label}
                onClick={() => item.href ? navigate(item.href) : null}
                className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors text-left"
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
