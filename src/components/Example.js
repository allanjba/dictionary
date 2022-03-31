
const Example = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def, i) => {
            return (
              <>
                {Def.example ? (
                  <li className="mx-7 mb-2">{Def.example}</li>
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
