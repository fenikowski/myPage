import React from "react";
import "./App.css";

const User = props => {
  const users = props.users.map(user => (
    <div class="user" key={user.login.uuid}>
      <img src={user.picture.large} alt="" />
      <h2>{user.name.first}</h2>
      <h3>{user.location.city}</h3>
      <h3>{user.nat}</h3>
    </div>
  ));
  return users;
};

const Button = props => {
  return <button onClick={props.click}>Añadir</button>;
};

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {}

  handleAdding = () => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(response => {
        const users = this.state.users.concat(response.results);
        console.log(this.state.users);
        this.setState({
          users
        });
      });
  };

  render() {
    const users = this.state.users;
    return (
      <>
        <Button click={this.handleAdding} />
        {users.length !== 0 ? <User users={users} /> : null}
      </>
    );
  }
}

export default App;
