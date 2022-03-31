import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";

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

      <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
        synonyms :
      </div>
      <Synonyms all={all} />

    </div>
  );
};

export default Select;
