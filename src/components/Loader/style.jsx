import { forwardRef } from "react";
import PropType from "prop-types";
import { Avatar, Box, CircularProgress, styled } from "@mui/material";

const LoaderBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const bgValue = bgColor ? bgColor : palette.background.default;

  return {
    background: bgValue,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const LoaderCircleRoot = styled(Avatar)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor, bgImage } = ownerState;

  const bgValue = bgColor ? bgColor : palette.background.default;
  const bgImageValue = bgImage ? bgImage : "unset";

  return {
    background: bgValue,
    backgroundImage: bgImageValue,
    height: "52px",
    width: "100%",
  };
});

const LoaderSpinnerRoot = styled(CircularProgress)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { spinnerColor } = ownerState;

  return {
    color: spinnerColor ? spinnerColor : palette.primary.main,
  };
});

const LoaderBox = forwardRef(({ bgColor, ...rest }, ref) => (
  <LoaderBoxRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

const LoaderCircle = forwardRef(({ bgColor, bgImage, ...rest }, ref) => (
  <LoaderCircleRoot ref={ref} ownerState={{ bgColor, bgImage }} {...rest} />
));

const LoaderSpinner = forwardRef(({ spinnerColor, ...rest }, ref) => (
  <LoaderSpinnerRoot ref={ref} ownerState={{ spinnerColor }} {...rest} />
));

LoaderBox.displayName = "LoaderBox";

LoaderBox.propTypes = {
  bgColor: PropType.string,
};

LoaderCircle.displayName = "LoaderCircle";

LoaderCircle.propTypes = {
  bgColor: PropType.string,
  bgImage: PropType.string,
};

LoaderSpinner.displayName = "LoaderSpinner";

LoaderSpinner.propTypes = {
  spinnerColor: PropType.string,
};
export { LoaderBox, LoaderCircle, LoaderSpinner };
