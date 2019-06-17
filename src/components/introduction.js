import React from "react";
import "../styles/introduction.css";
import Data from "../text";

class Introduction extends React.Component {
  state = {
    passedText: "",
    text: "",
    activeLetter: -15,
    photoClass: "",
    cursorClass: ""
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
    if (window.scrollY > 1300 && this.state.photoClass === "") {
      this.addLetter();
      this.setState({
        photoClass: "active-profile-photo"
      });

      // border div

      document
        .querySelectorAll("div.border div")
        .forEach(div => div.classList.add("active"));
    } else if (window.scrollY < 1000) {
      this.setState({
        activeLetter: -15,
        photoClass: "",
        passedText: ""
      });
      // border div

      document
        .querySelectorAll("div.border div")
        .forEach(div => div.classList.remove("active"));
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

  render() {
    return (
      <>
        <section className="introduction">
          <div className="border">
            <div className="initial" />
            <div className="top1" />
            <div className="top2" />
            <div className="left" />
            <div className="right" />
          </div>
          <div className={`profile-photo ${this.state.photoClass}`} />
          <div className="description">
            <p>
              {this.state.passedText}
              <span className={`cursor ${this.state.cursorClass}`}>|</span>
            </p>
          </div>
        </section>
        <section className="about-me" />
      </>
    );
  }
}

export default Introduction;
