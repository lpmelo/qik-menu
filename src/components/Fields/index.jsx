import { InputAdornment, TextField } from "@mui/material";
import PropType from "prop-types";

const IconTextField = (props) => {
  return (
    <TextField
      InputProps={
        props?.inputIcon && {
          startAdornment: (
            <InputAdornment
              position={
                props?.inputIconPosition ? props?.inputIconPosition : "start"
              }
            >
              {props?.inputIcon}
            </InputAdornment>
          ),
        }
      }
      {...props}
    />
  );
};

IconTextField.propTypes = {
  inputIcon: PropType.object,
  inputIconPosition: PropType.oneOf(["start", "end"]),
};

export { IconTextField };
