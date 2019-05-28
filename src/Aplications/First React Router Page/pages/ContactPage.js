import React from "react";
import "../styles/page.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSumbit = e => {
    e.preventDefault();

    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSumbit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="wpisz wiadomosc"
          />
          <button>Wyslij</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Nie przeslalaes forularza. Czy na pewno chcesz opuscic strone?"
        />
      </div>
    );
  }
}

export default ContactPage;
