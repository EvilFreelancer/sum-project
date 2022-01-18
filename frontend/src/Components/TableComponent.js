import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {ButtonGroup} from "@mui/material";
import ModalEditDeviceComponent from "./ModalEditDeviceComponent";
import ModalDeleteComponent from "./ModalDeleteComponent";
import ModalEditUserComponent from "./ModalEditUserComponent";

const TableComponent = ({columns, data, name, handleReload}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell component="th" key={index}>{column.text}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, indexRow) => (
            <TableRow
              key={indexRow}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              {columns.map((column, indexCol) => (
                <TableCell key={indexRow + '-' + indexCol}>
                  {column.name === 'actions' ? <ButtonGroup>
                    {name === 'devices' && <ModalEditDeviceComponent object={row} name={name} handleReload={handleReload}/> }
                    {name === 'users' && <ModalEditUserComponent object={row} name={name} handleReload={handleReload}/> }
                    <ModalDeleteComponent object={row} name={name} handleReload={handleReload}/>
                  </ButtonGroup> : row[column.name]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
