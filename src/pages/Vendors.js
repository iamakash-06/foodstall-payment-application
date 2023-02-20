import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import "../styles/Vendors.css";
import React, { useEffect, useState } from "react";

import axios from "axios";



export default function BasicTable() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch resource when Component mounts
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/api/vendor/display");
        setRows(result.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="vendors">
    <div className="vendorsTitle"><h1>Vendors</h1></div>
    <div className="vendorsTable">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >ID</TableCell>
            <TableCell >Items</TableCell>
            <TableCell >Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
              <TableCell component="th" scope="row">{row.Name}</TableCell>
              <TableCell>{row.ID}</TableCell>
              <TableCell>{row.Items.map((item,index) => (<tr key = {index}>{item.ItemName}</tr>))}</TableCell>
              <TableCell>{row.Items.map((item,index) => (<tr key = {index}>{item.Price}</tr>))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="buttons">
        <Link to="/addvendors" ><div className="button1">ADD VENDOR</div></Link>
        <Link to="/deletevendors" ><div className="button2">DELETE VENDOR</div></Link>
        <Link to="/editvendors" ><div className="button3">EDIT VENDOR</div></Link>
    </div>
    </div>
  );
}