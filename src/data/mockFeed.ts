export interface Post {
  id: string;
  avatar: string;
  rollNo: string;
  name: string;
  role: string;
  college: string;
  timeAgo: string;
  content: string;
  image?: string;
  reactions: { type: string; count: number }[];
  comments: number;
  reposts: number;
}

export const posts: Post[] = [
  {
    id: "1",
    avatar: "2YBR",
    rollNo: "24981A426F",
    name: "YASARAPU BHANOJI RAO",
    role: "Student",
    college: "raghuenggcollege.in",
    timeAgo: "5 days ago",
    content: "Hey This is Bhanoji I'm New to clstr looking forward to staying in touch",
    reactions: [{ type: "Like", count: 1 }],
    comments: 0,
    reposts: 0,
  },
  {
    id: "2",
    avatar: "2RSSN",
    rollNo: "24981A0133",
    name: "RAMBARKI SAI SASHANK NATH",
    role: "Student",
    college: "raghuenggcollege.in",
    timeAgo: "17 days ago",
    content: "Hey!",
    reactions: [{ type: "Love", count: 1 }],
    comments: 1,
    reposts: 0,
  },
  {
    id: "3",
    avatar: "2PY",
    rollNo: "22981A44D4",
    name: "PARCHURI YASWANTH",
    role: "Student",
    college: "raghuenggcollege.in",
    timeAgo: "14 days ago",
    content: "Keep the fire UP.",
    reactions: [{ type: "Love", count: 1 }],
    comments: 0,
    reposts: 0,
  },
  {
    id: "4",
    avatar: "2PY",
    rollNo: "22981A44D4",
    name: "PARCHURI YASWANTH",
    role: "Student",
    college: "raghuenggcollege.in",
    timeAgo: "14 days ago",
    content: "creator, tell me one thing why i have to use this application??",
    reactions: [],
    comments: 1,
    reposts: 0,
  },
  {
    id: "5",
    avatar: "2PRP",
    rollNo: "24981A0556",
    name: "POTNURU RAHUL PATNAIK",
    role: "Student",
    college: "raghuenggcollege.in",
    timeAgo: "14 days ago",
    content: "Hi I'm new to clstr.This is my first post.Im so excited how it turns out to be.congrats @ganesh anna for this wonderful platform to connect with my college pears.",
    reactions: [{ type: "Like", count: 1 }],
    comments: 0,
    reposts: 0,
  },
  {
    id: "6",
    avatar: "2PY",
    rollNo: "22981A44D4",
    name: "PARCHURI YASWANTH",
    role: "Student",
    college: "raghuenggcollege.in",
    timeAgo: "14 days ago",
    content: "My first post.",
    reactions: [{ type: "Love", count: 1 }],
    comments: 0,
    reposts: 1,
  },
];

export const currentUser = {
  avatar: "2T",
  rollNo: "23981A42U4",
  name: "TAP...",
  role: "Student",
  college: "raghuenggcollege.in",
  community: "raghuenggcollege.in community",
  memberOf: "raghuenggcollege.in member",
  profileCompletion: 50,
  missingInfo: ["Bio (at least 30 characters)", "Profile picture"],
};

export const navItems = [
  { label: "Home", icon: "Home" },
  { label: "Alumni Directory", icon: "Users" },
  { label: "Mentorship", icon: "GraduationCap" },
  { label: "Events", icon: "Calendar" },
  { label: "Messages", icon: "MessageSquare", href: "/messages" },
  { label: "Clubs", icon: "Users" },
  { label: "Jobs", icon: "Briefcase" },
  { label: "EcoCampus", icon: "Leaf" },
  { label: "Projects", icon: "FolderOpen" },
  { label: "Skill Analysis", icon: "BarChart3" },
];

export const trendingConnections = [
  { avatar: "2P", name: "229...", role: "Student", color: "bg-blue-500", connected: true },
  { avatar: "RA", name: "Rag...", role: "Club Member", color: "bg-red-500", connected: true },
  { avatar: "2G", name: "249...", role: "Student", color: "bg-green-500", connected: true },
];
