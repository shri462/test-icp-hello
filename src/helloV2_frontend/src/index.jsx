import React,{useState} from "react";
import { render } from "react-dom";
import { helloV2_backend } from "../../declarations/helloV2_backend";
import TableComp from "./components/TableComp";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await helloV2_backend.greet(name);
    setMessage(greeting);
  }

  return (
    <div style={{ "fontSize": "30px" }}>
      <div>
        <p>Greetings, from Techdome!</p>
      </div>
      <div style={{ margin: "30px" }}>
        <TableComp />
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));