import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

const Select = ({ all, main, audio }) => {
  return (
    <div>
      <div >
        {main.word}
      </div>
      <Example all={all} />
      <div >
        meaning & definitions :
      </div>
      <Definition all={all} />
      <div >
        examples :
      </div>
      <div>
        synonyms :
      </div>
      <Synonyms all={all} />
      <div>
        antonyms :
      </div>
      <Antonyms all={all} />
    </div>
  );
};

export default Select;
