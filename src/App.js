import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "./Component/Banner";
import CovidSummary from "./Component/CovidSummary";
import Cards from "./Component/Cards";
import Pagination from "./Component/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [dataperpage] = useState(20);

  useEffect(() => {
    const fetchURL = "https://api.covid19api.com/live/country/pakistan";
    async function getData() {
      const result = await axios.get(fetchURL);
      setData(result.data);
      return result;
    }
    getData();
  }, []);

  // Get current DATA
  const indexofLastData = currentpage * dataperpage;
  const indexofFirstData = indexofLastData - dataperpage;
  const currentData = data.slice(indexofFirstData, indexofLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header className="bg-sky-600 w-full p-5 flex flex-wrap justify-start items-center drop-shadow-lg">
        <a href="/" className="text-white text-lg font-bold leading-4">
          Covid-19 Tracker
        </a>
        <div className="bg-white w-[40px] h-[40px] rounded-full ml-[auto]"></div>
      </header>
      <Banner />
      <CovidSummary data={currentData} />
      <Pagination
        dataperpage={dataperpage}
        totalData={data.length}
        paginate={paginate}
      />
      <Cards data={data} />
    </div>
  );
}

export default App;
