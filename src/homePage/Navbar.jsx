import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { Badge, MenuItem } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../components/context/CartContextProvider";
import { getProductsCountInCart } from "../helpers/functions";
import { useAuth } from "../components/context/AuthContextProvider";
import { ADMIN } from "../helpers/const";

const pages = [
  { id: 1, title: "Products", link: "/products" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Contact", link: "/contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [badgeCount, setBadgeCount] = React.useState(0);
  const { addProductToCart } = useCart();
  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);
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
  const { user, handleLogOut, authListener } = useAuth();
  React.useEffect(() => {
    authListener();
  }, []);
  return (
    <AppBar
      style={{ backgroundColor: "black", color: "white" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar style={{ color: "black" }} disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            SHOP.JSev23
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
            ></Menu>
          </Box>
          {pages.map((elem) => (
            <Link
              key={elem.id}
              to={elem.link}
              style={{ textDecoration: "none" }}
            >
              <MenuItem>
                <Typography sx={{ color: "white", textTransform: "uppercase" }}>
                  {elem.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
          {user.email === ADMIN ? (
            <Link to={"/admin"}>
              <MenuItem sx={{ color: "white", display: "block" }}>
                <Typography textAlign={"center"}>ADMIN</Typography>
              </MenuItem>
            </Link>
          ) : null}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Typography sx={{ color: "white" }}>
            {user ? `Hello, ${user.email}` : `Hello, Guest`}
          </Typography>
          <Link to={"/cart"}>
            <Badge badgeContent={badgeCount} color="success">
              <ShoppingCart sx={{ color: "white" }} />
            </Badge>
          </Link>
          {user.email ? (
            <MenuItem onClick={() => handleLogOut()}>
              <Typography sx={{ color: "white" }}>LogOut</Typography>
            </MenuItem>
          ) : (
            <Link to={"/auth"}>
              <MenuItem>
                <Typography sx={{ color: "white" }}>Register</Typography>
              </MenuItem>
            </Link>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings"></Tooltip>
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
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
