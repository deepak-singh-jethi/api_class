import React, { useState, useEffect } from "react";
import axios from "axios";

const Hello = () => {
  const [message, setMessage] = useState("");

  //   function getMessage() {

  //     // ===========Ftech ==============
  //     fetch("http://localhost:9000/hello")
  //       .then((res) => res.json())
  //       .then((data) => setMessage(data.message))
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //   }

  function getMessage() {
    axios
      .get("http://localhost:9000/hello")
      .then((response) => setMessage(response.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMessage();
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Hello;
