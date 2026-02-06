import { useState } from "react";
import ConversationList from "@/components/messages/ConversationList";
import ChatView from "@/components/messages/ChatView";
import { conversations, messagesByConversation } from "@/data/mockMessages";

const Index = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"chats" | "contacts">("chats");

  const activeConversation = conversations.find((c) => c.id === activeId);
  const activeMessages = activeId ? messagesByConversation[activeId] || [] : [];

  return (
    <div className="h-screen w-full bg-background flex">
      {/* Conversation List */}
      <div
        className={`w-full lg:w-[380px] lg:border-r border-glass-border h-full ${
          activeId ? "hidden lg:flex lg:flex-col" : "flex flex-col"
        }`}
      >
        <ConversationList
          conversations={conversations}
          activeId={activeId}
          onSelect={setActiveId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Chat View */}
      <div
        className={`flex-1 h-full ${
          activeId ? "flex flex-col" : "hidden lg:flex lg:flex-col"
        }`}
      >
        {activeConversation ? (
          <ChatView
            conversation={activeConversation}
            messages={activeMessages}
            onBack={() => setActiveId(null)}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[hsl(var(--text-muted))] text-sm">Select a conversation</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
