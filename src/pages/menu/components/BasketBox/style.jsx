import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Typography, styled } from "@mui/material";

const StyledBasketBox = styled(Box)(() => {});

const StyledBasketItem = styled(Box)(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    height: "50px",
    padding: "16px 24px 16px 14px",
    "& .MuiTypography-root": {
      fontSize: "16px !important",
    },
  };
});

const StyledBasketItemHeader = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

const StyledTotalBox = styled(Box)(() => ({
  backgroundColor: "#F8F9FA",
  display: "flex",
  justifyContent: "space-between",
  height: "50px",
  padding: "16px 24px 16px 14px",
  borderTop: "1px solid #00000020",
  "& .MuiTypography-root": {
    fontSize: "16px",
  },
}));

const StyledTypographyRoot = styled(Typography)(({ ownerState }) => {
  const { lightColor, title } = ownerState;

  return {
    fontWeight: title ? 700 : 400,
    color: lightColor ? "#464646" : "#121212",
  };
});

const StyledTypography = forwardRef(({ lightColor, title, ...rest }, ref) => (
  <StyledTypographyRoot
    ref={ref}
    ownerState={{ lightColor, title }}
    {...rest}
  />
));

StyledTypography.displayName = "StyledTypography";

StyledTypography.propTypes = {
  lightColor: PropType.bool,
  title: PropType.bool,
};

const StyledCounterBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    "& .MuiIconButton-root": {
      color: primaryColor ? primaryColor : palette.primary.main,
      width: "32px",
      height: "32px",
    },
  };
});

const StyledCounterBox = forwardRef(({ primaryColor, ...rest }, ref) => (
  <StyledCounterBoxRoot {...rest} ref={ref} ownerState={{ primaryColor }} />
));

StyledCounterBox.displayName = "StyledCounterBox";

StyledCounterBox.propTypes = {
  primaryColor: PropType.string,
};

export {
  StyledBasketBox,
  StyledBasketItem,
  StyledBasketItemHeader,
  StyledTypography,
  StyledCounterBox,
  StyledTotalBox,
};
