import React from "react";

const ProfileCard = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border dark:border-gray-700">
      <div className="h-24 bg-blue-600 dark:bg-blue-700"></div>

      <div className="relative flex flex-col items-center -mt-12 px-4 pb-6">
        <img
          className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover"
          src="https://i.pravatar.cc/150?img=3"
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          Vivek Prajapat
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          MERN Stack Developer | Building Digital Products
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
