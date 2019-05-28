import React from "react";
import { Route } from "react-router-dom";

const Footer = props => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={props => (
          <p style={{ fontSize: 14 }}>
            Jestes na <span style={{ color: "red" }}>stronie glownej</span>
          </p>
        )}
      />
      <Route
        path="/:page"
        exact
        render={props => (
          <>
            <p style={{ fontSize: 14, display: "inline" }}>
              Jestes na stronie{" "}
              <span style={{ color: "red" }}>{props.match.params.page} </span>
            </p>
            <p style={{ fontSize: 14, display: "inline" }}>
              Url: <span style={{ color: "red" }}>{props.match.url} </span>
            </p>
            {/* <p style={{ fontSize: 14, display: "inline" }}>
              Path: <span style={{ color: "red" }}>{props.match.path} </span>
            </p> */}
          </>
        )}
      />
      <Route
        path="/:page/:id"
        exact
        render={props => (
          <>
            <p style={{ fontSize: 14, display: "inline" }}>
              Jestes na stronie{" "}
              <span style={{ color: "red" }}>{props.match.params.page} </span>
            </p>
            <p style={{ fontSize: 14, display: "inline" }}>
              Url: <span style={{ color: "red" }}>{props.match.url} </span>
            </p>
            {/* <p style={{ fontSize: 14, display: "inline" }}>
              Path: <span style={{ color: "red" }}>{props.match.path} </span>
            </p> */}
          </>
        )}
      />
    </div>
  );
};

export default Footer;
