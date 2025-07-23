import React from "react"; 

export default function Settings() {
  return (
    <> 
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      <div className="bg-white shadow rounded-lg p-5 space-y-6">
        {/* Account Info */}
        <section>
          <h2 className="text-lg font-medium mb-2">Account</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Email</span>
              <span className="text-gray-600">vivekprajapat03@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span>Password</span>
              <button className="text-blue-600 hover:underline">Change</button>
            </div>
          </div>
        </section>

        <hr />

        {/* Preferences */}
        <section>
          <h2 className="text-lg font-medium mb-2">Preferences</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Language</span>
              <select className="border px-2 py-1 rounded text-sm">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="flex justify-between">
              <span>Theme</span>
              <select className="border px-2 py-1 rounded text-sm">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
          </div>
        </section>

        <hr />

        {/* Danger Zone */}
        <section>
          <h2 className="text-lg font-medium mb-2 text-red-500">Danger Zone</h2>
          <button className="text-red-600 hover:underline text-sm">
            Delete Account
          </button>
        </section>
      </div>
    </div>
    </>
  );
}
