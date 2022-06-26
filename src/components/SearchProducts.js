import { Search } from "@material-ui/icons";
import { makeStyles } from "@mui/material";
import React from "react";

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

const SearchProducts = () => {
  const { link, icon, navBar } = useStyles();
  return (
    <Search>
      {/* <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      /> */}
    </Search>
  );
};
export default SearchProducts;
