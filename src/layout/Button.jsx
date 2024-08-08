import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-aquamarine px-4 py-2 rounded-md text-brightgray hover:bg-white hover:text-black hover:scale-105 ">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
