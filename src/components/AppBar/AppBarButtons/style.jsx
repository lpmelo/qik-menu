import { forwardRef } from "react";
import PropType from "prop-types";
import { Tab, Tabs, styled } from "@mui/material";

const StyledTabRoot = styled(Tab)(() => ({ width: "14.5rem", height: "52px" }));

const StyledTabsRoot = styled(Tabs)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const colorValue = bgColor ? bgColor : palette.primary.main;

  return {
    "& .Mui-selected": {
      color: `${colorValue} !important`,
    },

    "& .MuiTypography-root": {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: "400",
      textAlign: "center",
      width: "100%",
      height: "23px",
      color: colorValue,
    },

    "& .MuiTabs-indicator": {
      height: "5px",
      backgroundColor: colorValue,
    },
  };
});

const StyledTab = forwardRef(({ ...rest }, ref) => (
  <StyledTabRoot ref={ref} {...rest} />
));

const StyledTabs = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledTabsRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

StyledTab.displayName = "StyledTab";

StyledTabs.displayName = "StyledTabs";

StyledTabs.propTypes = {
  bgColor: PropType.string,
};

export { StyledTabs, StyledTab };
