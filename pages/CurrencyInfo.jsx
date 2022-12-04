import { useEffect, useState } from "react";
import Graph from "./components/Graph";

export default function CurrencyInfo() {
  const groupButtonStyles =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
  const converterInputStyles =
    "rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <main className="container flex items-center justify-between border border-blue-500 text-gray-100">
      <div id="leftBox" className="basis-4/6 p-4">
        <h1 className="text-3xl font-bold my-4">
          Ethereum Price Chart <span className="uppercase mx-4">(ETH/USD)</span>
        </h1>
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
      </div>
      <div id="rightBox" className="basis-2/6">
        <div className="rounded-lg bg-gray-700/50 p-2 mx-8">
          <h1 className="text-xl font-bold text-gray-100 my-4">Convert ETH to USD</h1>

          <div className="flex flex-col gap-4">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                ETH
              </span>
              <input type="number" className={converterInputStyles} />
            </div>

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                USD
              </span>
              <input type="number" className={converterInputStyles} />
            </div>
          </div>

          <p className="bold uppercase text-sm my-1">1 ETH = $1,297.31</p>
        </div>
      </div>
    </main>
  );
}
