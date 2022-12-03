import { useContext, useEffect, useRef, useState } from "react";
import { CoinMarketContext } from "../../../context/context";
import {
  HeaderCell,
  HeaderCellLeading,
  DataCell,
  DataCellLeading,
  TableRow,
  TableHead,
  TableHeadRow,
  TableBody,
  Table,
} from "./../Table";
import Link from "next/link";
export const formatNum = (num) => {
  return Number(num?.toFixed(2)).toLocaleString();
};
export default function CoinTable() {
  var coinsdata = useRef([]);
  let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState([]);
  let [previousCoinData, setPreviousCoinData] = useState([]);
  const handlePrice = (value) => {
    let isIncrement = undefined;
    if (previousCoinData.length > 0) {
      if (formatNum(coinData[value].quote.USD.price) < formatNum(previousCoinData[value].quote.USD.price)) {
        isIncrement = false;
      } else if (formatNum(coinData[value].quote.USD.price) > formatNum(previousCoinData[value].quote.USD.price)) {
        isIncrement = true;
      } else {
      }
    }

    return { isIncrement, value: formatNum(coinData[value].quote.USD.price) };
  };
  useEffect(() => {
    const getJSON = async function () {
      try {
        let apiResponse = await getTopTenCoins();
        setPreviousCoinData(coinsdata.current);
        setCoinData(apiResponse);
      } catch (e) {
        console.error(e.message);
      }
    };

    if (getTopTenCoins) getJSON();

    const time = setInterval(() => {
      getJSON();
    }, 20 * 1000);
  }, []);
  useEffect(() => {
    coinsdata.current = coinData;
  }, [coinData]);

  return (
    <section className="text-gray-100 bg-body">
      <div className="containermx-auto flex py-20 md:flex-row flex-col items-center">
        {
          <Table>
            <TableHead>
              <TableHeadRow>
                <HeaderCell>#</HeaderCell>
                <HeaderCellLeading>name</HeaderCellLeading>
                <HeaderCell>price</HeaderCell>
                <HeaderCell>24h %</HeaderCell>
                <HeaderCell>7d %</HeaderCell>
                <HeaderCell>market cap</HeaderCell>
                <HeaderCell>volume</HeaderCell>
                <HeaderCell>supply</HeaderCell>
                <HeaderCell>change %</HeaderCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              {coinData?.map((coin, index) => {
                return (
                  <TableRow key={index}>
                    <DataCell>{coin.cmc_rank}</DataCell>
                    <DataCellLeading>
                      <span>
                        <Link href={"/"} className="hover:text-purple-400">
                          {coin.name}
                        </Link>
                        &nbsp;
                        <i className=" not-italic text-gray-600 text-xs">{coin.symbol}</i>
                      </span>
                    </DataCellLeading>
                    <DataCell isIncrement={handlePrice(index).isIncrement}>${formatNum(coin.quote.USD.price)}</DataCell>
                    <DataCell isIncrement={coin.quote.USD.percent_change_24h > 0 ? true : false}>
                      {formatNum(coin.quote.USD.percent_change_24h)}%
                    </DataCell>
                    <DataCell isIncrement={coin.quote.USD.percent_change_7d > 0 ? true : false}>
                      {formatNum(coin.quote.USD.percent_change_7d)}%
                    </DataCell>
                    <DataCell>${formatNum(coin.quote.USD.market_cap)}</DataCell>
                    <DataCell>${formatNum(coin.quote.USD.volume_24h)}</DataCell>
                    <DataCell>${formatNum(coin.total_supply)}</DataCell>
                    <DataCell>{formatNum(coin.quote.USD.volume_change_24h)}%</DataCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        }
      </div>
    </section>
  );
}
