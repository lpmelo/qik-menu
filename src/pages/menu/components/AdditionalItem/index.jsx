import PropType from "prop-types";
import { Box } from "@mui/material";
import { formatToBRL } from "../../../../util/util";
import {
  StyledAdditionalItemBox,
  StyledRadioButton,
  StyledTypography,
} from "./style";

const AdditionalItem = ({
  additionTitle,
  additionValue,
  primaryColor,
  radioProps,
}) => {
  return (
    <StyledAdditionalItemBox>
      <Box width={"90%"}>
        <StyledTypography title>{additionTitle}</StyledTypography>
        <StyledTypography lightColor>
          {formatToBRL(additionValue)}
        </StyledTypography>
      </Box>
      <Box width={"10%"}>
        <StyledRadioButton ownerState={{ primaryColor }} {...radioProps} />
      </Box>
    </StyledAdditionalItemBox>
  );
};

AdditionalItem.propTypes = {
  additionTitle: PropType.string,
  additionValue: PropType.oneOfType([PropType.string, PropType.number]),
  primaryColor: PropType.string,
  radioProps: PropType.object,
};

export default AdditionalItem;
