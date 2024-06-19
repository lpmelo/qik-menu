import { forwardRef } from "react";
import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";

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

const StyledHeader = forwardRef(({ bannerImage, bgColor, ...rest }, ref) => (
  <StyledHeaderRoot ref={ref} ownerState={{ bannerImage, bgColor }} {...rest} />
));

StyledHeader.displayName = "StyledHeader";

StyledHeader.propTypes = {
  bannerImage: PropTypes.string,
  bgColor: PropTypes.string,
};

export default StyledHeader;
