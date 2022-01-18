import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
          >
            SUM
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              <MenuItem component={Link} to="/">
                <Typography textAlign="center">Отчёты</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/devices">
                <Typography textAlign="center">Устройства</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/users">
                <Typography textAlign="center">Пользователи</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}
          >
            SUM
          </Typography>
          <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
            <Button component={Link} to="/" sx={{my: 2, color: 'white', display: 'block'}}>
              Отчёты
            </Button>
          </Box>
          <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
            <Button component={Link} to="/devices" sx={{my: 2, color: 'white', display: 'block'}}>
              Устройства
            </Button>
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button component={Link} to="/users" sx={{my: 2, color: 'white', display: 'block'}}>
              Пользователи
            </Button>
          </Box>

          <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
            <Button component={Link} to="/login" sx={{my: 2, color: 'white', display: 'block'}}>
              Выход
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarComponent;
