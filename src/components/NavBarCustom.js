import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart } from "@material-ui/icons";
import { Box } from "@mui/material";
import SearchProducts from "./SearchProducts";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
  navBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    background: "#3A3A3A",
    height: "150px",
    width: "100%",
  },
}));

const NavBarCustom = () => {
  const { link, icon, navBar } = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={link} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={link} to="/about">
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={link} to="/contact">
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={link} to="/about">
                Faq
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className={navBar}>
        <IconButton className={icon} onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
        <SearchProducts />
        <IconButton className={icon}>
          <ShoppingCart />
        </IconButton>
      
      </div>
      <Box >

      </Box>
    </>
  );
};

export default NavBarCustom;
