import { useState } from "react";
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaEnvelope,
  FaBell,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white fixed top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo + Search */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5832/5832416.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-sm pl-10 pr-3 py-1.5 rounded-md focus:outline-none focus:ring-2 ring-blue-500"
            />
            <FaSearch className="absolute top-2.5 left-2.5 text-gray-500" />
          </div>
        </div>

        {/* Menu Icons */}
        <nav className="flex items-center gap-6 text-gray-600 text-sm">
          <NavItem icon={<FaHome size={18} />} label="Home" to="/dashboard" />
          <NavItem
            icon={<FaUsers size={18} />}
            label="My Network"
            to="/network"
          />
          <NavItem icon={<FaBriefcase size={18} />} label="Jobs" to="/jobs" />
          <NavItem
            icon={<FaEnvelope size={18} />}
            label="Messaging"
            to="/messaging"
          />
          <NavItem
            icon={<FaBell size={18} />}
            label="Notifications"
            to="/notifications"
          />

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setProfileOpen((prev) => !prev)}
              className="cursor-pointer flex flex-col items-center"
            >
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              <div className="flex items-center text-xs">
                Me <IoMdArrowDropdown />
              </div>
            </div>
            {profileOpen && (
              <>
                <div
                  onClick={() => setProfileOpen(false)}
                  className="fixed inset-0 z-10"
                ></div>
                <div className="absolute right-0 top-10 bg-white shadow-lg border rounded-md w-48 z-20 text-sm">
                  <div className="p-3 border-b">
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="block"
                    >
                      <p className="font-medium">Vivek Prajapat</p>
                      <p className="text-xs text-blue-600 hover:underline">
                        View Profile
                      </p>
                    </Link>
                  </div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/settings">Settings</Link>
                  </div>

                  <div className="p-2 hover:bg-gray-100 cursor-pointer">
                    Log Out
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

// ✅ Active Link Styling
function NavItem({ icon, label, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center transition px-2 ${
        isActive
          ? "text-black border-b-2 border-black"
          : "text-gray-600 hover:text-black"
      }`}
    >
      {icon}
      <span className="text-xs mt-0.5">{label}</span>
    </Link>
  );
}
