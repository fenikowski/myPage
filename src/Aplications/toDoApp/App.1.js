import React from "react";
import "./App.css";

const Header = props => {
  return (
    <div id="header">
      <h1>ToDoApp</h1>
      <form>
        <input
          placeholder="tarea"
          onChange={props.change}
          value={props.value}
          type="text"
        />
        <label>
          importante
          <input
            onChange={props.change}
            type="checkbox"
            checked={props.checkbox}
          />
        </label>
        <label>
          Fecha de cumplimiento{" "}
          <input
            onChange={props.change}
            type="date"
            name="date"
            id="date"
            defaultValue="2020-02-09"
          />{" "}
        </label>
        <button onClick={props.click}>Agregar</button>
      </form>
    </div>
  );
};

const Tasks = props => {
  const todo = props.tasks.map((task, index) => (
    <div className="task" key={task.task}>
      <strong style={task.important ? { color: "red" } : {}}>
        {task.task}
      </strong>
      <p>hasta {task.date}</p>
      <button index={index} onClick={props.click2}>
        Cumplido
      </button>
      <button index={index} onClick={props.click}>
        X
      </button>
    </div>
  ));
  return (
    <div id="tasks">
      <h2>Tareas para cumplir</h2>
      {todo}
    </div>
  );
};

const Completed = props => {
  const date = new Date();
  const todo = props.tasks.map(task => (
    <div className="task-completed" key={task.task}>
      <strong style={task.important ? { color: "red" } : {}}>
        {task.task}
      </strong>
      <p>
        cumplido {date.getDay()}-{date.getMonth()}-{date.getFullYear()}
      </p>
    </div>
  ));

  return (
    <div id="completed">
      <h2>Tareas ya cumplidas</h2>
      {todo}
    </div>
  );
};

class App extends React.Component {
  state = {
    value: "",
    checkbox: false,
    date: "2020-02-09",
    pending_tasks: [],
    completed_tasks: []
  };

  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({ checkbox: e.target.value });
    } else if (e.target.type === "text") {
      this.setState({ value: e.target.value });
    } else if (e.target.type === "date") {
      this.setState({ date: e.target.value });
    }
  };

  handleClick = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.value,
      important: this.state.checkbox,
      date: this.state.date
    };

    this.setState(prevState => ({
      value: "",
      checkbox: false,
      pending_tasks: prevState.pending_tasks.concat(newTask)
    }));
  };

  handleDelete = e => {
    const index = e.target.getAttribute("index");
    const pending_tasks = this.state.pending_tasks;
    pending_tasks.splice(index, 1);

    this.setState({
      pending_tasks
    });
  };

  handleDone = e => {
    const index = e.target.getAttribute("index");
    const pending_tasks = this.state.pending_tasks;
    const doneTask = pending_tasks.splice(index, 1);
    const completed_tasks = this.state.completed_tasks.concat(doneTask);

    this.setState({
      pending_tasks,
      completed_tasks
    });
  };

  render() {
    return (
      <>
        <Header
          change={this.handleChange}
          click={this.handleClick}
          value={this.state.value}
          checkbox={this.state.checkbox}
        />
        <Tasks
          click={this.handleDelete}
          click2={this.handleDone}
          tasks={this.state.pending_tasks}
        />
        <Completed tasks={this.state.completed_tasks} />
        <p id="marca">
          Número de tareas cumplidas: {this.state.completed_tasks.length}
        </p>
      </>
    );
  }
}

export default App;
