// import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";

const UserCoinTable = () => {
  const [coinData, setCoinData] = useState([]);

  const getCoinData = async (req, res) => {
    const fetchResponse = await fetch("http://localhost:1337/api/coins?populate=*");
    const coinJSON = await fetchResponse.json();
    const requestedCoins = coinJSON.data.filter((value) => value.attributes.isApproved === true);
    console.log(coinJSON.data);
    console.log(requestedCoins);
    setCoinData(requestedCoins);
  };

  useEffect(() => {
    getCoinData();
  }, []);
  console.log(coinData);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> SR#</TableCell>
            <TableCell className="tableCell">COIN</TableCell>
            <TableCell className="tableCell">SYMBOL</TableCell>
            <TableCell className="tableCell">TOTAL SUPPLY</TableCell>
            <TableCell className="tableCell">MAX SUPPLY</TableCell>
            <TableCell className="tableCell">CONTRACT ADDRESS</TableCell>
            <TableCell className="tableCell">EXPLORER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinData.length > 0 &&
            coinData.map((curElem, index) => {
              return (
                <TableRow key={index + 1}>
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img
                        src={`http://localhost:1337${curElem?.attributes?.Image?.data?.attributes?.url}`}
                        alt=""
                        className="image"
                      />
                      {curElem.attributes.Title}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{curElem.attributes.Symbol}</TableCell>
                  <TableCell className="tableCell">{curElem.attributes.totalSupply}</TableCell>
                  <TableCell className="tableCell">{curElem.attributes.maxSupply}</TableCell>
                  <TableCell className="tableCell">{curElem.attributes.contractAddress}</TableCell>
                  <TableCell className="tableCell">
                    <span className="">{curElem.attributes.explorer}</span>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserCoinTable;
