import { NavLink } from "react-router-dom";

export const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "red",
    transition: "all 0.5s",
    fontWeight: "bold",
    textDecoration: "none",
  };
  return (
    <NavLink
      style={({ isActive }) =>
        isActive
          ? activeStyle
          : { color: "#e8e0e0", textDecoration: "none", fontWeight: "bold" }
      }
      to={to}
      end
      {...props}
    />
  );
};
