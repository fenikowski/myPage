import React from "react";
import "../styles/LoadingPage.css";

class LoadingScreen extends React.Component {
  componentDidMount() {
    if (sessionStorage.getItem("pageLoaded") === "true") {
      document.querySelector("div.wrap").remove();
    } else {
      window.addEventListener("scroll", window.scrollTo(0, 0));
      document.body.classList.add("stop-scrolling");

      // inicialization
      const wrapper = document.querySelector("div.wrap");

      // array for squares
      let squaresArray = [];

      for (let i = 0; i < 1500; i++) {
        const square = document.createElement("div");
        document
          .querySelector("div.loadingScreen div.squares")
          .appendChild(square);
        square.classList.add("square");
        square.style.width = window.innerWidth / 50 + "px";
        square.style.height = window.innerWidth / 50 + "px";

        square.style.background = `conic-gradient(from 40deg, #08091e, #000, #08091e)`;

        square.setAttribute("indexNumber", i);
        squaresArray.push(square);
        if (square.offsetTop > window.innerHeight) break;
      }

      let newArray = [];

      // AFTER LOADED
      function whenPageLoaded() {
        sessionStorage.setItem("pageLoaded", true);

        document
          .querySelector("div.loadingScreen")
          .removeChild(document.querySelector("div.loadingAnimation"));
        document.querySelector("div.loading").textContent =
          "CLICK ON THE SCREEN";
        document.querySelector("div.loading").style.animation =
          "miganie 1s infinite";

        squaresArray.forEach(function(square, index) {
          // ON HOVER EVENT LISTENER FOR SQUARES

          //   square.addEventListener("mouseover", function() {
          //     square.style.opacity = "1";
          //     square.style.backgroundColor = "lime";
          //   });
          //   square.addEventListener("mouseout", function() {
          //     square.style.opacity = "0.4";
          //     square.style.backgroundColor = "none";
          //   });

          // ON CLICK EVENT LISTENER FOR SQUARES

          square.addEventListener("click", function() {
            square.classList.add("disappear");
            document.querySelector("div.loading").style.animation = "";
            document.querySelector("div.loading").style.opacity = "0";

            //background disappearnce
            document.querySelector("div.gradient").style.left = `-100%`;
            setTimeout(function() {
              document.querySelector("div.gradient").style.opacity = "0";
            }, 2000);
            setTimeout(function() {
              document.body.classList.remove("stop-scrolling");
            }, 3500);
            setTimeout(function() {
              document.querySelector("div.wrap").remove();
            }, 5000);

            wave(index);

            for (let i = 1; i < 50; i++) {
              setTimeout(disappear, i * 100);
            }
          });
        });

        // DISAPPEARANCE FUNCTIONs FOR SQUARES

        function disappear() {
          squaresArray.forEach(function(square) {
            if (square.className === "square disappear") {
              newArray.push(square);
            }
          });

          newArray.forEach(function(item) {
            wave(parseInt(item.getAttribute("indexNumber")));
          });

          newArray = [];
        }

        function wave(index) {
          if (
            index - 51 <= squaresArray.length &&
            index % 50 !== 0 &&
            index - 51 >= 0
          ) {
            squaresArray[index - 51].classList.add("disappear");
          }
          if (index - 50 <= squaresArray.length && index - 50 >= 0) {
            squaresArray[index - 50].classList.add("disappear");
          }
          if (
            index - 49 <= squaresArray.length &&
            (index + 1) % 50 !== 0 &&
            index - 49 >= 0
          ) {
            squaresArray[index - 49].classList.add("disappear");
          }
          if (index + 1 < squaresArray.length && (index + 1) % 50 !== 0) {
            squaresArray[index + 1].classList.add("disappear");
          }
          if (index + 51 < squaresArray.length && (index + 1) % 50 !== 0) {
            squaresArray[index + 51].classList.add("disappear");
          }
          if (index + 50 < squaresArray.length) {
            squaresArray[index + 50].classList.add("disappear");
          }
          if (index + 49 < squaresArray.length && index % 50 !== 0) {
            squaresArray[index + 49].classList.add("disappear");
          }
          if (
            index - 1 <= squaresArray.length &&
            index % 50 !== 0 &&
            index - 1 >= 0
          ) {
            squaresArray[index - 1].classList.add("disappear");
          }
        }
      }

      const readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          whenPageLoaded();
        }
      }, 100);
    }
  }

  render() {
    return (
      <div className="wrap">
        <div className="loadingScreen">
          <div className="gradient" />
          <div className="squares" />
          <div className="loading">Loading</div>
          <div className="loadingAnimation" />
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
