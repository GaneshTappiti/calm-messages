import { TrendingUp, ArrowRight, MapPin, Clock, Users, Check } from "lucide-react";
import { trendingConnections } from "@/data/mockFeed";

const RightSidebar = () => {
  return (
    <aside className="w-[260px] shrink-0 hidden xl:block space-y-5">
      {/* Trending Now */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-white mb-3">TRENDING NOW</h3>
        <div className="flex flex-col items-center py-4 text-center">
          <TrendingUp className="w-8 h-8 text-white/40 mb-2" />
          <p className="text-xs text-white/40">No trending topics yet.</p>
          <p className="text-xs text-white/40">Start a conversation with #hashtags!</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">UPCOMING EVENTS</h3>
          <button className="flex items-center gap-1 text-xs text-white/40 hover:text-white/60 transition-colors">
            View all <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="bg-white/[0.06] border border-white/10 rounded-lg p-3 space-y-2">
          <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-white/[0.06] border border-white/10 rounded text-white/60">Featured</span>
          <p className="text-sm font-semibold text-white">Ideathon 4.0</p>
          <div className="space-y-1 text-[11px] text-white/40">
            <p className="flex items-center gap-1"><Clock className="w-3 h-3" /> February 21, 2026, 9:30 AM</p>
            <p className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Electro Lounge</p>
            <p className="flex items-center gap-1"><Users className="w-3 h-3" /> 0 attending / 150 max</p>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 py-1.5 text-xs font-medium text-white bg-white/[0.06] border border-white/10 rounded-lg hover:bg-white/[0.10] transition-colors">
              RSVP
            </button>
            <button className="flex-1 py-1.5 text-xs font-medium text-white bg-white/[0.06] border border-white/10 rounded-lg hover:bg-white/[0.10] transition-colors">
              Details
            </button>
          </div>
        </div>
        <button className="w-full mt-3 py-2 text-xs font-medium text-white/60 bg-white/[0.04] border border-white/10 rounded-lg hover:bg-white/[0.06] transition-colors">
          Create an Event
        </button>
      </div>

      {/* Trending Connections */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-white mb-3">TRENDING CONNECTIONS</h3>
        <div className="space-y-3">
          {trendingConnections.map((conn, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${conn.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>
                {conn.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">{conn.name}</p>
                <span className="inline-block px-1.5 py-0.5 text-[9px] font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded">
                  {conn.role}
                </span>
                <p className="text-[10px] text-white/40">0 mutual connections</p>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/40">
                <Check className="w-3 h-3" /> Connected
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors">
          View More
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
