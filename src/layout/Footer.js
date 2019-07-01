import React from "react";
import "../styles/Footer.css";
import Data from "../text";
import { Route } from "react-router";

const Footer = props => {
  let text = "";
  if (props.language === "es") {
    text = Data.es.footer;
  } else if (props.language === "en") {
    text = Data.en.footer;
  }

  const location = () => {
    if (window.location.pathname === "/") return <span>{text.main}</span>;
    else return <span>{window.location.pathname}</span>;
  };

  return (
    <div className="footer">
      <div className="localization">
        {text.localization}
        <Route path="/" exact render={props => location()} />
        <Route path="/skills" exact render={props => location()} />
        <Route path="/juegos" exact render={props => location()} />
        <Route path="/contact" exact render={props => location()} />
      </div>
      <div className="author">
        {text.author}
        <span>Igor Fenikowski</span>
      </div>
      <div className="go-up">
        {text.up}
        <button
          className="arrow"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-angle-down" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
