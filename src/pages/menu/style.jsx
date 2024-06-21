import { forwardRef } from "react";
import PropType from "prop-types";
import { Box, Container, Grid, styled } from "@mui/material";
import { IconTextField } from "../../components/Fields";

const StyledScreenContainerRoot = styled(Grid)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { bgColor } = ownerState;

  const bgColorValue = bgColor ? bgColor : palette.background.default;

  return {
    height: "100%",
    backgroundColor: bgColorValue,
  };
});

const StyledContentContainerRoot = styled(Container)(() => ({
  height: "calc(100% - 202px)",
  paddingBottom: "5px",
}));

const StyledSearchBoxRoot = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "56px",
  padding: "1px 0px",
  gap: "16px",
}));

const StyledIconTextFieldRoot = styled(IconTextField)(
  ({ theme, ownerState }) => {
    const { palette } = theme;
    const { primaryColor } = ownerState;

    const primaryColorValue = primaryColor
      ? primaryColor
      : palette.primary.main;

    return {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        maxHeight: "2.75rem !important",
        borderRadius: "8px",
        "&:hover fieldset": {
          borderColor: primaryColorValue,
        },
        "&.Mui-focused fieldset": {
          borderColor: primaryColorValue,
        },
      },
    };
  }
);

const StyledMenuContentContainerRoot = styled(Grid)(() => ({
  height: "calc(100% - 76px)",
  backgroundColor: "#F8F9FA",
  boxShadow: "0px 0px 2px #00000015 !important",
  maxWidth: "100% !important",
  margin: "0px !important",
  paddingRight: "24px",
}));

const StyledScreenContainer = forwardRef(({ bgColor, ...rest }, ref) => (
  <StyledScreenContainerRoot ref={ref} ownerState={{ bgColor }} {...rest} />
));

const StyledContentContainer = forwardRef(({ ...rest }, ref) => (
  <StyledContentContainerRoot ref={ref} {...rest} />
));

const StyledSearchBox = forwardRef(({ ...rest }, ref) => (
  <StyledSearchBoxRoot ref={ref} {...rest} />
));

const StyledIconTextField = forwardRef(({ primaryColor, ...rest }, ref) => (
  <StyledIconTextFieldRoot ref={ref} ownerState={{ primaryColor }} {...rest} />
));

const StyledMenuContentContainer = forwardRef(({ ...rest }, ref) => (
  <StyledMenuContentContainerRoot ref={ref} {...rest} />
));

StyledScreenContainer.displayName = "StyledScreenContainer";

StyledScreenContainer.propTypes = {
  bgColor: PropType.string,
};

StyledContentContainer.displayName = "StyledContentContainer";

StyledContentContainer.propTypes = {
  container: PropType.bool,
  item: PropType.bool,
};

StyledSearchBox.displayName = "StyledSearchBox";

StyledIconTextField.displayName = "StyledIconTextField";

StyledIconTextField.propTypes = {
  primaryColor: PropType.string,
  inputIcon: PropType.object,
};

StyledMenuContentContainer.displayName = "StyledMenuContentContainer";

StyledMenuContentContainer.propTypes = {
  container: PropType.bool,
  item: PropType.bool,
};

export {
  StyledScreenContainer,
  StyledContentContainer,
  StyledSearchBox,
  StyledIconTextField,
  StyledMenuContentContainer,
};
