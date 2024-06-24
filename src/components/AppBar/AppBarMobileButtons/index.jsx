import { useEffect, useState } from "react";
import { StyledButtonBox, StyledButtonHeaderBox } from "./style";
import { useSelector } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const AppBarMobileButtons = () => {
  const { backgroundColour } = useSelector((state) => state.webSettings);
  const [actualRoute, setActualRoute] = useState(null);

  useEffect(() => {
    if (window.location.pathname === "/home") {
      setActualRoute("Menu");
    }
  }, []);

  return (
    <StyledButtonBox bgColor={backgroundColour}>
      <Typography>{actualRoute}</Typography>
      <StyledButtonHeaderBox bgColor={backgroundColour}>
        <IconButton>
          <Menu />
        </IconButton>
      </StyledButtonHeaderBox>
    </StyledButtonBox>
  );
};

export default AppBarMobileButtons;
