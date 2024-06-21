import { forwardRef } from "react";
import { Box, Grid, styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledAppBarContainerRoot = styled(Grid)(() => {
  return {
    height: "fit-content",
    width: "100%",
  };
});

const StyledBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const backgroundValue = bgColor ? bgColor : palette.background.default;

  return {
    display: "flex",
    background: backgroundValue,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledHeaderRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bannerImage, bgColor } = ownerState;

  const backgroundValue = bgColor ? bgColor : palette.background.default;

  return {
    backgroundImage: bannerImage ? `url(${bannerImage})` : "",
    backgroundColor: backgroundValue,
    backgroundPosition: "center",
    height: "150px",
    width: "100%",
  };
});

const StyledAppBarContainer = forwardRef(({ ...rest }, ref) => (
  <StyledAppBarContainerRoot ref={ref} {...rest} />
));

const StyledBox = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledBoxRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

const StyledHeader = forwardRef(({ bannerImage, bgColor, ...rest }, ref) => (
  <StyledHeaderRoot ref={ref} ownerState={{ bannerImage, bgColor }} {...rest} />
));

StyledAppBarContainer.displayName = "StyledAppBarContainer";

StyledHeader.displayName = "StyledHeader";

StyledHeader.propTypes = {
  bannerImage: PropTypes.string,
  bgColor: PropTypes.string,
};

StyledBox.displayName = "StyledBox";

StyledBox.propTypes = {
  bgColor: PropTypes.string,
};

export { StyledBox, StyledHeader, StyledAppBarContainer };
