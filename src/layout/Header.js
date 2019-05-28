import React from "react";
import "../styles/header.css";
import bgc1 from "../img/bgc1.png";
import bgc2 from "../img/bgc2.png";
import bgc3 from "../img/bgc3.png";
import bgc4 from "../img/bgc4.png";
import bgc5 from "../img/bgc5.png";
import gif1 from "../img/gif1.gif";
import gif2 from "../img/gif2.gif";
import { Switch, Route } from "react-router";
import "./funcionality";

class InitialHeader extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div className="background-wrapper">
          <img className="bgc1" src={bgc1} alt="" />
          <img className="bgc2" src={bgc2} alt="" />
          <img className="bgc3" src={bgc3} alt="" />
          <img className="bgc4" src={bgc4} alt="" />
          <img className="bgc5" src={bgc5} alt="" />
        </div>
        <h1 className="name">Igor Fenikowski</h1>
        <h2 className="specialty">Full-stack web developer</h2>
      </>
    );
  }
}

class HeaderGames extends React.Component {
  state = {
    backgroundImage: gif1
  };

  fire = e => {
    if (this.state.backgroundImage === gif1) {
      this.setState({
        backgroundImage: gif2
      });
    } else {
      this.setState({
        backgroundImage: gif1
      });
    }
  };

  render() {
    return (
      <>
        <div className="background-games" onClick={this.fire}>
          <img src={this.state.backgroundImage} alt="" />
        </div>
        <h1 className="name juegos">Juegos</h1>
        <h2 className="specialty juegos">
          ¡Haz click para despertar el fuego!
        </h2>
      </>
    );
  }
}

const Header = props => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={InitialHeader} />
        <Route path="/juegos" component={HeaderGames} />
      </Switch>
    </>
  );
};

export default Header;
