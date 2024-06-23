import { forwardRef } from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import PropType from "prop-types";

const StyledCardHeaderRoot = styled(Container)(() => {
  return { display: "flex", padding: "20px 0px 24px 16px" };
});

const StyledCardHeader = forwardRef(({ ...rest }, ref) => (
  <StyledCardHeaderRoot ref={ref} {...rest} />
));

const StyledItemContainerRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { selected, primaryColor } = ownerState;
  const borderColor = primaryColor ? primaryColor : palette.primary.main;

  return {
    cursor: "pointer",
    width: "104px",
    height: "146px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    borderBottom: selected ? `2px solid ${borderColor}` : "unset",
  };
});

const StyledItemContainer = forwardRef(
  ({ selected, primaryColor, ...rest }, ref) => (
    <StyledItemContainerRoot
      ref={ref}
      ownerState={{ selected, primaryColor }}
      {...rest}
    />
  )
);

const StyledItemBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgImage, primaryColor, selected } = ownerState;
  const borderColor = primaryColor ? primaryColor : palette.primary.main;

  const backgroundImage = bgImage ? bgImage : "unset";

  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "82px",
    height: "82px",
    borderRadius: "50%",
    outline: selected ? `2px solid ${borderColor}` : "unset",
    border: "2px solid #ffffff",
  };
});

const StyledItemBox = forwardRef(
  ({ bgImage, primaryColor, selected, ...rest }, ref) => (
    <StyledItemBoxRoot
      ref={ref}
      ownerState={{ bgImage, primaryColor, selected }}
      {...rest}
    />
  )
);

const StyledTypographyRoot = styled(Typography)(({ ownerState }) => {
  const { selected } = ownerState;
  return {
    fontFamily: "Roboto",
    fontSize: "16px",
    textAlign: "center",
    lineHeight: "unset",
    flexGrow: 1,
    fontWeight: selected ? 600 : "unset",
  };
});

const StyledTypography = forwardRef(({ selected, ...rest }, ref) => (
  <StyledTypographyRoot ref={ref} ownerState={{ selected }} {...rest} />
));

StyledCardHeader.displayName = "StyledCardHeader";

StyledItemContainer.displayName = "StyledItemContainer";

StyledItemContainer.propTypes = {
  selected: PropType.bool,
  primaryColor: PropType.string,
};

StyledItemBox.displayName = "StyledItemBox";

StyledItemBox.propTypes = {
  bgImage: PropType.string,
  primaryColor: PropType.string,
  selected: PropType.bool,
};

StyledTypography.displayName = "StyledTypography";

StyledTypography.propTypes = {
  selected: PropType.bool,
};

export {
  StyledCardHeader,
  StyledItemContainer,
  StyledItemBox,
  StyledTypography,
};
