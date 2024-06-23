import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Typography, styled } from "@mui/material";

const dialogContentStyle = { p: "0px !important", border: "unset !important" };

const StyledBoxModalContentRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const backgroundColor = bgColor ? bgColor : palette.background.default;

  return {
    position: "relative",
    width: "480px",
    height: "720px",
    backgroundColor: backgroundColor,
  };
});

const StyledBoxModalContent = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledBoxModalContentRoot {...rest} ownerState={{ bgColor }} ref={ref} />
));

StyledBoxModalContent.displayName = "StyledBoxModalContent";

StyledBoxModalContent.propTypes = { bgColor: PropType.string };

const StyledImageBoxRoot = styled(Box)(({ ownerState }) => {
  const { bgImage } = ownerState;

  const backgroundImage = bgImage
    ? `url(${bgImage})`
    : "url(src/assets/images/menu/no-image.jpg)";

  return {
    height: "320px",
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
});

const StyledImageBox = forwardRef(({ bgImage, ...rest }, ref) => (
  <StyledImageBoxRoot {...rest} ownerState={{ bgImage }} ref={ref} />
));

StyledImageBox.displayName = "StyledImageBox";

StyledImageBox.propTypes = { bgImage: PropType.string };

const StyledItemDetailsBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const backgroundColor = bgColor
    ? bgColor
    : palette.palette.background.default;

  return {
    height: "calc(100% - 320px)",
    backgroundColor: backgroundColor,
  };
});

const StyledItemDetailsBox = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledItemDetailsBoxRoot {...rest} ownerState={{ bgColor }} ref={ref} />
));

StyledItemDetailsBox.displayName = "StyledItemDetailsBox";

StyledItemDetailsBox.propTypes = { bgColor: PropType.string };

const StyledTitleBoxRoot = styled(Box)(() => {
  return {
    display: "grid",
    height: "74px",
    maxHeight: "74px",
    gap: "8px",
    padding: "16px",
    fontFamily: "Roboto",
    overflowY: "auto",
  };
});

const StyledTitleBox = forwardRef(({ ...rest }, ref) => (
  <StyledTitleBoxRoot {...rest} ref={ref} />
));

StyledTitleBox.displayName = "StyledTitleBox";

const StyledTypographyRoot = styled(Typography)(({ ownerState }) => {
  const { lightColor, title } = ownerState;

  return {
    fontSize: title ? "24px" : "16px",
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

const StyledAdditionalsBoxRoot = styled(Box)(() => {
  return {
    height: "calc(100% - 149px)",
  };
});

const StyledAdditionalsBox = forwardRef(({ ...rest }, ref) => (
  <StyledAdditionalsBoxRoot ref={ref} {...rest} />
));

StyledAdditionalsBox.displayName = "StyledAdditionalsBox";

const StyledAdditionalHeaderRoot = styled(Box)(() => {
  return {
    height: "50px",
    backgroundColor: "#F8F9FA",
    padding: "16px 24px 16px 14px",
    "& .MuiTypography-root": {
      fontSize: "16px !important",
    },
  };
});

const StyledAdditionalHeader = forwardRef(({ ...rest }, ref) => (
  <StyledAdditionalHeaderRoot ref={ref} {...rest} />
));

StyledAdditionalHeader.displayName = "StyledAdditionalHeader";

const StyledAdditionalContentRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const backgroundColor = bgColor
    ? bgColor
    : palette.palette.background.default;

  return {
    height: "82px",
    maxHeight: "82px",
    overflowY: "auto",
    backgroundColor: backgroundColor,
  };
});

const StyledAdditionalContent = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledAdditionalContentRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

StyledAdditionalContent.displayName = "StyledAdditionalContent";

StyledAdditionalContent.propTypes = {
  bgColor: PropType.string,
};

const StyledButtonsBoxRoot = styled(Box)(() => {
  return {
    position: "absolute",
    height: "122px",
    width: "100%",
    bottom: "0px",
    display: "flex",
    flexWrap: "wrap",
  };
});

const StyledButtonsBox = forwardRef(({ ...rest }, ref) => (
  <StyledButtonsBoxRoot ref={ref} {...rest} />
));

StyledButtonsBox.displayName = "StyledButtonsBox";

const StyledCounterBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
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

const StyledAddButtonBoxRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primaryColor } = ownerState;

  return {
    width: "100%",
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

export {
  dialogContentStyle,
  StyledBoxModalContent,
  StyledImageBox,
  StyledItemDetailsBox,
  StyledTitleBox,
  StyledTypography,
  StyledAdditionalsBox,
  StyledAdditionalHeader,
  StyledAdditionalContent,
  StyledButtonsBox,
  StyledCounterBox,
  StyledAddButtonBox,
};
