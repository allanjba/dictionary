
import './App.css';

function App() {
  return (
    <div className="App h-screen">
      <div className='container h-1/6 w-full max-w-full content-center bg-sky-500'>
        <div className="p-8 text-white text-2xl">
          Allan's Dictionary
        </div>
        <div className="flex justify-center">
          <div className="mb-3 w-1/2">
            <div className="input-group relative flex  items-stretch w-full mb-4">
              <input type="search" className="   block w-full px-3 py-1.5 text-base text-gray-700 bg-white border border-solid border-white rounded transition ease-in-out m-0  focus:outline-none" placeholder="Search" aria-describedby="button" />
              <button className="btn inline-block px-6 py-2 mx-5 border-2 border-white text-white hover:text-sky-500 font-medium text-xs leading-tight uppercase rounded hover:bg-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button">Search</button>
            </div>
          </div>
        </div>
      </div >

      <div className="bg-gray-700 h-5/6 text-white p-8 grid content-center">
        Type a word in the search box
      </div>


    </div >


  );
}

export default App;
