import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import "../styles/Vendors.css";



const rows = [{Name:"Aparna" , 
              ID:"AB", 
              Items: [{ItemName:"Burger",
                       Price:"$5.00"},
                      {ItemName:"Pizza",
                       Price:"$10.00"}]
              },
              {Name:"Aparna" , 
              ID:"AB", 
              Items: [{ItemName:"Burger",
                       Price:"$5.00"},
                      {ItemName:"Pizza",
                       Price:"$10.00"}]
              },
              {Name:"Aparna" , 
              ID:"AB", 
              Items: [{ItemName:"Burger",
                       Price:"$5.00"},
                      {ItemName:"Pizza",
                       Price:"$10.00"}]
              },
              {Name:"Aparna" , 
              ID:"AB", 
              Items: [{ItemName:"Burger",
                       Price:"$5.00"},
                      {ItemName:"Pizza",
                       Price:"$10.00"}]
              }
              ];


export default function BasicTable() {
  
  return (
    <div className="vendors">
    <div className="title"><h1>Vendors</h1></div>
    <div className="table">
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