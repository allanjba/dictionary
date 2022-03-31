import React from "react";
import Definition from "./Definition";
import Example from "./Example";

const Select = ({ all, main, audio }) => {
  return (
    <div>
      <div>
        {main.word}
      </div>
      <div className="">
        meaning & definitions :
      </div>
      <Definition all={all} />
      <div className="">
        examples :
      </div>

      <Example all={all} />

    </div>
  );
};

export default Select;
