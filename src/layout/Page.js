import React from "react";
import { Switch, Route } from "react-router-dom";
import Introduction from "../components/introduction.js";
import Juegos from "../components/juegos.js";
import Contact from "../components/contact";
import Skills from "../components/skills";
import Error from "../components/error";

const Page = props => {
  return (
    <div className="page">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Introduction language={props.language} />}
        />
        <Route
          path="/skills"
          render={() => <Skills language={props.language} />}
        />
        <Route
          path="/games"
          render={() => <Juegos language={props.language} />}
        />
        <Route
          path="/contact"
          render={() => <Contact language={props.language} />}
        />
        <Route render={() => <Error language={props.language} />} />
      </Switch>
    </div>
  );
};

export default Page;
