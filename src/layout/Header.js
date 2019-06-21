import React from "react";
import "../styles/header.css";
import InitialHeader from "../components/InitialHeader";
import HeaderGames from "../components/HeaderGames";
import HeaderContact from "../components/HeaderContact";
import { Switch, Route } from "react-router";
import bgcContact from "../img/examplePhoto.jpg";
import Data from "../text";

class HeaderProjects extends React.Component {
  state = {
    backgroundImage: bgcContact
  };

  componentDidMount() {
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "black"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow =
      "0 0 10vh 2vh white";
  }

  render() {
    return (
      <>
        <div className="background-abilities">
          <img src={this.state.backgroundImage} alt="" />
        </div>
        <h1 className="name">Proyectos</h1>
        <h2 className="specialty">Sección en desarrollo</h2>
      </>
    );
  }
}

const Header = props => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={InitialHeader} />
        <Route
          path="/games"
          render={() => <HeaderGames language={props.language} />}
        />
        <Route path="/projects" component={HeaderProjects} />
        <Route
          path="/contact"
          render={() => <HeaderContact language={props.language} />}
        />
      </Switch>
    </>
  );
};

export default Header;
