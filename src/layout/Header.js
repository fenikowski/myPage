import React from "react";
import "../styles/header.css";
import bgc1 from "../img/bgc1.png";
import bgc2 from "../img/bgc2.png";
import bgc3 from "../img/bgc3.png";
import bgc4 from "../img/bgc4.png";
import bgc5 from "../img/bgc5.png";
import gif1 from "../img/gif1.gif";
import gif2 from "../img/gif2.gif";
import bgcAbilities from "../img/examplePhoto.jpg";
import { Switch, Route } from "react-router";
import "./funcionality";
import Data from "../text";

class InitialHeader extends React.Component {
  state = {
    bgc1: "0px",
    bgc2: "77px",
    bgc3: "270px",
    bgc4: "269px",
    bgc5: "243px",
    wrapper: "0px",
    name: "170px",
    specialty: "323px"
  };

  componentDidMount = () => {
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "black"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow =
      "0 0 10vh 2vh white";

    this.setState({
      bgc1: "0px",
      bgc2: "77px",
      bgc3: "270px",
      bgc4: "269px",
      bgc5: "243px"
    });

    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    this.setState({
      bgc1: `${0 + window.scrollY / 3}px`,
      bgc2: `${77 + window.scrollY / 4}px`,
      bgc3: `${270 + window.scrollY / 7}px`,
      bgc4: `${269 + window.scrollY / 15}px`,
      wrapper: `${window.scrollY / 1.5}px`,
      name: `${170 + window.scrollY / 1.2}px`,
      specialty: `${323 + window.scrollY / 1.2}px`
    });
  };

  render() {
    return (
      <>
        <div
          className="background-wrapper"
          style={{ marginTop: this.state.wrapper }}
        >
          <img
            className="bgc1"
            style={{ top: this.state.bgc1 }}
            src={bgc1}
            alt=""
          />
          <img
            className="bgc2"
            style={{ top: this.state.bgc2 }}
            src={bgc2}
            alt=""
          />
          <img
            className="bgc3"
            style={{ top: this.state.bgc3 }}
            src={bgc3}
            alt=""
          />
          <img
            className="bgc4"
            style={{ top: this.state.bgc4 }}
            src={bgc4}
            alt=""
          />
          <img
            className="bgc5"
            style={{ top: this.state.bgc5 }}
            src={bgc5}
            alt=""
          />
        </div>
        <h1 className="name" style={{ top: this.state.name }}>
          Igor Fenikowski
        </h1>
        <h2 className="specialty" style={{ top: this.state.specialty }}>
          Full-stack web developer
        </h2>
      </>
    );
  }
}

class HeaderGames extends React.Component {
  state = {
    backgroundImage: gif1
  };

  componentDidMount() {
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "white"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow =
      "none";
  }

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
    let titles = "";
    if (this.props.language === "es") {
      titles = Data.es.headers;
    } else if (this.props.language === "en") {
      titles = Data.en.headers;
    }
    return (
      <>
        <div className="background-games" onClick={this.fire}>
          <img src={this.state.backgroundImage} alt="" />
        </div>
        <h1 className="name juegos" onClick={this.fire}>
          {titles.gamesh1}
        </h1>
        <h2 className="specialty juegos" onClick={this.fire}>
          {titles.gamesh2}
        </h2>
      </>
    );
  }
}

class HeaderHabilidades extends React.Component {
  state = {
    backgroundImage: bgcAbilities
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
        <h1 className="name">Habilidades</h1>
        <h2 className="specialty">Una inscripción ejemplaria</h2>
      </>
    );
  }
}

class HeaderContact extends React.Component {
  state = {
    backgroundImage: bgcAbilities
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
        <div className="background-contact">
          <img src={this.state.backgroundImage} alt="" />
        </div>
        <h1 className="name">Contact</h1>
        <h2 className="specialty">Una inscripción ejemplaria</h2>
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
          path="/juegos"
          render={() => <HeaderGames language={props.language} />}
        />
        <Route path="/habilidades" component={HeaderHabilidades} />
        <Route path="/contact" component={HeaderContact} />
      </Switch>
    </>
  );
};

export default Header;
