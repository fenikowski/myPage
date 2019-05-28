import React from "react";
import { Switch, Route } from "react-router-dom";
import Introduction from "../components/introduction.js";
import Juegos from "../components/juegos.js";

const Page = props => {
  return (
    <div className="page">
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/projectos" render={() => <p>estoy en vocabulario</p>} />
        <Route path="/juegos" component={Juegos} />
        <Route path="/contact" render={() => <p>estoy en peliculas</p>} />
        <Route render={() => <p>Error 404</p>} />
      </Switch>
    </div>
  );
};

export default Page;
