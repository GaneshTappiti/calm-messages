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
  { id: "1", name: "23981A05B6 SREE VENKATANADH IRAGAVARAPU", avatar: "SVI", lastMessage: "I would like to connect regarding this item. Item: Casio FX-991ES Plus-2nd Edition Scientific Calculator Price: ₹749 Location: Nano labs", time: "about 15 hours", unread: true },
  { id: "2", name: "24981A426F YASARAPU BHANOJI RAO", avatar: "YBR", lastMessage: "Hi", time: "3 days", unread: true },
  { id: "3", name: "23981A42X5 KARRI VENKATA SAI CHARAN", avatar: "KVSC", lastMessage: "Hi ra lamidi", time: "3 days", unread: true },
  { id: "4", name: "22981A44D4 PARCHURI YASWANTH", avatar: "PY", lastMessage: "Hey", time: "3 days", unread: true },
  { id: "5", name: "24981A424A GUDIMETLA REVANTH SAI RAM", avatar: "GRSR", lastMessage: "Thanks for letting me know!", time: "4 days", unread: true },
  { id: "6", name: "24981A4407 CHINTAPALLI SRI ASHRITH", avatar: "CSA", lastMessage: "Thanks for letting me know!", time: "4 days", unread: true },
  { id: "7", name: "24981A424P EDDIPILLI JEEVAN SAI", avatar: "EJS", lastMessage: "Thanks for letting me know!", time: "5 days", unread: true },
  { id: "8", name: "Vijay Kumar A", avatar: "VKA", lastMessage: "good morning sir", time: "5 days", unread: false },
  { id: "9", name: "21981A0526 CHARAN MANIKANTA NALLA", avatar: "CMN", lastMessage: "cool", time: "10 days", unread: true },
  { id: "10", name: "23981A42AB SAMATHAMU KULDEEP KUMAR", avatar: "SKK", lastMessage: "Thanks for letting me know!", time: "21 days", unread: true },
];

export const messagesByConversation: Record<string, Message[]> = {
  "1": [
    { id: "m1", text: "I would like to connect regarding this item. Item: Casio FX-991ES Plus-2nd Edition Scientific Calculator Price: ₹749 Location: Nano labs", time: "15h ago", incoming: true },
  ],
  "2": [
    { id: "m1", text: "Hi", time: "3 days ago", incoming: true },
  ],
  "3": [
    { id: "m1", text: "Hi ra lamidi", time: "3 days ago", incoming: true },
  ],
  "4": [
    { id: "m1", text: "Hey", time: "3 days ago", incoming: true },
  ],
  "5": [
    { id: "m1", text: "Thanks for letting me know!", time: "4 days ago", incoming: true },
  ],
  "6": [
    { id: "m1", text: "Thanks for letting me know!", time: "4 days ago", incoming: true },
  ],
  "7": [
    { id: "m1", text: "Thanks for letting me know!", time: "5 days ago", incoming: true },
  ],
  "8": [
    { id: "m1", text: "good morning sir", time: "5 days ago", incoming: true },
  ],
  "9": [
    { id: "m1", text: "cool", time: "10 days ago", incoming: true },
  ],
  "10": [
    { id: "m1", text: "Thanks for letting me know!", time: "21 days ago", incoming: true },
  ],
};
