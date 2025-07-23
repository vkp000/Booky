import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between px-4 py-2 border-b">
      {/* Logo */}
      <div className="text-xl font-bold">📚 Booky</div>

      {/* Search */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-1.5 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Profile & Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
        >
          <img
            src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden md:inline">▼</span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </Link>
            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </Link>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
