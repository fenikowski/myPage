import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "panel admina", path: "/admin" }
];

const Navigation = props => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
