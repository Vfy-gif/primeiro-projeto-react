import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
    };
  }

  render() {
    return <h1>test</h1>;
  }
}

export default Text;
