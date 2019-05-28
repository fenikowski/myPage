import React from "react";
import "../styles/introduction.css";

class Introduction extends React.Component {
  state = {
    passedText: "",
    text: `¡Hola, bienvenidos a mi página! Soy Igor Fenikowski, un estudiante
  recién graduado de la Universidad de Varsovia. Me dedico a creación de
  aplicaciones de web usando las tecnologías nuevas y frameworks
  populares. En está página encontrarás informaciones sobre mi, mis
  habilidades y juegos, así mismo podrás contactarte conmigo y revisar
  mi código. Me alegra que decidste echar una vista aquí. `,
    activeLetter: -15,
    photoClass: "",
    cursorClass: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.cursorAnimation();
  }

  addLetter = () => {
    // Użyj w środku setTimeout
    if (this.state.activeLetter < this.state.text.length) {
      if (this.state.activeLetter >= 0) {
        this.setState(prevState => ({
          passedText:
            prevState.passedText + prevState.text[prevState.activeLetter]
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
    } else if (window.scrollY < 1000) {
      this.setState({
        activeLetter: -15,
        photoClass: "",
        passedText: ""
      });
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
