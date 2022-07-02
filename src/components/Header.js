import React from "react";

import { Button, Paper, styled } from "@mui/material";

import Carousel from "react-material-ui-carousel";
import NavBarCustom from "./NavBarCustom";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

const Header = () => {
  return (
    <>
      <NavBarCustom />
      <Carousel
        height="700px"
        NextIcon={<img src="http://random.com/next" />}
        PrevIcon={<img src="http://random.com/prev" />}
      >
        {items.map((item, i) => (
          <Paper key={i}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        ))}
      </Carousel>
    </>
  );
};

export default Header;
