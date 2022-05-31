import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Alert, Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_cart } from "../redux/actions/cartAction";

const pages = ["Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getState = useSelector((state) => state.cartReducer.cart);

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

  const [price, setPrice] = React.useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let price = 0;
    getState.map((pd) => {
      price = pd.price * pd.qtn + price;
      setPrice(price);
    });
  };

  React.useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();

  const handleCart = (_id) => {
    dispatch(delete_cart(_id));
  };
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [qtn, setQtn] = useState("");
  const handleCartInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("qtn", qtn);
    const res = await axios.post("http://localhost:5000/cart", formData).then((res) => {
      alert("yes");
    });
  };
  return (
    <>
      <Box>
        <AppBar position="static" style={{ backgroundColor: "#010101" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link href={"/"}>
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
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Typography>
              </Link>

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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Link href={"/"}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
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
                >
                  HOME
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link href={"/blog"} key={page.id}>
                    <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}></IconButton>
                </Tooltip>
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <Badge
                  badgeContent={getState.length}
                  color="primary"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <ShoppingCartIcon />
                </Badge>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <form onSubmit={handleCartInfo}>
                    {getState.length ? (
                      <div style={{ width: "300px" }}>
                        {getState.map((pd) => {
                          return (
                            <div className="d-flex justify-content-between p-3" key={pd._id}>
                              <img
                                src={pd.img}
                                alt=""
                                style={{ width: "5rem", height: "5rem" }}
                                key={pd._id}
                                name="image"
                                onChange={(e) => setImage(e.target.value)}
                              />
                              <div>
                                <p name="name" onChange={(e) => setName(e.target.value)}>
                                  {pd.name}{" "}
                                </p>
                                <p name="qtn" onChange={(e) => setQtn(e.target.value)}>
                                  {pd.qtn}
                                </p>
                              </div>
                              <DeleteIcon onClick={() => handleCart(pd._id)} />
                            </div>
                          );
                        })}

                        <p>Total:{price}</p>
                        <button type="submit">Place order</button>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <p style={{ fontSize: 22, padding: 10 }}>Your carts is empty</p>
                      </div>
                    )}
                  </form>
                  {success && <Alert severity="success">Booking successfully!</Alert>}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
