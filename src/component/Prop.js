import React from "react";

const Prop = (props) => {
  return (
    <div>
      <h1>I am a software developer</h1>
      {props.children}
    </div>
  );
};

export default Prop;
