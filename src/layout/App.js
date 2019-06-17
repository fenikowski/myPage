import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./Aside";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Page from "./Page";
import Header from "./Header";
import "../styles/App.css";
// import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// import "simplebar/dist/simplebar.css";

class App extends React.Component {
  state = {
    language: "es"
  };

  handleClickEnglish = () => {
    this.setState({
      language: "en"
    });
  };
  handleClickSpanish = () => {
    this.setState({
      language: "es"
    });
  };

  render() {
    return (
      <>
        <Router>
          <button className="language" onClick={this.handleClickEnglish}>
            english
          </button>
          <button className="language" onClick={this.handleClickSpanish}>
            spanish
          </button>
          <Navigation language={this.state.language} />
          <Header language={this.state.language} />
          <Page language={this.state.language} />
        </Router>
      </>
    );
  }
}

export default App;
