import logo from "./logo.svg";
// import "./App.css";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { red } from "@mui/material/colors";
import Homepage from "./Pages/Homepage";
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Home", "Projects", "Blog"]; // Top pages
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; //hide page in profile settings
const settings = ["Logout"];

function App() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // //close set null
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Portfolio
          </Typography>
        </Toolbar>
      </Container>
      <Container maxWidth="xl" sx={{ backgroundColor: "#000000" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            backgroundColor: "#000000",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              // onClick={handleCloseNavMenu}
              sx={{
                my: 0,
                color: "white",
                display: "block",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#000000",
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
    <Homepage/>

    </>
  );
}

export default App;
