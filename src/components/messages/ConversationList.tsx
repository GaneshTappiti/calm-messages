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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search conversations…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/[0.06] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/[0.15] transition-colors"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 mb-3">
        <div className="flex bg-white/[0.04] border border-white/10 rounded-2xl p-1">
          <button
            onClick={() => onTabChange("chats")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === "chats"
                ? "bg-white/[0.10] border border-white/[0.15] text-white"
                : "text-white/50 border border-transparent"
            }`}
          >
            Chats<span className="ml-1 text-white/40">(19)</span>
          </button>
          <button
            onClick={() => onTabChange("contacts")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === "contacts"
                ? "bg-white/[0.10] border border-white/[0.15] text-white"
                : "text-white/50 border border-transparent"
            }`}
          >
            Contacts<span className="ml-1 text-white/40">(10)</span>
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
                ? "bg-white/[0.10] border-white/[0.15]"
                : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06]"
            }`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-white/[0.10] border border-white/[0.15] flex items-center justify-center text-[10px] font-semibold text-white shrink-0">
              {conv.avatar}
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-white truncate">
                  {conv.name}
                </span>
                <span className="text-xs text-white/40 whitespace-nowrap shrink-0">{conv.time}</span>
              </div>
              <p className="text-xs truncate mt-0.5 text-white/50">
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
