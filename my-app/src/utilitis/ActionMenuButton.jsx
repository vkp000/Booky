import React, { useState, useRef, useEffect, useCallback } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { HiSwitchHorizontal } from "react-icons/hi";

export default function ActionMenuButton({ isMobile }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  const handleEscape = useCallback((event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClickOutside, handleEscape]);

  return (
    <div className="relative flex-1" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex flex-col space-y-1 items-center justify-center
          text-sm text-gray-600 hover:bg-gray-200 hover:text-blue-600
          transition rounded-md py-2 px-3 w-full
        `}
      >
        <FaShoppingBag size={isMobile ? 16 : 18} />
        <span>Own</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-20 p-1">
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
            <FiArrowDownCircle size={18} />
            Borrow Request
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
            <FaShoppingBag size={18} />
            Buy
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
            <HiSwitchHorizontal size={18} />
            Exchange
          </button>
        </div>
      )}
    </div>
  );
}
