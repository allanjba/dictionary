import React from "react";

const Synonyms = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return Def.synonyms.map((Syn) => {
              return (
                <>
                  {Syn},{" "}
                </>
              );
            });
          });
        });
      })}
    </>
  );
};

export default Synonyms;
