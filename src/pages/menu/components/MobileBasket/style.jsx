import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, styled } from "@mui/material";

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

export { StyledAddButtonBox };
