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

const ModalEditDeviceComponent = ({object, handleReload}) => {
  const [open, setOpen] = React.useState(false);
  const [deviceName, setDeviceName] = React.useState('');

  const updateObject = () => {
    let d = new Date();
    let updated_at = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    let payload = {name: deviceName, updated_at: updated_at};
    axios.patch(`http://192.168.1.10:3307/api/devices/` + object.id, payload).then(() => {
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
    setDeviceName(e.target.value);
  };

  useEffect(() => {
    setDeviceName(object.name);
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
            Изменить устройство
          </Typography>
          <br/>
          <TextField
            required
            label="Название устройства"
            onChange={handleUpdateName}
            value={deviceName}
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

export default ModalEditDeviceComponent;