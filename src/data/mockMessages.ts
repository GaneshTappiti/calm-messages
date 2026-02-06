export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

export interface Message {
  id: string;
  text: string;
  time: string;
  incoming: boolean;
}

export const conversations: Conversation[] = [
  { id: "1", name: "Alex Rivera", avatar: "AR", lastMessage: "Sounds good, let's sync tomorrow", time: "Now", unread: true },
  { id: "2", name: "Jordan Lee", avatar: "JL", lastMessage: "The deck is ready for review", time: "2m", unread: true },
  { id: "3", name: "Sam Chen", avatar: "SC", lastMessage: "Thanks for the update!", time: "15m", unread: false },
  { id: "4", name: "Morgan Blake", avatar: "MB", lastMessage: "Can you share the link?", time: "1h", unread: false },
  { id: "5", name: "Taylor Kim", avatar: "TK", lastMessage: "See you at the event", time: "3h", unread: false },
  { id: "6", name: "Casey Nguyen", avatar: "CN", lastMessage: "Got it, will follow up", time: "Yesterday", unread: false },
  { id: "7", name: "Riley Patel", avatar: "RP", lastMessage: "Great call today", time: "Yesterday", unread: false },
  { id: "8", name: "Avery Martinez", avatar: "AM", lastMessage: "Let me check and get back to you", time: "Mon", unread: false },
];

export const messagesByConversation: Record<string, Message[]> = {
  "1": [
    { id: "m1", text: "Hey, are you free to chat about the project?", time: "10:30", incoming: true },
    { id: "m2", text: "Yeah, what's up?", time: "10:32", incoming: false },
    { id: "m3", text: "I was thinking we could restructure the timeline a bit", time: "10:33", incoming: true },
    { id: "m4", text: "That makes sense. What did you have in mind?", time: "10:35", incoming: false },
    { id: "m5", text: "Push the launch to next Friday, gives us buffer", time: "10:36", incoming: true },
    { id: "m6", text: "Sounds good, let's sync tomorrow", time: "10:38", incoming: false },
  ],
  "2": [
    { id: "m1", text: "The deck is ready for review", time: "09:15", incoming: true },
    { id: "m2", text: "Perfect, I'll take a look this afternoon", time: "09:20", incoming: false },
  ],
  "3": [
    { id: "m1", text: "Shipped the new feature to staging", time: "Yesterday", incoming: false },
    { id: "m2", text: "Thanks for the update!", time: "Yesterday", incoming: true },
  ],
};
