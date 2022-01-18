import * as React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import axios from "axios";

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

const ModalDeleteComponent = ({object, name, handleReload}) => {
  const [open, setOpen] = React.useState(false);

  console.log(object);

  const deleteObject = () => {
    axios.delete(`http://192.168.1.10:3307/api/` + name + `/` + object.id).then(() => {
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

  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleOpen}>Удалить</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Удалить элемент
          </Typography>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            Вы действительно хотите удалить данный элемент?
          </Typography>
          <br/>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={deleteObject} color='error'>Продолжить</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalDeleteComponent;