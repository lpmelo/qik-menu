import { useState } from "react";
import PropType from "prop-types";
import { Button, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import AdditionalItem from "../AdditionalItem";
import DefaultDialog from "../../../../components/Dialog";
import {
  StyledAddButtonBox,
  StyledAdditionalContent,
  StyledAdditionalHeader,
  StyledAdditionalsBox,
  StyledBoxModalContent,
  StyledButtonsBox,
  StyledCounterBox,
  StyledImageBox,
  StyledItemDetailsBox,
  StyledTitleBox,
  StyledTypography,
  dialogContentStyle,
} from "./style";
import { formatToBRL } from "../../../../util/util";

const ItemModal = ({ open, onClose, selectedItem, bgColor, primaryColor }) => {
  const [counter, setCounter] = useState(1);

  const returnItemImagePath = (item) => {
    if (item?.images?.length) {
      return item?.images[0].image;
    }
    return "src/assets/images/menu/no-image.jpg";
  };

  const handleCloseModal = () => {
    setCounter(1);
    onClose();
  };

  const handleClickRemove = () => {
    if (counter > 1) {
      setCounter((previous) => previous - 1);
    }
  };

  const handleClickAdd = () => {
    setCounter((previous) => previous + 1);
  };

  return (
    <DefaultDialog
      open={open}
      onClose={handleCloseModal}
      dialogContentProps={{
        sx: dialogContentStyle,
      }}
      closeIconButton
      closeIconColor={{ primary: primaryColor, background: bgColor }}
    >
      <StyledBoxModalContent bgColor={bgColor}>
        <StyledImageBox bgImage={returnItemImagePath(selectedItem)} />
        <StyledItemDetailsBox bgColor={bgColor}>
          <StyledTitleBox>
            <StyledTypography title>{selectedItem?.name}</StyledTypography>
            <StyledTypography lightColor>
              {selectedItem?.description}
            </StyledTypography>
          </StyledTitleBox>
          <StyledAdditionalsBox>
            <StyledAdditionalHeader>
              <StyledTypography title lightColor>
                Escolha um adicional:
              </StyledTypography>
              <StyledTypography lightColor>
                Selecione ao menos uma opção.
              </StyledTypography>
            </StyledAdditionalHeader>
            <StyledAdditionalContent bgColor={bgColor}>
              <AdditionalItem
                additionTitle={"Padrão"}
                additionValue={selectedItem?.price}
                primaryColor={primaryColor}
                radioProps={{ defaultChecked: true }}
              />
            </StyledAdditionalContent>
          </StyledAdditionalsBox>
        </StyledItemDetailsBox>
        <StyledButtonsBox>
          <StyledCounterBox primaryColor={primaryColor}>
            <IconButton onClick={handleClickRemove}>
              <RemoveCircle />
            </IconButton>
            <StyledTypography title mr={2} ml={2}>
              {counter}
            </StyledTypography>
            <IconButton onClick={handleClickAdd}>
              <AddCircle />
            </IconButton>
          </StyledCounterBox>
          <StyledAddButtonBox primaryColor={primaryColor}>
            <Button variant="outlined">{`Adicionar ao pedido - ${formatToBRL(
              selectedItem?.price * counter
            )}`}</Button>
          </StyledAddButtonBox>
        </StyledButtonsBox>
      </StyledBoxModalContent>
    </DefaultDialog>
  );
};

ItemModal.propTypes = {
  open: PropType.bool,
  onClose: PropType.func,
  selectedItem: PropType.object,
  bgColor: PropType.string,
  primaryColor: PropType.string,
};

export default ItemModal;
