import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Router>
          <div className="app">
            <header>
              <Header />
            </header>
            {/* <main>
              <aside>
                <Navigation />
              </aside>
              <section className="page">
                <Page />
              </section>
            </main>
            <footer>
              <Footer />
            </footer> */}
          </div>
        </Router>
      </>
    );
  }
}

export default App;
