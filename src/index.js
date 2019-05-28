import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layout/App";
import * as serviceWorker from "./serviceWorker";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let flag = false;
if (document.querySelector("div.background-wrapper") !== undefined) {
  const bgc1 = document.querySelector("img.bgc1");
  const bgc2 = document.querySelector("img.bgc2");
  const bgc3 = document.querySelector("img.bgc3");
  const bgc4 = document.querySelector("img.bgc4");
  const bgc5 = document.querySelector("img.bgc5");
  const wrap = document.querySelector("div.background-wrapper");
  const name = document.querySelector("h1.name");
  const specialty = document.querySelector("h2.specialty");

  bgc2.style.top = "77px";
  bgc3.style.top = "270px";
  bgc4.style.top = "269px";
  bgc5.style.top = "243px";

  window.addEventListener("scroll", function() {
    wrap.style.marginTop = `${window.scrollY / 1.5}px`;
    bgc1.style.top = `${0 + window.scrollY / 3}px`;
    bgc2.style.top = `${77 + window.scrollY / 4}px`;
    bgc3.style.top = `${270 + window.scrollY / 7}px`;
    bgc4.style.top = `${269 + window.scrollY / 15}px`;

    if (window.scrollY < 2500 && flag === false) {
      // flag = true;
      name.style.top = `${170 + window.scrollY / 1.2}px`;
      specialty.style.top = `${323 + window.scrollY / 1.2}px`;
    } else {
      // name.style.top = "1500px";
      // specialty.style.top = "1600px";
      // name.style.animation = "";
      // specialty.style.animation = "";
    }

    let position = window.scrollY / 3772;
    // here needed maximum value for scrollY
    holder.style.top = `${position * 100 > 93 ? 93 : position * 100}%`;
  });
}

const holder = document.querySelector("div.holder");
const scroller = document.querySelector("div.scroll");
scroller.style.height = `${window.innerHeight}px`;
