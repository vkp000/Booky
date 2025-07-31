import { useEffect, useState } from "react";
import { FaHome, FaUsers, FaBriefcase, FaEnvelope, FaBell, FaBook, FaPlus } from "react-icons/fa";
import NavItem from "./NavItem"; // Adjust the path as needed


export default function BottomNavbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t z-50 flex justify-around py-2 text-xs text-gray-600 h-[56px]">
      <NavItem
        icon={<FaHome size={isMobile ? 16 : 18} />}
        label="Home"
        to="/dashboard"
      />
      <NavItem
        icon={<FaUsers size={isMobile ? 16 : 18} />}
        label="Near me"
        to="/network"
      />
      <NavItem
        icon={<FaBook size={isMobile ? 16 : 18} />}
        label="Book"
        to="/books"
      />
      <NavItem
        icon={<FaPlus size={isMobile ? 16 : 18} />}
        label="Post"
        to="/addpost"
      />
      <NavItem
        icon={<FaEnvelope size={isMobile ? 16 : 18} />}
        label="Messaging"
        to="/messaging"
      />
      <NavItem
        icon={<FaBell size={isMobile ? 16 : 18} />}
        label="Notifications"
        to="/notifications"
      />
    </div>
  );
}
