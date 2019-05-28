import React from "react";
import "../styles/juegos.css";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import GitHubLogo from "../img/githubLogo.png";
import ChromeLogo from "../img/chromeLogo.png";
import Browsers from "../img/browsers.png";

const Juegos = props => {
  return (
    <>
      <div className="gamePage">
        <section className="juegos">
          {/* <h2>Super Potato Bros</h2> */}
          <div className="description">
            <h3>
              Es un juego, es un clásico, todo el mundo conoce las historias de
              Mario, ¿pero si conoce de la misma manera las batallas por
              galletas, de una patata valiente?
            </h3>
            <p>
              Creo que no hay mejor manera de aprender que praticar y por tanto
              no puede exisitir una manera mejor de aprender programación que
              escribir juegos. Así surgió el tercer juego del universo de la
              Patata, que la mete a ella en el mundo de dos dimensiones, donde
              tiene que luchar para llenar su estómago de galletas deliciosas.
              ¿Le ayudas?{" "}
            </p>
          </div>
          <div className="gameImage" />
          <div className="gameInfo">
            <div>
              <img src={JavaScriptLogo} alt="javascript logo" />
              <p>
                El juego está escrito en puro JavaScript (ES6), además se basa
                por primera vez en programación de objetos.
              </p>
            </div>
            <div>
              <img src={ChromeLogo} alt="" />
              <p>Versión actual funciona unicamente en Chrome para desktops.</p>
            </div>
            <div>
              <p>
                El juego está escrito por mi (Igor Fenikowski), sin embargo
                contiene imagenes y sonidos de licencia 'open source'. El uso no
                es comercial, pero se admite gratuito para cada uso personal.
              </p>
            </div>
            <div>
              <img src={GitHubLogo} alt="github logo" />
              <p>
                El codigo disponible en <a href="github.com">GitHub</a>
              </p>
            </div>
          </div>
        </section>
        <section className="juegos">
          {/* <h2>Snake</h2> */}
          <div className="description">
            <h3>
              Siguiente clásico, un recurdo de infancia y la famosa Nokia 6310i.
            </h3>
            <p>
              Es el segundo juego del mundo de la Patata, para devorar aun más
              galletas, ¡la Patata se transforma en una serpente! Fue un paso
              atrás en mi desarrollo y las primeras horas de frustración y
              impotencia, que despúes se volvieron en horas de afán y al acabar,
              la satisfacción infinita.
            </p>
          </div>
          <div className="gameImage" />
          <div className="gameInfo">
            <div>
              <img src={JavaScriptLogo} alt="javascript logo" />
              <p>El juego está escrito en puro JavaScript (ES6)</p>
            </div>
            <div>
              <img src={Browsers} alt="" />
              <p>
                Versión actual funciona en todos navegadores populares y
                moviles.
              </p>
            </div>
            <div>
              <p>
                El juego está escrito por mi (Igor Fenikowski), sin embargo
                contiene imagenes y sonidos de licencia 'open source'. El uso no
                es comercial, pero se admite gratuito para cada uso personal.
              </p>
            </div>
            <div>
              <img src={GitHubLogo} alt="github logo" />
              <p>
                El codigo disponible en <a href="github.com">GitHub</a>
              </p>
            </div>
          </div>
        </section>
        <section className="juegos">
          {/* <h2>Super Potato Bros</h2> */}
          <div className="description">
            <h3>Mi primera obra del arte de programación.</h3>
            <p>
              Aunque no parace nada que cabería destacar, a mi me conmueve y
              evoca emociones positivas, que me acompañaron tras escribirlo y
              haber ententido, que la programación es el rumbo correcto para mi.
              Así mismo el principio de las adventuras de la Patata y evidencia
              de mi desarrollo como programador.
            </p>
          </div>
          <div className="gameImage" />
          <div className="gameInfo">
            <div>
              <img src={JavaScriptLogo} alt="javascript logo" />
              <p>El juego está escrito en puro JavaScript (ES6)</p>
            </div>
            <div>
              <img src={Browsers} alt="" />
              <p>
                Versión actual funciona en todos navegadores populares sin
                moviles.
              </p>
            </div>
            <div>
              <p>
                El juego está escrito por mi (Igor Fenikowski), sin embargo
                contiene imagenes y sonidos de licencia 'open source'. El uso no
                es comercial, pero se admite gratuito para cada uso personal.
              </p>
            </div>
            <div>
              <img src={GitHubLogo} alt="github logo" />
              <p>
                El codigo disponible en <a href="github.com">GitHub</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Juegos;
