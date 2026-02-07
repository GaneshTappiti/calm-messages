import { Search } from "lucide-react";
import { Conversation } from "@/data/mockMessages";

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTab: "chats" | "contacts";
  onTabChange: (tab: "chats" | "contacts") => void;
}

const ConversationList = ({
  conversations,
  activeId,
  onSelect,
  searchQuery,
  onSearchChange,
  activeTab,
  onTabChange,
}: ConversationListProps) => {
  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Messages</h1>
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--text-muted))]" />
          <input
            type="text"
            placeholder="Search conversations…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-glass-medium border border-glass-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-[hsl(var(--text-muted))] outline-none focus:border-glass-border-strong transition-colors"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 mb-3">
        <div className="flex bg-glass-subtle border border-glass-border rounded-2xl p-1">
          <button
            onClick={() => onTabChange("chats")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === "chats"
                ? "bg-glass-strong border border-glass-border-strong text-foreground"
                : "text-[hsl(var(--text-secondary))] border border-transparent"
            }`}
          >
            Chats<span className="ml-1 text-[hsl(var(--text-muted))]">(19)</span>
          </button>
          <button
            onClick={() => onTabChange("contacts")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === "contacts"
                ? "bg-glass-strong border border-glass-border-strong text-foreground"
                : "text-[hsl(var(--text-secondary))] border border-transparent"
            }`}
          >
            Contacts<span className="ml-1 text-[hsl(var(--text-muted))]">(10)</span>
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-2">
        {filtered.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
              activeId === conv.id
                ? "bg-glass-strong border-glass-border-strong"
                : "bg-glass-subtle border-glass-border hover:bg-glass-medium"
            }`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-glass-strong border border-glass-border-strong flex items-center justify-center text-[10px] font-semibold text-foreground shrink-0">
              {conv.avatar}
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground truncate">
                  {conv.name}
                </span>
                <span className="text-xs text-[hsl(var(--text-muted))] whitespace-nowrap shrink-0">{conv.time}</span>
              </div>
              <p className="text-xs truncate mt-0.5 text-[hsl(var(--text-muted))]">
                {conv.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
