import PropType from "prop-types";
import { Box, styled } from "@mui/material";

const StyledBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const webSettings = ownerState?.webSettings;

  const scrollBarColor = webSettings?.primaryColour
    ? webSettings?.primaryColour
    : palette.primary.main;

  return {
    width: "100%",
    height: "100%",
    "& *": {
      "&::-webkit-scrollbar": {
        width: "3px",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: `${scrollBarColor}`,
        borderRadius: "8px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: `${scrollBarColor}90`,
      },
    },
  };
});

StyledBoxRoot.displayName = "StyledBoxRoot";

StyledBoxRoot.propTypes = {
  ownerState: PropType.object,
};

export { StyledBoxRoot };
