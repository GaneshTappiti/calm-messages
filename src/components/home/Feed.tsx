import { Image, Video, FileText, ChevronDown, AlertCircle } from "lucide-react";
import { posts, currentUser } from "@/data/mockFeed";
import PostCard from "./PostCard";

const Feed = () => {
  return (
    <div className="flex-1 min-w-0 space-y-4">
      {/* Complete Profile Banner */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-brand-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-brand-amber" />
            <span className="text-sm font-semibold text-foreground">Complete Your Profile</span>
          </div>
          <span className="text-sm font-semibold text-primary">{currentUser.profileCompletion}%</span>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full mb-3">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${currentUser.profileCompletion}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mb-1">Missing Information:</p>
        <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-0.5 mb-3">
          {currentUser.missingInfo.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
        <button className="px-4 py-1.5 text-xs font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-brand-teal-light transition-colors focus-brand shadow-brand-sm">
          Complete Profile
        </button>
      </div>

      {/* Post Composer */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-brand-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-brand-surface-elevated border border-border flex items-center justify-center text-[10px] font-bold text-foreground shrink-0">
            2TG
          </div>
          <input
            type="text"
            placeholder="Share something with your network...."
            className="flex-1 bg-secondary border border-border rounded-xl py-2 px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-4 ml-12">
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
            <Image className="w-4 h-4" /> Photo
          </button>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
            <Video className="w-4 h-4" /> Video
          </button>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
            <FileText className="w-4 h-4" /> Document
          </button>
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
        Sort by:
        <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors focus-brand rounded-sm">
          Recent <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
