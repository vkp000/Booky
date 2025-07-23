import React, { useState } from "react"; 

const dummyMessages = {
  Alice: [
    { from: "Alice", text: "Hey! How are you?", time: "10:30 AM" },
    { from: "You", text: "I’m good, you?", time: "10:31 AM" },
  ],
  Bob: [
    { from: "Bob", text: "Ping me when you’re free.", time: "9:15 AM" },
    { from: "You", text: "Sure thing.", time: "9:17 AM" },
  ],
};

const Messaging = () => {
  const contacts = Object.keys(dummyMessages);
  const [selectedUser, setSelectedUser] = useState(contacts[0]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    dummyMessages[selectedUser].push({
      from: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });
    setInput("");
  };

  return (
    <> 
    <div className="pt-[56px] flex h-[calc(100vh-56px)] bg-white">
      {/* Sidebar */}
      <aside className="w-[320px] border-r border-gray-200 bg-[#f3f2ef]">
        <div className="px-4 py-3 border-b border-gray-300 text-gray-800 font-semibold text-sm">
          Messaging
        </div>
        {contacts.map((name) => {
          const last = dummyMessages[name].at(-1);
          return (
            <div
              key={name}
              onClick={() => setSelectedUser(name)}
              className={`cursor-pointer px-4 py-3 hover:bg-gray-200 ${
                selectedUser === name ? "bg-white border-l-4 border-blue-600" : ""
              }`}
            >
              <div className="font-medium text-sm text-gray-900">{name}</div>
              <div className="text-xs text-gray-500 truncate">{last.text}</div>
              <div className="text-[10px] text-gray-400 mt-1">{last.time}</div>
            </div>
          );
        })}
      </aside>

      {/* Chat */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-800">{selectedUser}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f3f2ef]">
          {dummyMessages[selectedUser].map((msg, i) => (
            <div
              key={i}
              className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                msg.from === "You"
                  ? "ml-auto bg-blue-100 text-right"
                  : "bg-white text-left"
              }`}
            >
              <p>{msg.text}</p>
              <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t flex gap-2 items-center bg-white">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Write a message..."
            className="flex-1 border border-gray-300 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Messaging;
