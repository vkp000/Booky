// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const interestOptions = [
//   "DSA", "UPSC", "GATE", "IIT-JEE", "NEET",
//   "CBSE", "NCERT", "Handwritten Notes",
//   "Fiction", "Non-fiction", "Biography",
//   "Engineering", "Competitive Exams", "Board Exams", "Comics",
// ];

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     interests: [],
//   });

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleOutsideClick = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, []);

//   const handleInterestChange = (interest) => {
//     setFormData((prev) => {
//       const alreadySelected = prev.interests.includes(interest);
//       return {
//         ...prev,
//         interests: alreadySelected
//           ? prev.interests.filter((i) => i !== interest)
//           : [...prev.interests, interest],
//       };
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Registering:", formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
//           Register for Booky 📚
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Full Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Custom Multi-select Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <label className="block text-gray-700 font-medium mb-1">Select Interests</label>
//             <div
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="w-full px-4 py-2 border rounded-md bg-white cursor-pointer"
//             >
//               {formData.interests.length > 0 ? (
//                 <div className="flex flex-wrap gap-1">
//                   {formData.interests.map((interest) => (
//                     <span
//                       key={interest}
//                       className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
//                     >
//                       {interest}
//                     </span>
//                   ))}
//                 </div>
//               ) : (
//                 <span className="text-gray-400">Select your interests</span>
//               )}
//             </div>

//             {dropdownOpen && (
//               <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-md w-full max-h-52 overflow-y-auto">
//                 {interestOptions.map((interest) => (
//                   <label
//                     key={interest}
//                     className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={formData.interests.includes(interest)}
//                       onChange={() => handleInterestChange(interest)}
//                       className="mr-2"
//                     />
//                     {interest}
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-gray-600 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

















import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const interestOptions = [
  "DSA", "UPSC", "GATE", "IIT-JEE", "NEET",
  "CBSE", "NCERT", "Handwritten Notes",
  "Fiction", "Non-fiction", "Biography",
  "Engineering", "Competitive Exams", "Board Exams", "Comics",
];

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    interests: [],
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const alreadySelected = prev.interests.includes(interest);
      return {
        ...prev,
        interests: alreadySelected
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Join Booky 📚
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Multi-Select Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interests
            </label>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full min-h-[42px] px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer flex flex-wrap gap-1 items-center"
            >
              {formData.interests.length > 0 ? (
                formData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-sm">
                  Select your interests
                </span>
              )}
            </div>

            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-56 overflow-y-auto">
                {interestOptions.map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="mr-2"
                    />
                    {interest}
                  </label>
                ))}
                <div className="flex justify-end border-t px-4 py-2 bg-gray-50">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
