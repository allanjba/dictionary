import { useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Select";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  const [word, setWord] = useState();
  const [all, setAll] = useState([]);
  const [main, setMain] = useState([]);

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setAll(dataJ);
    setMain(dataJ[0]);
  };

  useEffect(() => {
    dataApi();
  }, []);

  const Search = async () => {
    await dataApi();
    setWord("");
    console.log(`end of search ${word}`)
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      Search();
    }
  }


  return (
    <div className="App h-screen">
      <div className="container h-1/6 w-full max-w-full content-center bg-sky-500">
        <div className="p-8 text-white text-2xl text-center">Allan's Dictionary</div>
        <div className="flex justify-center">
          <div className="mb-3 w-5/6 lg:w-1/2">
            <div className="input-group relative flex  items-stretch w-full mb-4">
              <input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                onKeyPress={handleKeyPress}
                type="search"
                className="block w-full px-3 py-1.5 text-base text-gray-700 bg-white border border-solid border-white rounded transition ease-in-out m-0  focus:outline-none"
                placeholder="Search"
                aria-describedby="button"
              />
              <button
                className="btn inline-block px-6 py-2 mx-5 border-2 border-white text-white hover:text-sky-500 font-medium text-xs leading-tight uppercase rounded hover:bg-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button"
                onClick={Search}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 min-h-[83.33%] text-white p-8 grid content-center">
        {word === "" ? (
          all.message ?
            <ErrorMessage message={all.message} />
            : <Select all={all} main={main} />
        ) : (
          <p className="text-center">
            Type a word in the search box
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
