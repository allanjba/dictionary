import React from "react";

const Example = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                {Def.example ? (
                  Def.example
                ) : (
                  ""
                )}
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Example;
