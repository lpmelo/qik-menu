import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, styled } from "@mui/material";

const StyledButtonBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const colorValue = bgColor ? bgColor : palette.primary.main;

  return {
    display: "flex",
    height: "64px",
    width: "100%",
    alignItems: "center",
    position: "relative",
    "& .MuiTypography-root": {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: "500",
      textAlign: "center",
      width: "100%",
      height: "23px",
      color: colorValue,
    },
  };
});

const StyledButtonBox = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledButtonBoxRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

StyledButtonBox.displayName = "StyledButtonBox";

StyledButtonBox.propTypes = {
  bgColor: PropType.string,
};

const StyledButtonHeaderBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const colorValue = bgColor ? bgColor : palette.primary.main;

  return {
    position: "absolute",
    right: "17px",
    top: "12px",

    "& .MuiSvgIcon-root": { color: colorValue, width: "28px", height: "28px" },
  };
});

const StyledButtonHeaderBox = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledButtonHeaderBoxRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

StyledButtonHeaderBox.displayName = "StyledButtonHeaderBox";

StyledButtonHeaderBox.propTypes = {
  bgColor: PropType.string,
};

export { StyledButtonBox, StyledButtonHeaderBox };
