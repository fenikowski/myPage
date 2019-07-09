import React from "react";
import "../styles/skills.css";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import GimpLogo from "../img/GimpLogo.png";
import ReactLogo from "../img/ReactLogo.png";
import GitLogo from "../img/GitLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import MongoLogo from "../img/MongoLogo.png";
import JavaScriptScreen from "../img/JavaScriptScreen.PNG";
import GimpGif from "../img/yummy.gif";
import GitScreen from "../img/GitScreen.PNG";
import ReactScreen from "../img/ReactScreen.jpeg";
import Data from "../text";

class Skills extends React.Component {
  state = {};

  componentDidMount() {
    this.scrollChecking(window.sessionStorage.getItem("scrollTo"));
  }

  scrollChecking = scrollTo => {
    if (scrollTo === null) return;

    setTimeout(() => {
      window.scrollTo({
        top: document.querySelector(`div.skill.${scrollTo}`).offsetTop,
        behavior: "smooth"
      });
      window.sessionStorage.removeItem("scrollTo");
    }, 1000);
  };

  render() {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.skills;
    } else if (this.props.language === "en") {
      text = Data.en.skills;
    }

    return (
      <section className="skills">
        <div className="skill javascript">
          <div className="skill-header">
            <img src={JavaScriptLogo} alt="logo javascript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-content">
            <img src={JavaScriptScreen} alt="javascript screenshot" />
            <div className="skill-description">
              <p>{text[0].description}</p>
            </div>
          </div>
        </div>
        <div className="skill gimp">
          <div className="skill-header">
            <img src={GimpLogo} alt="logo gimp" />
            <p>GIMP</p>
          </div>
          <div className="skill-content">
            <img src={GimpGif} alt="javascript screenshot" />
            <div className="skill-description">
              <p>{text[1].description}</p>
            </div>
          </div>
        </div>
        <div className="skill react">
          <div className="skill-header">
            <img src={ReactLogo} alt="logo react" />
            <p>React</p>
          </div>
          <div className="skill-content">
            <img src={ReactScreen} alt="react screenshot" />
            <div className="skill-description">
              <p>
                {text[2].description}{" "}
                <a href="https://github.com/fenikowski/myPage">
                  {text[2].linkName}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="skill node">
          <div className="skill-header">
            <img src={NodeLogo} alt="logo node" />
            <p>Node Js</p>
          </div>
          <div className="skill-content">lorem</div>
        </div>
        <div className="skill mongodb">
          <div className="skill-header">
            <img src={MongoLogo} alt="mongodb node" />
            <p>mongodb</p>
          </div>
          <div className="skill-content">contenido</div>
        </div>
        <div className="skill git">
          <div className="skill-header">
            <img src={GitLogo} alt="logo git" />
            <p>Git</p>
          </div>
          <div className="skill-content">
            <img src={GitScreen} alt="git screenshot" />
            <div className="skill-description">
              <p>
                {text[3].description}{" "}
                <a href="https://github.com/fenikowski">{text[3].linkName}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;