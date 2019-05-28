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
  state = {};
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Header />
          <Page />
        </Router>
      </>
    );
  }
}

export default App;
