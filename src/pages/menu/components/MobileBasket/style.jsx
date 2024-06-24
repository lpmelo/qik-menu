import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Button, styled } from "@mui/material";

const StyledAddButtonBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    position: "fixed",
    width: "calc(100% - 48px)",
    bottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 24px",
    "& .MuiButton-root": {
      backgroundColor: primaryColor ? primaryColor : palette.primary.main,
      color: "#ffffff",
      width: "100%",
      borderColor: "unset",
    },
    "& .MuiButton-root:hover": {
      borderColor: "unset",
      backgroundColor: primaryColor ? primaryColor : palette.primary.main,
    },
  };
});

const StyledAddButtonBox = forwardRef(({ primaryColor, ...rest }, ref) => (
  <StyledAddButtonBoxRoot {...rest} ref={ref} ownerState={{ primaryColor }} />
));

StyledAddButtonBox.displayName = "StyledAddButtonBox";

StyledAddButtonBox.propTypes = {
  primaryColor: PropType.string,
};

const StyledButtonRoot = styled(Button)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    position: "fixed",
    backgroundColor: primaryColor ? primaryColor : palette.primary.main,
    color: "#ffffff",
    width: "calc(100% - 48px)",
    height:"40px",
    borderColor: "unset",
    bottom: "10px",
    right: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 24px",
    "&:hover": {
      borderColor: "unset",
      backgroundColor: primaryColor ? primaryColor : palette.primary.main,
    },
  };
});

const StyledButton = forwardRef(({ primaryColor, ...rest }, ref) => (
  <StyledButtonRoot {...rest} ref={ref} ownerState={{ primaryColor }} />
));

StyledButton.displayName = "StyledButton";

StyledButton.propTypes = {
  primaryColor: PropType.string,
};

export { StyledAddButtonBox, StyledButton };
