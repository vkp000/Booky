import { NavLink } from "react-router-dom";

export default function NavItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 px-2 transition ${
          isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
        }`
      }
    >
      {icon}
      <span className="text-[11px] font-medium">{label}</span>
    </NavLink>
  );
}
