import { useState } from "react";
import "./count.css";

function Count({ number }) {
  const [value, setValue] = useState(0);

  const clickIcrement_1 = (event) => {
    setValue(value + 1);
  };
  const clickIcrement_5 = (event) => {
    setValue(value + 5);
  };
  const clickIcrement_100 = (event) => {
    setValue(value + 100);
  };
  const clickDecrement_1 = (event) => {
    setValue(value - 1);
  };
  const clickDecrement_5 = (event) => {
    setValue(value - 5);
  };
  const clickDecrement_100 = (event) => {
    setValue(value - 100);
  };
  return (
    <div>
      <div className="count-div">
        <button onClick={clickIcrement_1}>Increment by 1</button>
        <button onClick={clickIcrement_5}>Increment by 5</button>
        <button onClick={clickIcrement_100}>Increment by 100</button>
        <div className="div">{value}</div>
        <button onClick={clickDecrement_1}>Decrement by 1</button>
        <button onClick={clickDecrement_5}>Decrement by 5</button>{" "}
        <button onClick={clickDecrement_100}>Decrement by 100</button>
      </div>
    </div>
  );
}
export default Count;
