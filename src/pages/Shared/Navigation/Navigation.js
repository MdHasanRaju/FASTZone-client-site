import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import profileLogo from "../../../images/profile1.png";

const Navigation = () => {
  const { admin, user, logout } = useAuth();
  // const pages = [
  //   { name: "Home", to: "/home", current: false },
  //   { name: "Explore", to: "/explore", current: false },
  //   {
  //     name: `${user.email ? "Dashboard" : ""}`,
  //     to: `${user.email && "/dashboard"}`,
  //     current: false,
  //   },
  // ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
            }}
          >
            <NavLink
              style={{
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
              }}
              to="/"
            >
              FASTZone
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={page.to}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </NavLink>
              ))} */}
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "monospace",
                  backgroundColor: "none",
                }}
                to="/home"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "monospace",
                  backgroundColor: "transparent",
                }}
                to="/explore"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Explore</Typography>
                </MenuItem>
              </NavLink>
              {user.email && (
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "monospace",
                    backgroundColor: "transparent",
                    "&:hover": {
                      background: "none",
                    },
                  }}
                  to="/dashboard"
                >
                  <MenuItem
                    sx={{
                      "&:hover": {
                        background: "none",
                      },
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                </NavLink>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor:'none',
                fontFamily: "monospace",
              }}
              to="/home"
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "monospace",
              }}
              to="/explore"
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Explore</Typography>
              </MenuItem>
            </NavLink>
            {user.email && (
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "monospace",
                  "&:hover": {
                    background: "none",
                  },
                }}
                to="/dashboard"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
              </NavLink>
            )}
            {/* {pages.map((page) => (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={page.to}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!user?.email && (
              <Typography variant="h6" noWrap sx={{ fontFamily: "monospace" }}>
                <NavLink
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="login"
                >
                  Login
                </NavLink>
              </Typography>
            )}
            {user?.email && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={user?.photoURL || profileLogo}
                  />
                </IconButton>
              </Tooltip>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography component="div" variant="body1">
                  {user?.displayName}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography component="div" variant="body1">
                  {user?.email}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to="/home"
                >
                  <Typography onClick={logout} textAlign="center">
                    Logout
                  </Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  // return (

  //   <nav className="navbar navbar-expand-lg navbar-light bg-dark custom">
  //     <div className="container menu-clr fs-5">
  //       <span className=" fw-bolder text-info ">FASTZone</span>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //        <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav me-auto mb-lg-0">
  //           <li>
  //             <Link to="/home" className="nav-item nav-link active text-info">
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link to="/explore" className="nav-item nav-link text-info">
  //               Explore
  //             </Link>
  //           </li>
  //           {user?.email && (
  //             <li>
  //               <Link to="/dashboard" className="nav-item nav-link  text-info">
  //                 Dashboard
  //               </Link>
  //             </li>
  //           )}
  //         </ul>
  //         <div className="d-flex-lg">
  //           {user?.email && (
  //             <span className="my-auto me-2 text-light">
  //               Hi! {user.displayName}
  //             </span>
  //           )}
  //           {user?.email ? (
  //             <Link
  //               className="text-info text-decoration-none text-bold"
  //               onClick={logout}
  //               to="/home"
  //             >
  //               Log Out
  //             </Link>
  //           ) : (
  //             <Link
  //             className="text-info text-decoration-none text-bold"
  //             to="/register"
  //           >
  //            Register
  //           </Link>
  //             // <Link to="/login">
  //             //   <button className="btn btn-outline-info" type="submit">
  //             //     Login
  //             //   </button>
  //             // </Link>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navigation;
