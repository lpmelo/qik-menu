import { InputAdornment, TextField } from "@mui/material";
import PropType from "prop-types";

const IconTextField = ({ inputIcon, inputIconPosition, ...rest }) => {
  return (
    <TextField
      InputProps={
        inputIcon && {
          startAdornment: (
            <InputAdornment
              position={inputIconPosition ? inputIconPosition : "start"}
            >
              {inputIcon}
            </InputAdornment>
          ),
        }
      }
      {...rest}
    />
  );
};

IconTextField.propTypes = {
  inputIcon: PropType.element,
  inputIconPosition: PropType.oneOf(["start", "end"]),
};

export { IconTextField };
