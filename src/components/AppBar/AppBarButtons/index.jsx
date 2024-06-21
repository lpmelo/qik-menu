import { useEffect, useState } from "react";
import { StyledTabs, StyledTab } from "./style";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const AppBarButtons = () => {
  const [currentTab, setCurrentTab] = useState("/menu");
  const { backgroundColour } = useSelector((state) => state.webSettings);

  useEffect(() => {
    setCurrentTab(window.location.pathname);
  }, []);

  return (
    <StyledTabs bgColor={backgroundColour} value={currentTab}>
      <StyledTab
        label={<Typography>Menu</Typography>}
        value="/menu"
        to="/menu"
      />
      <StyledTab
        label={<Typography>Entrar</Typography>}
        value="/login"
        to="/login"
      />
      <StyledTab
        label={<Typography>Contato</Typography>}
        value="/contact"
        to="/contact"
      />
    </StyledTabs>
  );
};

export default AppBarButtons;
