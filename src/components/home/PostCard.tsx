import { ThumbsUp, Heart, MessageSquare, Repeat2, Bookmark, MoreHorizontal } from "lucide-react";
import { Post } from "@/data/mockFeed";

const reactionIcons: Record<string, { icon: React.ElementType; color: string }> = {
  Like: { icon: ThumbsUp, color: "text-blue-500" },
  Love: { icon: Heart, color: "text-red-500" },
  Curious: { icon: MessageSquare, color: "text-yellow-500" },
};

const PostCard = ({ post }: { post: Post }) => {
  const primaryReaction = post.reactions[0];
  const reactionConfig = primaryReaction ? reactionIcons[primaryReaction.type] || reactionIcons.Like : null;

  return (
    <div className="bg-black/[0.04] border border-black/10 rounded-xl overflow-hidden">
      <div className="flex items-start gap-3 px-4 pt-4">
        <div className="w-10 h-10 rounded-full bg-black/[0.10] border border-black/[0.15] flex items-center justify-center text-[10px] font-bold text-black shrink-0">
          {post.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-black truncate">{post.rollNo} {post.name}</p>
          <p className="text-[11px] text-black/40">{post.role}</p>
          <p className="text-[11px] text-black/40">{post.college}</p>
          <p className="text-[11px] text-black/40">{post.timeAgo}</p>
        </div>
        <button className="text-black/40 hover:text-black/60 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 py-3">
        <p className="text-sm text-black leading-relaxed">{post.content}</p>
      </div>

      <div className="px-4 pb-2 flex items-center justify-between text-[11px] text-black/40">
        <div className="flex items-center gap-1">
          {reactionConfig && (
            <>
              <reactionConfig.icon className={`w-3.5 h-3.5 ${reactionConfig.color}`} />
              <span>{primaryReaction.count} • 1</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          {post.comments > 0 && <span>{post.comments} comments</span>}
          <span>{post.reposts} reposts</span>
        </div>
      </div>

      <div className="border-t border-black/10" />

      <div className="flex items-center justify-between px-4 py-2">
        {reactionConfig ? (
          <button className={`flex items-center gap-1.5 text-xs font-medium ${reactionConfig.color}`}>
            <reactionConfig.icon className="w-4 h-4" />
            {primaryReaction.type}
          </button>
        ) : (
          <button className="flex items-center gap-1.5 text-xs font-medium text-black/40 hover:text-black/60 transition-colors">
            <ThumbsUp className="w-4 h-4" />
            Like
          </button>
        )}
        <button className="flex items-center gap-1.5 text-xs font-medium text-black/40 hover:text-black/60 transition-colors">
          <MessageSquare className="w-4 h-4" /> Comment
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-black/40 hover:text-black/60 transition-colors">
          <Repeat2 className="w-4 h-4" /> Repost
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-black/40 hover:text-black/60 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
