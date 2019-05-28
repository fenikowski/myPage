import React from "react";

class Scroll extends React.Component {
  state = {
    scroll: `${window.innerHeight}px`,
    holder: "0"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // // here needed maximum value for scrollY

    let position = window.scrollY / 3772;
    this.setState({
      scroll: `${window.innerHeight}px`,
      holder: `${position * 100 > 93 ? 93 : position * 100}%`
    });
  };

  render() {
    return (
      <div className="scroll" style={{ height: this.state.scroll }}>
        <div className="holder" style={{ top: this.state.holder }} />
      </div>
    );
  }
}

export default Scroll;
