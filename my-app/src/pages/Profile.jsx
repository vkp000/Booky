import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard"; // ✅ make sure you have this

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="pt-20 max-w-4xl mx-auto px-4 flex gap-6">
        {/* Left Sidebar */}
        <div className="w-1/4">
          <ProfileCard />
        </div>

        {/* Main Content */}
        <div className="w-2/3">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Cover photo */}
            <div className="h-32 bg-blue-600"></div>

            {/* Profile info */}
            <div className="px-6 pb-6 -mt-12 flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full border-4 border-white -mt-12"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
              />
              <h2 className="mt-4 text-xl font-semibold">Vivek Prajapat</h2>
              <p className="text-gray-600 text-sm">MERN Stack Developer | C++ Enthusiast</p>

              {/* Stats */}
              <div className="mt-4 w-full flex justify-around text-sm text-gray-500">
                <div className="text-center">
                  <p className="font-semibold text-gray-800">150</p>
                  <p>Connections</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">30</p>
                  <p>Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">10</p>
                  <p>Endorsements</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white shadow rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Final-year B.Tech CSE student passionate about building full-stack web apps and solving
              real-world problems. I focus on clean code, performance, and user-centric design. Always
              learning and exploring new technologies.
            </p>
          </div>
        </div>
        

      </div>
    </>
  );
}
