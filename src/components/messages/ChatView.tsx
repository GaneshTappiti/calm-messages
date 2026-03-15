import { ArrowLeft, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Conversation, Message } from "@/data/mockMessages";

interface ChatViewProps {
  conversation: Conversation;
  messages: Message[];
  onBack: () => void;
}

const ChatView = ({ conversation, messages, onBack }: ChatViewProps) => {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-5 py-4 bg-card border-b border-border">
        <button onClick={onBack} className="lg:hidden text-foreground focus-brand rounded-sm">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full bg-brand-surface-elevated border border-border flex items-center justify-center text-xs font-semibold text-foreground">
          {conversation.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{conversation.name}</p>
          <p className="text-xs text-primary">Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.incoming ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[70%] px-4 py-2.5 rounded-2xl ${
                msg.incoming
                  ? "bg-card border border-border text-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.incoming ? "text-muted-foreground" : "text-primary-foreground/60"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 shadow-brand-sm">
          <input
            type="text"
            placeholder="Message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-brand-teal-light focus-brand shadow-brand-sm">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
