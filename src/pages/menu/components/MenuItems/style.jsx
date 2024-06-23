import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Typography, styled } from "@mui/material";

const StyledItemBoxRoot = styled(Box)(() => {
  return {
    width: "100%",
  };
});

const StyledItemBox = forwardRef(({ ...rest }, ref) => (
  <StyledItemBoxRoot ref={ref} {...rest} />
));

StyledItemBox.displayName = "StyledItemBox";

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

StyledItemDetailsBox.displayName = "StyledItemDetailsBox";

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

StyledItemImageBox.displayName = "StyledItemImageBox";
StyledItemImageBox.propTypes = { bgImage: PropType.string };

const StyledItemInfoBoxRoot = styled(Box)(() => {
  return {
    width: "70%",
    fontFamily: "Roboto",
    fontSize: "16px",
  };
});

const StyledItemInfoBox = forwardRef(({ ...rest }, ref) => (
  <StyledItemInfoBoxRoot ref={ref} {...rest} />
));

StyledItemInfoBox.displayName = "StyledItemInfoBox";

const StyledTypographyRoot = styled(Typography)(({ ownerState }) => {
  const { lightColor } = ownerState;

  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "16px",
    maxWidth: "calc(100% - 38px)",
    color: lightColor ? "#464646" : "#121212",
  };
});

const StyledTypography = forwardRef(({ lightColor, ...rest }, ref) => (
  <StyledTypographyRoot ref={ref} ownerState={{ lightColor }} {...rest} />
));

StyledTypography.displayName = "StyledTypography";

StyledTypography.propTypes = {
  lightColor: PropType.bool,
};

export {
  StyledItemBox,
  StyledItemDetailsBox,
  StyledItemImageBox,
  StyledItemInfoBox,
  StyledTypography,
};
