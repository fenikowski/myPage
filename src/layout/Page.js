import React from "react";
import { Switch, Route } from "react-router-dom";
import Introduction from "../components/introduction.js";
import Juegos from "../components/juegos.js";
import Contact from "../components/contact";

const Page = props => {
  return (
    <div className="page">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Introduction language={props.language} />}
        />
        <Route path="/projectos" render={() => <p>estoy en vocabulario</p>} />
        <Route
          path="/juegos"
          render={() => <Juegos language={props.language} />}
        />
        <Route
          path="/contact"
          render={() => <Contact language={props.language} />}
        />
        <Route render={() => <p>Error 404</p>} />
      </Switch>
    </div>
  );
};

export default Page;
