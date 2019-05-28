import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import Scroll from "../components/scroll.js";

const Navigation = props => {
  const navList = [
    {
      id: 0,
      name: "Inicio",
      path: "/",
      exact: true
    },
    {
      id: 1,
      name: "Habilidades",
      path: "/habilidades"
    },
    {
      id: 2,
      name: "Juegos",
      path: "/juegos"
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact"
    }
  ];

  const list = navList.map(nav => (
    <li key={nav.id}>
      <NavLink exact={nav.exact} to={nav.path}>
        {nav.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <Scroll />
      <nav className="main-navigation">
        <div className="shadow" />
        <ul className="navigation">{list}</ul>
      </nav>
    </>
  );
};

export default Navigation;
