import { useContext, useEffect, useState } from "react";
import { CoinMarketContext } from "../../context/context";
import ComboBox from "./ComboBox";

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
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col justify-around gap-44 items-center">
        <div className="w-full md:w-1/2 ">
          <ComboBox id="firstCoin" data={coinData} />
        </div>
        <div className="w-full md:w-1/2 ">{/* <ComboBox id="secondCoin" data={dataARR} /> */}</div>
      </div>
    </section>
  );
}

export default Compare;
