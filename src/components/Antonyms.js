import React from "react";

const Antonyms = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return Def.antonyms.map((Ant) => {
              return (
                <>
                  {Ant},{" "}
                </>
              );
            });
          });
        });
      })}
    </>
  );
};

export default Antonyms;
