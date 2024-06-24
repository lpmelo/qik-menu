import { useEffect } from "react";
import PropType from "prop-types";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { StyledDialog, iconButtonStyle } from "./style";
import { useSelector } from "react-redux";

const DefaultDialog = ({
  dialogProps,
  dialogTitleProps,
  dialogContentProps,
  dialogActionsProps,
  title,
  open,
  onOpen,
  onClose,
  closeIconButton,
  closeIconColor,
  closeIconProps,
  actionContent,
  fullScreen,
  children,
}) => {
  const webSettings = useSelector((state) => state.webSettings);

  useEffect(() => {
    if (open) {
      if (typeof onOpen === "function") {
        onOpen();
      }
    }
  }, [open]);

  return (
    <StyledDialog
      onClose={onClose}
      open={open}
      ownerState={{ webSettings }}
      fullScreen={fullScreen}
      {...dialogProps}
    >
      {title ? (
        <DialogTitle sx={{ m: 0, p: 2 }} {...dialogTitleProps}>
          {title}
        </DialogTitle>
      ) : (
        <></>
      )}
      {closeIconButton ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={iconButtonStyle(closeIconColor)}
          {...closeIconProps}
        >
          <Close />
        </IconButton>
      ) : (
        <></>
      )}

      <DialogContent dividers {...dialogContentProps}>
        {children}
      </DialogContent>
      {actionContent ? (
        <DialogActions {...dialogActionsProps}>{actionContent}</DialogActions>
      ) : (
        <></>
      )}
    </StyledDialog>
  );
};

DefaultDialog.propTypes = {
  dialogProps: PropType.object,
  dialogTitleProps: PropType.object,
  dialogContentProps: PropType.object,
  dialogActionsProps: PropType.object,
  title: PropType.string,
  open: PropType.bool,
  onOpen: PropType.func,
  onClose: PropType.func,
  closeIconButton: PropType.bool,
  closeIconColor: PropType.object,
  closeIconProps: PropType.object,
  actionContent: PropType.element,
  fullScreen: PropType.bool,
  children: PropType.element,
};

export default DefaultDialog;
