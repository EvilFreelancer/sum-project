import * as React from 'react';
import axios from 'axios';
import {Typography} from "@mui/material";
import TableComponent from "../Components/TableComponent";
import {useEffect} from "react";

const columns = [
  {name: 'id', text: "ID"},
  {name: 'username', text: "Имя пользователя"},
  {name: 'password', text: "Пароль"},
  {name: 'created_at', text: "Создано"},
  {name: 'updated_at', text: "Обновлено"},
  {name: 'actions', text: "Операции", component: <div>asd</div>},
]

const UsersPage = () => {

  const [users, setUsers] = React.useState([]);

  /**
   * Receive list of users
   */
  const getUsers = () => {
    axios.get(`http://192.168.1.10:3307/api/users`)
      .then(res => {
        setUsers(res.data);
      })
  }

  /**
   * Execute command once after mounting
   */
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Typography variant="h3" component="h3" my={2}>
        Список пользователей
      </Typography>
      <TableComponent columns={columns} data={users} name={'users'} handleReload={getUsers}/>
    </div>
  );
}

export default UsersPage;
