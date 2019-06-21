import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
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
          <LoadingScreen />
          <button className="language US" onClick={this.handleClickEnglish} />
          <button className="language ES" onClick={this.handleClickSpanish} />
          <Navigation language={this.state.language} />
          <Header language={this.state.language} />
          <Page language={this.state.language} />
          <Footer language={this.state.language} />
        </Router>
      </>
    );
  }
}

export default App;
