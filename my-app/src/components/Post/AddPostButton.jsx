import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import { HiOutlinePhotograph, HiOutlineVideoCamera } from "react-icons/hi";

export default function AddPostButton({ isMobile }) {
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
        <FaPlus size={isMobile ? 16 : 18} />
        <span>Post</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-20 p-1">
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
            <FaRegFileAlt size={18} />
            Write Article
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
            <HiOutlinePhotograph size={18} />
            Photo Post
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
            <HiOutlineVideoCamera size={18} />
            Video Post
          </button>
        </div>
      )}
    </div>
  );
}
