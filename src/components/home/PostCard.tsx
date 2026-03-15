import { ThumbsUp, Heart, MessageSquare, Repeat2, Bookmark, MoreHorizontal } from "lucide-react";
import { Post } from "@/data/mockFeed";

const reactionIcons: Record<string, { icon: React.ElementType; color: string }> = {
  Like: { icon: ThumbsUp, color: "text-primary" },
  Love: { icon: Heart, color: "text-destructive" },
  Curious: { icon: MessageSquare, color: "text-brand-amber" },
};

const PostCard = ({ post }: { post: Post }) => {
  const primaryReaction = post.reactions[0];
  const reactionConfig = primaryReaction ? reactionIcons[primaryReaction.type] || reactionIcons.Like : null;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand-sm hover:shadow-brand-md transition-shadow">
      <div className="flex items-start gap-3 px-4 pt-4">
        <div className="w-10 h-10 rounded-full bg-brand-surface-elevated border border-border flex items-center justify-center text-[10px] font-bold text-foreground shrink-0">
          {post.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{post.rollNo} {post.name}</p>
          <p className="text-[11px] text-muted-foreground">{post.role}</p>
          <p className="text-[11px] text-muted-foreground">{post.college}</p>
          <p className="text-[11px] text-muted-foreground">{post.timeAgo}</p>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors focus-brand rounded-sm">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 py-3">
        <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
      </div>

      <div className="px-4 pb-2 flex items-center justify-between text-[11px] text-muted-foreground">
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

      <div className="border-t border-border" />

      <div className="flex items-center justify-between px-4 py-2">
        {reactionConfig ? (
          <button className={`flex items-center gap-1.5 text-xs font-medium ${reactionConfig.color} focus-brand rounded-sm`}>
            <reactionConfig.icon className="w-4 h-4" />
            {primaryReaction.type}
          </button>
        ) : (
          <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
            <ThumbsUp className="w-4 h-4" />
            Like
          </button>
        )}
        <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
          <MessageSquare className="w-4 h-4" /> Comment
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
          <Repeat2 className="w-4 h-4" /> Repost
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-brand rounded-sm">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
