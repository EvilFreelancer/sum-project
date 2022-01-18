import * as React from "react";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import axios from "axios";
import {useEffect} from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalEditUserComponent = ({object, handleReload}) => {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const updateObject = () => {
    let d = new Date();
    let updated_at = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    let payload = {username: userName, updated_at: updated_at};
    axios.patch(`http://192.168.1.10:3307/api/users/` + object.id, payload).then(() => {
      setOpen(false);
      handleReload();
    })
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateName = (e) => {
    setUserName(e.target.value);
  };
  const handleUpdatePass = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setUserName(object.username);
    setPassword(object.password);
  }, []);

  return (
    <div>
      <Button variant='outlined' onClick={handleOpen} sx={{mr: 2}}>Изменить</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Изменить пользователя
          </Typography>
          <br/>
          <TextField
            required
            label="Имя пользователя"
            onChange={handleUpdateName}
            value={userName}
          />
          <br/>
          <br/>
          <TextField
            required
            label="Пароль"
            onChange={handleUpdatePass}
            value={password}
          />
          <br/>
          <br/>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={updateObject} color='error'>Продолжить</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalEditUserComponent;