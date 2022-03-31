import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

const Select = ({ all, main, audio }) => {
  return (
    <div className="text-left">
      <h1 className="text-6xl mb-4 capitalize">{main.word}</h1>
      <h2 className="text-2xl mb-2">Meaning & definitions :</h2>
      <ul className="list-disc">
        <Definition all={all} />
      </ul>
      <h2 className="text-2xl mb-2">Exemples :</h2>
      <ol className="list-decimal mb-4">
        <Example all={all} />
      </ol>
      <div>Synonyms :</div>
      <Synonyms all={all} />
      <div>Antonyms :</div>
      <Antonyms all={all} />
    </div>
  );
};

export default Select;
