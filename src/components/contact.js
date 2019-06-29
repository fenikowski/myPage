import React from "react";
import GitHub from "../img/githubLogo.png";
import Phone from "../img/contact2.png";
import Mail from "../img/contact1.png";
import Facebook from "../img/contact3.png";
import LinkedIn from "../img/contact5.png";
import "../styles/contact.css";
import Data from "../text";

class Contact extends React.Component {
  state = {
    userName: "",
    email: "",
    message: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let boxes = document.querySelectorAll("div.address *");
    for (const box of boxes) {
      let boxTop = box.offsetTop;
      if (window.scrollY + window.innerHeight > boxTop) {
        box.classList.add("active");
      }
    }
  };

  handleInput = e => {
    switch (e.target.id) {
      case "userName":
        this.setState({
          userName: e.target.value
        });
        break;
      case "email":
        this.setState({
          email: e.target.value
        });
        break;
      case "message":
        this.setState({
          message: e.target.value
        });
        break;
      default:
        break;
    }
  };

  handleClick = () => {
    // fs.appendFile(
    //   "../message.json",
    //   JSON.stringify({
    //     author: this.state.userName,
    //     email: this.state.email,
    //     message: this.state.message
    //   }),
    //   err => {
    //     if (err) throw err;
    //     console.log("The message has been sent to the server!");
    //   }
    // );

    this.setState({
      userName: "",
      email: "",
      message: ""
    });
  };

  handleAddressClick = node => {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.contact;
    } else if (this.props.language === "en") {
      text = Data.en.contact;
    }

    const copyText = document.querySelector(node);
    copyText.select();
    document.execCommand("copy");

    const tooltip = document.getElementById("myTooltip");
    const tooltip2 = document.getElementById("myTooltip2");
    tooltip.innerHTML = text.copied;
    tooltip2.innerHTML = text.copied;
  };

  handleMouseOut = () => {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.contact;
    } else if (this.props.language === "en") {
      text = Data.en.contact;
    }

    const tooltip = document.getElementById("myTooltip");
    const tooltip2 = document.getElementById("myTooltip2");
    tooltip.innerHTML = text.clipboard;
    tooltip2.innerHTML = text.clipboard;
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.contact;
    } else if (this.props.language === "en") {
      text = Data.en.contact;
    }
    return (
      <section className="contact">
        <div className="form">
          <input
            type="text"
            id="userName"
            placeholder={text.name}
            value={this.state.userName}
            onChange={this.handleInput}
            data-
          />
          <input
            type="text"
            id="email"
            placeholder={text.email}
            value={this.state.email}
            onChange={this.handleInput}
          />
          <textarea
            type="textarea"
            id="message"
            placeholder={text.message}
            value={this.state.message}
            onChange={this.handleInput}
          />
          <button onClick={this.handleClick}>{text.button}</button>
        </div>
        <div className="address">
          <div
            className="address-box tooltip"
            onClick={this.handleAddressClick.bind(
              this,
              "div.address-box:nth-of-type(1) input"
            )}
            onMouseOut={this.handleMouseOut}
          >
            <span class="tooltiptext" id="myTooltip">
              {text.clipboard}
            </span>
            <img src={Mail} alt="" />
            <p>fenikowski@gmail.com</p>
            <input type="text" value="fenikowski@gmail.com" />
          </div>
          <div
            className="address-box tooltip"
            onClick={this.handleAddressClick.bind(
              this,
              "div.address-box:nth-of-type(2) input"
            )}
            onMouseOut={this.handleMouseOut}
          >
            <span class="tooltiptext" id="myTooltip2">
              {text.clipboard}
            </span>
            <img src={Phone} alt="" />
            <p>+48 510 046 987</p>
            <input type="text" value="+48 510 046 987" />
          </div>
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
            href="https://www.linkedin.com/in/fenikowski/"
            className="address-box"
          >
            <img src={LinkedIn} alt="" />
            <p>/in/fenikowski</p>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
