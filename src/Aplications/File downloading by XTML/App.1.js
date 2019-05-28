import React from "react";
import "./App.css";

const User = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <h3>{props.website}</h3>
    </div>
  );
};

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      const users = JSON.parse(xhr.response);
      this.setState({
        users
      });
    };
    xhr.send();
  }

  render() {
    // const {id,}

    const users = this.state.users.map(user => (
      <User
        key={user.id}
        name={user.name}
        email={user.email}
        website={user.website}
      />
    ));

    return <>{users}</>;
  }
}

export default App;
