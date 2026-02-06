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
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-glass-subtle border-b border-glass-border">
        <button onClick={onBack} className="lg:hidden text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full bg-glass-strong border border-glass-border-strong flex items-center justify-center text-xs font-semibold text-foreground">
          {conversation.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{conversation.name}</p>
          <p className="text-xs text-[hsl(var(--text-muted))]">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.incoming ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[70%] px-4 py-2.5 rounded-2xl ${
                msg.incoming
                  ? "bg-glass-medium text-foreground"
                  : "bg-glass-strong text-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className="text-[10px] text-[hsl(var(--text-faint))] mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 bg-glass-subtle border border-glass-border rounded-xl px-4 py-2">
          <input
            type="text"
            placeholder="Message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-[hsl(var(--text-muted))] outline-none"
          />
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-glass-strong border border-glass-border-strong text-foreground transition-colors hover:bg-[hsl(0_0%_100%/0.15)]">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
