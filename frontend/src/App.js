import * as React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import ReportsPage from "./Pages/ReportsPage";
import DevicesPage from "./Pages/DevicesPage";
import UsersPage from "./Pages/UsersPage";
import LoginPage from "./Pages/LoginPage";
import NavbarComponent from "./Components/NavbarComponent";
import {Container} from "@mui/material";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<ReportsPage/>}/>
          <Route path="/devices" element={<DevicesPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <NavbarComponent/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
}

export default App;
