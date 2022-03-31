import React from "react";
import Definition from "./Definition";


const Select = ({ all, main, audio }) => {
  return (
    <div>
      <div className="">
        {main.word}
      </div>
      <div className="">
        meaning & definitions :
      </div>
      <Definition all={all} />
    </div>
  );
};

export default Select;
