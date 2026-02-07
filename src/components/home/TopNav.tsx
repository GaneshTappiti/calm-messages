import { Search, MessageSquare, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = ["Home", "My Network", "Jobs", "Projects", "Mentorship", "Events", "EcoCampus"];

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <span className="text-lg font-bold text-white tracking-tight mr-4">clstr</span>

        {/* Search */}
        <div className="relative hidden md:block w-56">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search people or events..."
            className="w-full bg-yellow-600/20 border border-yellow-600/30 rounded-lg py-1.5 pl-9 pr-3 text-sm text-white placeholder:text-white/60 outline-none"
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 mx-auto">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/messages")}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
            2T
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
