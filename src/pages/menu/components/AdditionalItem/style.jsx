import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Radio, Typography, styled } from "@mui/material";

const StyledAdditionalItemBox = styled(Box)(() => {
  return {
    display: "flex",
    height: "50px",
    padding: "16px 24px 16px 14px",
    "& .MuiTypography-root": {
      fontSize: "16px !important",
    },
  };
});

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

const StyledRadioButton = styled(Radio)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    color: primaryColor ? primaryColor : palette.primary.main,
    "&.Mui-checked": { color: primaryColor ? primaryColor : palette.primary.main },
  };
});

export { StyledAdditionalItemBox, StyledTypography, StyledRadioButton };
