import ReactDOM from "react-dom";
import React from "react";

function FirstComponent(props) {
  const [s, setS] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setS(s + 1);
    }, 500);
  }, [1]);

  return (
    <>
      <h1 className="red">
        <i>Hello</i>
        {props.name}I am {props.age}
      </h1>
      <h1>HEllo {s}</h1>
    </>
  );
}

class SecondComponent extends React.Component {
  state = {
    count: 0
  };

  increment = e => {
    e.persist(); // for the async
    setTimeout(() => {
      console.log(e.target);
    }, 1000);
    this.setState(state => ({ count: state.count + 1 })); // function for handling the async rendering situation
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <h1 className="red">
          <i>Hello</i>
          {this.props.name}I am {this.props.age}
        </h1>
        <h1>HEllo {this.state.count}</h1>

        <button onClick={this.increment}>Inc</button>
      </>
    );
  }
}

ReactDOM.render(
  // FirstComponent({ name: "Wisam", age: 20 }),
  // <FirstComponent name="Wisam" age={20} />,
  <SecondComponent name="Wisam" age={20} />,
  document.getElementById("root")
);

const initState = 0;
const createStore = (reducer, state = initState) => {
  const getState = () => state;

  const listeners = [];
  const subscribe = f => {
    listeners.push(f);
  };
};
