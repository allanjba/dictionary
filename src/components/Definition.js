import React from "react";

const Definition = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <li className="mx-7 mb-2">
                {Def.definition}
              </li>
            );
          });
        });
      })}
    </>
  );
};

export default Definition;
