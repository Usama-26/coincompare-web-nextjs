import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { CoinMarketContext } from "../context/context";
import CoinBox from "./components/CoinBox";
import CoinDetails from "./components/CoinDetails";
import { DataCellLeading, HeaderCellLeading, Table, TableBody, TableHead, TableRow } from "./components/Table";
const coinDetails = function () {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <Table>
            <TableHead>
              <HeaderCellLeading></HeaderCellLeading>
            </TableHead>
            <TableBody>
              <TableRow>
                <DataCell>Name</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Symbol</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Price</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Market Cap</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Diluted Market Cap</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Market Cap Dominance</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>{"Volume (24 Hours)"}</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>{"Change % (24 Hours)"}</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>{"Change % (7 Days)"}</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>{"Change % (30 Days)"}</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>{"Change % (60 Days)"}</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>{"Change % (90 Days)"}</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Max Supply</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Circulating Supply</DataCell>
              </TableRow>
              <TableRow>
                <DataCell>Total Supply</DataCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableRow>
      </TableBody>
    </Table>
  );
};
function Compare() {
  let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState([]);
  let [selected, setSelected] = useState(undefined);

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
    <section id="compareCoin" className="text-gray-100">
      <div className="container mx-auto pt-16 flex justify-center">
        <h1 className="capitalize mx-auto text-4xl font-bold p-4 border-b-4 border-purple-500 ">compare</h1>
      </div>
      <div className="container mx-auto bg-gray-300/25">
        <Button variant="gradient" color="purple" size="md" className="capitalize mx-auto">
          <span>Add coin to compare</span>
        </Button>
        <div className="mx-auto flex px-10 py-24 md:flex-row flex-col justify-around gap-44 items-center ">
          <CoinBox data={coinData} getSelectedCoin={(selectedCoin) => setSelected(selectedCoin)} />
        </div>
        <div className="w-full flex overflow-x-scroll">
          <Table>
            <TableBody>
              <TableRow>
                <Table>
                  <TableHead>
                    <HeaderCellLeading>Properties</HeaderCellLeading>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <DataCellLeading>Name</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Symbol</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Price</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Market Cap</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Diluted Market Cap</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Market Cap Dominance</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>{"Volume (24 Hours)"}</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>{"Change % (24 Hours)"}</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>{"Change % (7 Days)"}</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>{"Change % (30 Days)"}</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>{"Change % (60 Days)"}</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>{"Change % (90 Days)"}</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Max Supply</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Circulating Supply</DataCellLeading>
                    </TableRow>
                    <TableRow>
                      <DataCellLeading>Total Supply</DataCellLeading>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default Compare;
