import { Search, MessageSquare, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = ["Home", "My Network", "Jobs", "Projects", "Mentorship", "Events", "EcoCampus"];

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-brand-sm">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-14">
        <span className="text-lg font-bold text-primary tracking-tight mr-4">clstr</span>

        <div className="relative hidden md:block w-56">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search people or events..."
            className="w-full bg-secondary border border-border rounded-lg py-1.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-5 mx-auto">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-brand rounded-sm"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/messages")}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-brand"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-brand">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-brand-sm">
            2T
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
