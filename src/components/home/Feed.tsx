import { Image, Video, FileText, ChevronDown, AlertCircle } from "lucide-react";
import { posts, currentUser } from "@/data/mockFeed";
import PostCard from "./PostCard";

const Feed = () => {
  return (
    <div className="flex-1 min-w-0 space-y-4">
      {/* Complete Profile Banner */}
      <div className="bg-black/[0.04] border border-black/10 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-black/60" />
            <span className="text-sm font-semibold text-black">Complete Your Profile</span>
          </div>
          <span className="text-sm text-black/40">{currentUser.profileCompletion}%</span>
        </div>
        <div className="w-full h-1.5 bg-black/[0.06] rounded-full mb-3">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${currentUser.profileCompletion}%` }}
          />
        </div>
        <p className="text-xs text-black/60 mb-1">Missing Information:</p>
        <ul className="text-xs text-black/40 list-disc pl-4 space-y-0.5 mb-3">
          {currentUser.missingInfo.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
        <button className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          Complete Profile
        </button>
      </div>

      {/* Post Composer */}
      <div className="bg-black/[0.04] border border-black/10 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-black/[0.10] border border-black/[0.15] flex items-center justify-center text-[10px] font-bold text-black shrink-0">
            2TG
          </div>
          <input
            type="text"
            placeholder="Share something with your network...."
            className="flex-1 bg-black/[0.06] border border-black/10 rounded-xl py-2 px-4 text-sm text-black placeholder:text-black/40 outline-none focus:border-black/[0.15] transition-colors"
          />
        </div>
        <div className="flex items-center gap-4 ml-12">
          <button className="flex items-center gap-1.5 text-xs text-black/40 hover:text-black/60 transition-colors">
            <Image className="w-4 h-4" /> Photo
          </button>
          <button className="flex items-center gap-1.5 text-xs text-black/40 hover:text-black/60 transition-colors">
            <Video className="w-4 h-4" /> Video
          </button>
          <button className="flex items-center gap-1.5 text-xs text-black/40 hover:text-black/60 transition-colors">
            <FileText className="w-4 h-4" /> Document
          </button>
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center justify-end gap-2 text-xs text-black/40">
        Sort by:
        <button className="flex items-center gap-1 text-black/60 hover:text-black transition-colors">
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
