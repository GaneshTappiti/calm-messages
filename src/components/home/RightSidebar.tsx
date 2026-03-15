import { TrendingUp, ArrowRight, MapPin, Clock, Users, Check } from "lucide-react";
import { trendingConnections } from "@/data/mockFeed";

const RightSidebar = () => {
  return (
    <aside className="w-[260px] shrink-0 hidden xl:block space-y-5">
      {/* Trending */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-brand-sm">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Trending Now</h3>
        <div className="flex flex-col items-center py-4 text-center">
          <TrendingUp className="w-8 h-8 text-muted-foreground mb-2" />
          <p className="text-xs text-muted-foreground">No trending topics yet.</p>
          <p className="text-xs text-muted-foreground">Start a conversation with #hashtags!</p>
        </div>
      </div>

      {/* Events */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-brand-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Upcoming Events</h3>
          <button className="flex items-center gap-1 text-xs text-primary hover:text-brand-teal-light transition-colors focus-brand rounded-sm">
            View all <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="bg-brand-surface-elevated border border-border rounded-lg p-3 space-y-2">
          <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-brand-amber/15 text-brand-amber border border-brand-amber/25 rounded">
            Featured
          </span>
          <p className="text-sm font-semibold text-foreground">Ideathon 4.0</p>
          <div className="space-y-1 text-[11px] text-muted-foreground">
            <p className="flex items-center gap-1"><Clock className="w-3 h-3" /> February 21, 2026, 9:30 AM</p>
            <p className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Electro Lounge</p>
            <p className="flex items-center gap-1"><Users className="w-3 h-3" /> 0 attending / 150 max</p>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 py-1.5 text-xs font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-brand-teal-light transition-colors focus-brand shadow-brand-sm">
              RSVP
            </button>
            <button className="flex-1 py-1.5 text-xs font-medium text-foreground bg-secondary border border-border rounded-lg hover:bg-brand-surface-elevated transition-colors focus-brand">
              Details
            </button>
          </div>
        </div>
        <button className="w-full mt-3 py-2 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-lg hover:bg-brand-surface-elevated transition-colors focus-brand">
          Create an Event
        </button>
      </div>

      {/* Connections */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-brand-sm">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Trending Connections</h3>
        <div className="space-y-3">
          {trendingConnections.map((conn, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0">
                {conn.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">{conn.name}</p>
                <span className="inline-block px-1.5 py-0.5 text-[9px] font-semibold bg-brand-amber/15 text-brand-amber border border-brand-amber/25 rounded">
                  {conn.role}
                </span>
                <p className="text-[10px] text-muted-foreground">0 mutual connections</p>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-primary">
                <Check className="w-3 h-3" /> Connected
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 py-2 text-xs font-medium text-primary hover:text-brand-teal-light transition-colors focus-brand rounded-sm">
          View More
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
