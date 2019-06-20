import React from "react";
import GitHub from "../img/githubLogo.png";
import Phone from "../img/contact2.png";
import Mail from "../img/contact1.png";
import Facebook from "../img/contact3.png";
import LinkedIn from "../img/contact5.png";
import "../styles/contact.css";

class Contact extends React.Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let boxes = document.querySelectorAll("div.address a");
    for (const box of boxes) {
      let boxTop = box.offsetTop;
      if (window.scrollY > boxTop - 650) {
        box.classList.add("active");
      }
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <section className="contact">
        <div className="form">
          <input type="text" id="userName" placeholder="tu nombre" />
          <input type="text" id="e-mail" placeholder="e-mail" />
          <textarea
            type="textarea"
            id="message-content"
            placeholder="contenido del mensaje"
          />
          <button>envía mensaje</button>
        </div>
        <div className="address">
          <a href="sdfsdf" className="address-box">
            <img src={Mail} alt="" />
            <p>fenikowski@gmail.com</p>
          </a>
          <a href="sdfsdf" className="address-box">
            <img src={Phone} alt="" />
            <p>+48 510 046 987</p>
          </a>
          <a href="https://github.com/fenikowski" className="address-box">
            <img src={GitHub} className="github-contact" alt="" />
            <p>/fenikowski</p>
          </a>
          <a
            href="https://www.facebook.com/igor.fenikowski"
            className="address-box"
          >
            <img src={Facebook} alt="" />
            <p>/igor.fenikowski</p>
          </a>
          <a
            href="https://www.linkedin.com/in/igor-fenikowski-940003189/"
            className="address-box"
          >
            <img src={LinkedIn} alt="" />
            <p>/in/igor-fenikowski-940003189</p>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
