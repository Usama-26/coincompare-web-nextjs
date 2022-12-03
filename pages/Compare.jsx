import { useContext, useEffect, useState } from "react";
import { CoinMarketContext } from "../context/context";
import CoinBox from "./components/CoinBox";
import CoinDetails from "./components/CoinDetails";

function Compare() {
  let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const getJSON = async function () {
      try {
        let apiResponse = await getTopTenCoins();
        setCoinData(apiResponse);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (getTopTenCoins) getJSON();
  }, [getTopTenCoins]);

  return (
    <section id="compareCoin" className="text-gray-100 body-font bg-body">
      <div className="container mx-auto pt-24 flex justify-center">
        <h1 className="capitalize mx-auto text-4xl font-bold p-4 border-b-4 border-purple-500 ">compare</h1>
      </div>
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col justify-around gap-44 items-center">
        <div className="w-full md:w-1/2">
          <CoinBox id="firstCoin" data={coinData} />
          <CoinDetails />
        </div>
        <div className="w-full md:w-1/2">
          <CoinBox id="secondCoin" data={coinData} />
          <CoinDetails />
        </div>
      </div>
    </section>
  );
}

export default Compare;
