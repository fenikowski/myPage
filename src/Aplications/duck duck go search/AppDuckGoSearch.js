import React from "react";
import "./App.css";

const User = props => {
  const contents = props.contents.map((foto, index) => (
    <div className="user" key={index}>
      <img src={foto} alt="" />
    </div>
  ));
  return contents;
};

const Button = props => {
  return (
    <div>
      <button onClick={props.click}>Añadir</button>
    </div>
  );
};

class App extends React.Component {
  state = {
    contents: [],
    value: "",
    spanish: "",
    english: ""
  };

  componentDidMount() {}

  handleAdding = () => {
    const searchQ = this.state.value;
    this.setState({
      value: ""
    });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://duckduckgo.com/?q=${searchQ}&ia=about&format=json`; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(contents => {
        console.log(contents.Image);
        const responder = this.state.contents.concat(contents.Image);
        this.setState({
          contents: responder
        });
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  };

  handleWriting = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleWritingEnglish = e => {
    this.setState({
      english: e.target.value
    });
  };
  handleWritingSpanish = e => {
    this.setState({
      spanish: e.target.value
    });
  };

  render() {
    const contents = this.state.contents;
    return (
      <>
        <Button click={this.handleAdding} />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleWriting}
        />
        <input
          type="text"
          value={this.state.english}
          onChange={this.handleWritingEnglish}
          placeholder="english"
        />
        <input
          type="text"
          value={this.state.spanish}
          onChange={this.handleWritingSpanish}
          placeholder="spanish"
        />
        {contents.length !== 0 ? (
          <User
            contents={contents}
            english={this.state.english}
            spanish={this.state.spanish}
          />
        ) : null}
      </>
    );
  }
}

export default App;
