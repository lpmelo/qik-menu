import { forwardRef } from "react";
import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;
  
  const backgroundValue = bgColor ? bgColor : palette.background.default;

  return {
    background: backgroundValue,
    height: "52px",
    width: "100%",
  };
});

const StyledBox = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledBoxRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

StyledBox.displayName = "StyledBox";

StyledBox.propTypes = {
  bgColor: PropTypes.string,
};

export default StyledBox;
