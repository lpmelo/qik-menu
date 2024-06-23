import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, styled } from "@mui/material";

const StyledItemBoxRoot = styled(Box)(() => {
  return {
    width: "100%",
  };
});

const StyledItemBox = forwardRef(({ ...rest }, ref) => (
  <StyledItemBoxRoot ref={ref} {...rest} />
));

const StyledItemDetailsBoxRoot = styled(Box)(() => {
  return {
    display: "flex",
    height: "117px",
    gap: "16px",
    justifyContent: "space-between",
    padding: "16px",
  };
});

const StyledItemDetailsBox = forwardRef(({ ...rest }, ref) => (
  <StyledItemDetailsBoxRoot ref={ref} {...rest} />
));

const StyledItemImageBoxRoot = styled(Box)(({ ownerState }) => {
  const { bgImage } = ownerState;

  const backgroundImage = bgImage ? bgImage : "";

  return {
    width: "30%",
    maxHeight: "100%",
    gap: "10px",
    borderRadius: "4px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
});

const StyledItemImageBox = forwardRef(({ bgImage, ...rest }, ref) => (
  <StyledItemImageBoxRoot ref={ref} ownerState={{ bgImage }} {...rest} />
));

StyledItemBox.displayName = "StyledItemBox";
StyledItemDetailsBox.displayName = "StyledItemDetailsBox";
StyledItemImageBox.displayName = "StyledItemImageBox";
StyledItemImageBox.propTypes = { bgImage: PropType.string };

export { StyledItemBox, StyledItemDetailsBox, StyledItemImageBox };
