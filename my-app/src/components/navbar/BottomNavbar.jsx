import { FaHome, FaUsers, FaBriefcase, FaEnvelope, FaBell, FaBook } from "react-icons/fa";
import NavItem from "./NavItem"; // Adjust the path as needed

export default function BottomNavbar() {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t z-50 flex justify-around py-2 text-xs text-gray-600">
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
