import TopNavbar from "../components/navbar/TopNavbar"
import BottomNavbar from "../components/navbar/BottomNavbar"
export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gray-50 pb-[56px]"> {/* 👈 match navbar height */}
      <TopNavbar />
      {children}
      <BottomNavbar />
    </div>
  );
}
