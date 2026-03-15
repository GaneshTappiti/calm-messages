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
      <div className="flex items-center gap-3 px-5 py-4 bg-black/[0.04] border-b border-black/10">
        <button onClick={onBack} className="lg:hidden text-black">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full bg-black/[0.10] border border-black/[0.15] flex items-center justify-center text-xs font-semibold text-black">
          {conversation.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-black">{conversation.name}</p>
          <p className="text-xs text-black/40">Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.incoming ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[70%] px-4 py-2.5 rounded-2xl ${
                msg.incoming
                  ? "bg-black/[0.06] text-black"
                  : "bg-black/[0.10] text-black"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className="text-[10px] text-black/[0.35] mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center gap-2 bg-black/[0.04] border border-black/10 rounded-xl px-4 py-2">
          <input
            type="text"
            placeholder="Message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-sm text-black placeholder:text-black/40 outline-none"
          />
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/[0.10] border border-black/[0.15] text-black transition-colors hover:bg-black/[0.15]">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
