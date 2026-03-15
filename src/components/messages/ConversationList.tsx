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
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-black mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
          <input
            type="text"
            placeholder="Search conversations…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-black/[0.06] border border-black/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-black placeholder:text-black/40 outline-none focus:border-black/[0.15] transition-colors"
          />
        </div>
      </div>

      <div className="px-5 mb-3">
        <div className="flex bg-black/[0.04] border border-black/10 rounded-2xl p-1">
          <button
            onClick={() => onTabChange("chats")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === "chats"
                ? "bg-black/[0.10] border border-black/[0.15] text-black"
                : "text-black/50 border border-transparent"
            }`}
          >
            Chats<span className="ml-1 text-black/40">(19)</span>
          </button>
          <button
            onClick={() => onTabChange("contacts")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === "contacts"
                ? "bg-black/[0.10] border border-black/[0.15] text-black"
                : "text-black/50 border border-transparent"
            }`}
          >
            Contacts<span className="ml-1 text-black/40">(10)</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-2">
        {filtered.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
              activeId === conv.id
                ? "bg-black/[0.10] border-black/[0.15]"
                : "bg-black/[0.04] border-black/10 hover:bg-black/[0.06]"
            }`}
          >
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-black/[0.10] border border-black/[0.15] flex items-center justify-center text-[10px] font-semibold text-black shrink-0">
              {conv.avatar}
            </div>
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-black truncate">
                  {conv.name}
                </span>
                <span className="text-xs text-black/40 whitespace-nowrap shrink-0">{conv.time}</span>
              </div>
              <p className="text-xs truncate mt-0.5 text-black/50">
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
