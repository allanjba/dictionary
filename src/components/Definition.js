import React from "react";

const Definition = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          console.log(Val.meanings)
          return Means.definitions.map((Def) => {
            return (
              <>
                {Def.definition}
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Definition;
