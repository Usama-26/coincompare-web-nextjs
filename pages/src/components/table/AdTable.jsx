// import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AdTable = () => {
  const [adData, setAdData] = useState([]);

  const getAdData = async (req, res) => {
    const fetchResponse = await fetch("http://localhost:1337/api/ads?populate=*");
    const adJSON = await fetchResponse.json();
    const requestedCoins = adJSON.data.filter((value) => value.attributes.isApproved === false);
    console.log(adJSON.data);
    console.log(requestedCoins);
    setAdData(requestedCoins);
  };
  const approveAdRequest = (adData) => {
    axios
      .put(`http://localhost:1337/api/ads/${adData.id}`, {
        data: {
          isApproved: true,
        },
      })
      .then((data) => {
        console.log(data);
        getAdData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const rejectAdRequest = (adData) => {
    axios
      .delete(`http://localhost:1337/api/ads/${adData.id}`)
      .then((data) => {
        console.log(data);
        getAdData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAdData();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> SR#</TableCell>
            <TableCell className="tableCell">TITLE</TableCell>
            <TableCell className="tableCell">DESCRIPTION</TableCell>
            <TableCell className="tableCell">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adData.length > 0 &&
            adData.map((curElem, index) => {
              return (
                <TableRow key={index + 1}>
                  <TableCell className="tableCell">{index + 1}</TableCell>

                  <TableCell className="tableCell">{curElem.attributes.Title}</TableCell>
                  <TableCell className="tableCell">{curElem.attributes.Description}</TableCell>

                  <TableCell className="tableCell">
                    <div className="flex">
                      <button
                        onClick={(e) => approveAdRequest(curElem)}
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Approve
                      </button>
                      <button
                        onClick={(e) => rejectAdRequest(curElem)}
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Reject
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdTable;
