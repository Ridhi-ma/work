import React from "react";
import "./App.css";
import Part from "./Part";
// import Table from "./Table";
const App = () => {
  return (
    <div>
      <input className="a" type="text" placeholder="Client Search.."></input>
      <select name="drop" id="drop">
        <option value="volvo">Portfolio Valuation</option>
        <option value="saab">c</option>
        <option value="opel">O</option>
      </select>
      <button className="b">Go To Report</button>
      {/* <Part head={"No.of Investors"} num={"28,789"} />
      <Part head={"jikroe"} num={"8490103"} />
      <Part head={"jikroe"} num={"8490103"} />
      <Part head={"jikroe"} num={"8490103"} /> */}
      <Part />
    </div>
  );
};
export default App;
