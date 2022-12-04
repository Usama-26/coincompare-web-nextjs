import { useEffect, useState } from "react";
import Graph from "./components/Graph";

export default function CurrencyInfo() {
  const groupButtonStyles =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-blue-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-blue-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
  const converterInputStyles =
    "rounded-none rounded-r-lg bg-blue-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-blue-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <main className="container mx-auto my-10 flex items-center justify-between text-gray-100">
      <div id="leftBox" className="basis-4/6 p-4">
        <div className="flex justify-between items-center text-3xl font-bold my-4">
          <h1>
            Ethereum Price Chart <span className="uppercase mx-4">(ETH/USD)</span>
          </h1>
          <h1>
            <span>$1,297.63</span>
          </h1>
        </div>
        <p className=" my-2 text-sm ">Last updated 03:00PM UTC. Currency in USD.</p>
        <div className="flex flex-wrap justify-between my-4">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className={groupButtonStyles}>
              Price
            </button>
            <button type="button" className={groupButtonStyles} style={{ borderRadius: 0 }}>
              Market Cap
            </button>
            <button
              type="button"
              className={groupButtonStyles}
              style={{ borderRadius: 0, borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
            >
              Trading View
            </button>
          </div>
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className={groupButtonStyles}>
              24h
            </button>
            <button type="button" style={{ borderRadius: 0 }} className={groupButtonStyles}>
              7d
            </button>
            <button type="button" style={{ borderRadius: 0 }} className={groupButtonStyles}>
              14d
            </button>
            <button type="button" style={{ borderRadius: 0 }} className={groupButtonStyles}>
              30d
            </button>
            <button type="button" style={{ borderRadius: 0 }} className={groupButtonStyles}>
              90d
            </button>
            <button
              type="button"
              className={groupButtonStyles}
              style={{ borderRadius: 0, borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
            >
              1y
            </button>
          </div>
        </div>
        <Graph />

        <div className="my-4 w-full">
          <table className="mx-auto text-blue-gray-200">
            <tr className="bg-blue-gray-600/50">
              <td className="px-10 border py-3 border-blue-gray-700 text-center">1h</td>
              <td className="px-10 border py-3 border-blue-gray-700 text-center">24h</td>
              <td className="px-10 border py-3 border-blue-gray-700 text-center">7d</td>
              <td className="px-10 border py-3 border-blue-gray-700 text-center">30d</td>
              <td className="px-10 border py-3 border-blue-gray-700 text-center">60d</td>
              <td className="px-10 border py-3 border-blue-gray-700 text-center">90d</td>
            </tr>
            <tr>
              <td className="px-10 py-3 border border-blue-gray-700 text-center">0.2%</td>
              <td className="px-10 py-3 border border-blue-gray-700 text-center">0.9%</td>
              <td className="px-10 py-3 border border-blue-gray-700 text-center">6.1%</td>
              <td className="px-10 py-3 border border-blue-gray-700 text-center">5.0%</td>
              <td className="px-10 py-3 border border-blue-gray-700 text-center">-16.4%</td>
              <td className="px-10 py-3 border border-blue-gray-700 text-center">-69.8%</td>
            </tr>
          </table>
        </div>
      </div>
      <div id="rightBox" className="basis-2/6">
        <div className="rounded-lg bg-blue-gray-700/50 p-2 mx-8">
          <h1 className="text-xl font-bold text-gray-100 my-4">Convert ETH to USD</h1>

          <div className="flex flex-col gap-4">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-blue-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-blue-gray-600 dark:text-gray-300 dark:border-gray-600">
                ETH
              </span>
              <input type="number" min={1} className={converterInputStyles} />
            </div>

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-blue-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-blue-gray-600 dark:text-gray-300 dark:border-gray-600">
                USD
              </span>
              <input type="number" min={1} className={converterInputStyles} />
            </div>
          </div>
          <p className="bold uppercase text-sm my-1">1 ETH = $1,297.63</p>
        </div>
        <div className="rounded-lg bg-blue-gray-700/50 p-4 m-8">
          <h1 className="text-xl font-bold text-gray-100 my-4">ETH Price Statistics</h1>
          <table className="w-full mx-auto text-sm text-blue-gray-100 font-light">
            <tbody>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Ethereum Price</td>
                <td>
                  <b>$1,297.63</b>
                </td>
              </tr>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Market Cap Rank</td>
                <td>
                  <b>#2</b>
                </td>
              </tr>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Market Cap</td>
                <td>
                  <b>$153,849,793,015</b>
                </td>
              </tr>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Market Cap Dominance</td>
                <td>
                  <b>17.187%</b>
                </td>
              </tr>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Trading Volume</td>
                <td>
                  <b>$5,149,150,414</b>
                </td>
              </tr>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Slef Reported Market Cap</td>
                <td>
                  <b>N/A</b>
                </td>
              </tr>
              <tr className="w-full border-b border-gray-700 py-3 flex items-center justify-between">
                <td>Self Reported Circulating Supply</td>
                <td>
                  <b> N/A</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
