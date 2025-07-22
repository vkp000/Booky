import { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard"; // ✅ Import card

const dummyNotifications = [
  {
    id: 1,
    user: "Riya Sharma",
    action: "liked your post",
    time: "2h ago",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    user: "Mohit Verma",
    action: "commented on your update",
    time: "5h ago",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    user: "LinkedIn",
    action: "You have 3 new connection requests",
    time: "1d ago",
    avatar: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
  },
];

export default function Notifications() {
  const [notifications] = useState(dummyNotifications);

  return (
    <>
      <Navbar />
      <div className="pt-20 max-w-6xl mx-auto px-4 flex gap-6">
        {/* Left Sidebar */}
        <div className="w-1/5">
          <ProfileCard />
        </div>

        {/* Notifications List */}
        <div className="w-2/3">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm hover:shadow-md transition"
              >
                <img
                  src={notif.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{notif.user}</span>{" "}
                    {notif.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
