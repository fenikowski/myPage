import React from "react";
import "../styles/introduction.css";
import Data from "../text";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import HTMLLogo from "../img/HTMLLogo.png";
import CSSLogo from "../img/CSSLogo.png";
import ReactLogo from "../img/ReactLogo.png";
import NativeLogo from "../img/NativeLogo.jpg";
import GitLogo from "../img/GitLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import MongoLogo from "../img/MongoLogo.png";

class Introduction extends React.Component {
  state = {
    passedText: "",
    text: "",
    activeLetter: -15,
    photoClass: "",
    cursorClass: "",
    cubesLaunched: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.cursorAnimation();
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  addLetter = () => {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.introduction.text;
    } else if (this.props.language === "en") {
      text = Data.en.introduction.text;
    }

    if (this.state.activeLetter < text.length) {
      if (this.state.activeLetter >= 0) {
        this.setState(prevState => ({
          passedText: prevState.passedText + text[prevState.activeLetter]
        }));
      }
      this.setState(prevState => ({
        activeLetter: prevState.activeLetter + 1
      }));

      setTimeout(this.addLetter, 15);
    }
  };

  handleScroll = () => {
    if (window.scrollY > 500 && this.state.photoClass === "") {
      this.addLetter();
      this.setState({
        photoClass: "active-profile-photo"
      });

      // border div

      document
        .querySelectorAll("div.border div")
        .forEach(div => div.classList.add("active"));
    } else if (window.scrollY < 100) {
      this.setState({
        activeLetter: -15,
        photoClass: "",
        passedText: ""
      });
      // border div

      // document
      //   .querySelectorAll("div.border div")
      //   .forEach(div => div.classList.remove("active"));
    }
    if (window.scrollY > 1600) {
      this.cubeRotation();
    }
  };

  cursorAnimation = () => {
    if (this.state.cursorClass === "") {
      this.setState({
        cursorClass: "active"
      });
    } else {
      this.setState({
        cursorClass: ""
      });
    }
    setTimeout(this.cursorAnimation.bind(this), 400);
  };

  cubeRotation = () => {
    if (this.state.cubesLaunched === false) {
      document.querySelectorAll("div.cube").forEach(cube => {
        let counter = 0;
        let prevNumber = 0;

        function switching() {
          counter++;

          let number = Math.floor(Math.random() * 6);
          while (prevNumber === number) {
            number = Math.floor(Math.random() * 6);
          }

          prevNumber = number;

          if (counter === 5) return (cube.className = "cube show-front");

          switch (number) {
            case 0:
              cube.className = "cube show-front";
              break;
            case 1:
              cube.className = "cube show-top";
              break;
            case 2:
              cube.className = "cube show-bottom";
              break;
            case 3:
              cube.className = "cube show-left";
              break;
            case 4:
              cube.className = "cube show-right";
              break;
            case 5:
              cube.className = "cube show-back";
              break;
            default:
              cube.className = "cube show-front";
              break;
          }

          if (number !== 0) {
            setTimeout(switching, 500);
          }
        }

        switching();
      });
    }

    this.setState({
      cubesLaunched: true
    });
  };

  render() {
    const cube = logo => (
      <div className="scene">
        <div className="cube show-back">
          <div className="cube__face cube__face--front">
            <img src={logo} alt="javascript logo" />
          </div>
          <div className="cube__face cube__face--back" />
          <div className="cube__face cube__face--right" />
          <div className="cube__face cube__face--left" />
          <div className="cube__face cube__face--top" />
          <div className="cube__face cube__face--bottom" />
        </div>
      </div>
    );

    const border = (
      <div className="border">
        <div className="initial" />
        <div className="top1" />
        <div className="top2" />
        <div className="left" />
        <div className="right" />
      </div>
    );

    return (
      <>
        <section className="introduction">
          {border}
          <div className={`profile-photo ${this.state.photoClass}`} />
          <div className="description">
            <p>
              {this.state.passedText}
              <span className={`cursor ${this.state.cursorClass}`}>|</span>
            </p>
          </div>
        </section>
        <section className="about-me">
          <div className="cubesHolder">
            {cube(HTMLLogo)}
            {cube(CSSLogo)}
            {cube(JavaScriptLogo)}
            {cube(ReactLogo)}
            {cube(NativeLogo)}
            {cube(NodeLogo)}
            {cube(MongoLogo)}
            {cube(GitLogo)}
          </div>
        </section>
      </>
    );
  }
}

export default Introduction;
