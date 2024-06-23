import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Typography, styled } from "@mui/material";

const StyledItemBoxRoot = styled(Box)(() => {
  return {
    width: "100%",
    cursor: "pointer",
    "&:hover": { transform: "scale(1.02)", transition: "transform 300ms" },
    "&:active": { transform: "scale(1)", transition: "transform 300ms" },
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

const StyledBadgeRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    width: "18px",
    height: "18px",
    color: "#ffffff",
    textAlign: "center",
    borderRadius: "5px",
    fontFamily: "Roboto",
    fontSize: "14px",
    marginRight: "4px",
    backgroundColor: primaryColor ? primaryColor : palette.primary.main,
  };
});

const StyledBadge = forwardRef(({ primaryColor, ...rest }, ref) => (
  <StyledBadgeRoot ref={ref} ownerState={{ primaryColor }} {...rest} />
));

StyledBadge.displayName = "StyledBadge";

StyledBadge.propTypes = {
  primaryColor: PropType.string,
};

const StyledItemInfoHeader = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
}));

export {
  StyledItemBox,
  StyledItemDetailsBox,
  StyledItemImageBox,
  StyledItemInfoBox,
  StyledTypography,
  StyledBadge,
  StyledItemInfoHeader,
};
