import * as React from 'react';
import axios from "axios";
import TableComponent from "../Components/TableComponent";
import {Typography} from "@mui/material";
import {useEffect} from "react";

const columns = [
  {name: 'id', text: "ID"},
  {name: 'name', text: "Название устройства"},
  {name: 'created_at', text: "Создано"},
  {name: 'updated_at', text: "Обновлено"},
  {name: 'actions', text: "Операции", component: <div>asd</div>},
]

const DevicesPage = () => {

  const [devices, setDevices] = React.useState([]);

  /**
   * Receive list of users
   */
  const getDevices = () => {
    axios.get(`http://192.168.1.10:3307/api/devices`)
      .then(res => {
        setDevices(res.data);
      })
  }

  /**
   * Execute command once after mounting
   */
  useEffect(() => {
    getDevices();
  }, []);

  return (
    <div>
      <Typography variant="h3" component="h3" my={2}>
        Список устройств
      </Typography>
      <TableComponent columns={columns} data={devices} name={'devices'} handleReload={getDevices}/>
    </div>
  );
}

export default DevicesPage;
