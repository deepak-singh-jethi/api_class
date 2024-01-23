import axios from "axios";
import React, { useState } from "react";

const Sumjs = () => {
  const [nums, setNums] = useState({ num1: 0, num2: 0 });
  const [result, setResult] = useState(0);

  /*   function getSum() {
    fetch("http://localhost:9000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1: 100,
        num2: 200,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data.result))
      .catch((err) => console.log(err));
  } */

  function getSum(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/add", { ...nums })
      .then((response) => setResult(response.data.result))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form
        onSubmit={getSum}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>
        <input
          type="number"
          placeholder="num1"
          onChange={(e) => {
            setNums({ ...nums, num1: +e.target.value });
          }}
          value={nums.num1}
        />
        <input
          type="number"
          placeholder="num2"
          onChange={(e) => {
            setNums({ ...nums, num2: +e.target.value });
          }}
          value={nums.num2}
        />
        <button onClick={getSum} style={{ width: "150px", padding: "10px" }}>
          Get Sum
        </button>
      </form>

      <h1>{result}</h1>
    </div>
  );
};

export default Sumjs;
