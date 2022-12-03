import { CoinMarketContext } from "../../context/context";

export default function CoinDetails(props) {
  console.log(props);
  return (
    <div className="text-black bg-white max-w-md mx-auto my-16">
      <div className="w-full flex justify-between items-center py-8 px-8 bg-green-300">
        <div>
          <h1 className="text-2xl font-semibold">{""}</h1>
          <span className="uppercase text-lg">BTC</span>
        </div>
        <div>
          <h1 className="text-5xl">$16,990</h1>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-8 bg-teal-300">
        <div className="w-1/2">
          <h3 className="uppercase text-lg font-bold">change</h3>
        </div>
        <div className="border border-black w-1/2">
          <div className="flex">
            <div className="w-1/3 px-2 py-2 border border-black">
              <h4 className="font-semibold font-md">1H</h4>
              <h2 className="text-xl font-bold">-0.95</h2>
            </div>
            <div className="w-1/3 px-2 py-2 border border-black">
              <h4 className="font-semibold font-md">24H</h4>
              <h2 className="text-xl font-bold">-1.70</h2>
            </div>
            <div className="w-1/3 px-2 py-2 border border-black">
              <h4 className="font-semibold font-md">7D</h4>
              <h2 className="text-xl font-bold">-3.45</h2>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 px-2 py-2 border border-black">
              <h4 className="font-semibold font-md">30D</h4>
              <h2 className="text-xl font-bold">-9.80</h2>
            </div>
            <div className="w-1/3 px-2 py-2 border border-black">
              <h4 className="font-semibold font-md">60D</h4>
              <h2 className="text-xl font-bold">0.95</h2>
            </div>
            <div className="w-1/3 px-2 py-2 border border-black">
              <h4 className="font-semibold font-md">90D</h4>
              <h2 className="text-xl font-bold">4.27</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-blue-300">
        <div className="w-1/3 px-2 py-2 border border-black">
          <h4 className="font-semibold font-md">Market Cap</h4>
          <h2 className="text-xl font-bold">-0.95</h2>
        </div>
        <div className="w-1/3 px-2 py-2 border border-black">
          <h4 className="font-semibold font-md">Fully Diluted Market Cap</h4>
          <h2 className="text-xl font-bold">-0.95</h2>
        </div>
        <div className="w-1/3 px-2 py-2 border border-black">
          <h4 className="font-semibold font-md">Market Cap Dominance</h4>
          <h2 className="text-xl font-bold">-0.95</h2>
        </div>
      </div>
      <div className="flex bg-indigo-300">
        <div className="w-1/3 px-2 py-2 border border-black">
          <h4 className="font-semibold font-md">Max Supply</h4>
          <h2 className="text-xl font-bold">200000000</h2>
        </div>
        <div className="w-1/3 px-2 py-2 border border-black">
          <h4 className="font-semibold font-md">Circulating Supply</h4>
          <h2 className="text-xl font-bold">159979963.67</h2>
        </div>
        <div className="w-1/3 px-2 py-2 border border-black">
          <h4 className="font-semibold font-md">Total Supply</h4>
          <h2 className="text-xl font-bold">159979963.59</h2>
        </div>
      </div>
    </div>
  );
}
