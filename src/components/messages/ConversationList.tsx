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
        <h1 className="text-2xl font-bold text-foreground mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search conversations…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-secondary border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="px-5 mb-3">
        <div className="flex bg-card border border-border rounded-2xl p-1">
          <button
            onClick={() => onTabChange("chats")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all focus-brand ${
              activeTab === "chats"
                ? "bg-primary text-primary-foreground shadow-brand-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Chats<span className={`ml-1 ${activeTab === "chats" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>(19)</span>
          </button>
          <button
            onClick={() => onTabChange("contacts")}
            className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all focus-brand ${
              activeTab === "contacts"
                ? "bg-primary text-primary-foreground shadow-brand-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contacts<span className={`ml-1 ${activeTab === "contacts" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>(10)</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-2">
        {filtered.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left focus-brand ${
              activeId === conv.id
                ? "bg-primary/10 border-primary/25 shadow-brand-sm"
                : "bg-card border-border hover:bg-brand-surface-elevated"
            }`}
          >
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-brand-surface-elevated border border-border flex items-center justify-center text-[10px] font-semibold text-foreground shrink-0">
              {conv.avatar}
            </div>
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground truncate">
                  {conv.name}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">{conv.time}</span>
              </div>
              <p className="text-xs truncate mt-0.5 text-muted-foreground">
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
