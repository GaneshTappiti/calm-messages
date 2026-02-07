import TopNav from "@/components/home/TopNav";
import LeftSidebar from "@/components/home/LeftSidebar";
import Feed from "@/components/home/Feed";
import RightSidebar from "@/components/home/RightSidebar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <TopNav />
      <div className="max-w-[1200px] mx-auto px-4 py-6 flex gap-6">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
