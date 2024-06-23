import { Dialog, styled } from "@mui/material";

const StyledDialog = styled(Dialog)(({ theme, ownerState }) => {
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

const iconButtonStyle = (btnColor) => {
  const color = btnColor?.primary;
  const background = btnColor?.background;

  return {
    zIndex: "1",
    position: "absolute",
    right: 15,
    top: 15,
    width: "28px",
    height: "28px",
    color: (theme) => (color ? color : theme.palette.primary.main),
    backgroundColor: background ? background : "unset",
    "&:hover": {
      backgroundColor: background ? background : "unset",
    },
  };
};

export { StyledDialog, iconButtonStyle };
