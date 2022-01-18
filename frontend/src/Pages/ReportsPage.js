import * as React from 'react';
import axios from 'axios';
import {Typography} from "@mui/material";
import TableComponent from "../Components/TableComponent";
import {useEffect} from "react";

const columns = [
  {name: 'id', text: "ID"},
  {name: 'value', text: "Значение"},
  {name: 'device_id', text: "Идентификатор устройства"},
  {name: 'created_at', text: "Создано"},
]

const ReportsPage = () => {

  const [reports, setReports] = React.useState([]);

  /**
   * Receive list of users
   */
  const getReports = () => {
    axios.get(`http://192.168.1.10:3307/api/reports`)
      .then(res => {
        setReports(res.data);
      })
  }

  /**
   * Execute command once after mounting
   */
  useEffect(() => {
    getReports();
  }, []);

  return (
    <div>
      <Typography variant="h3" component="h3" my={2}>
        Таблица с собранными данными
      </Typography>
      <TableComponent columns={columns} data={reports} name={'reports'} handleReload={getReports}/>
    </div>
  );
}

export default ReportsPage;
