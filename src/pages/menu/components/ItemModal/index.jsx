import { useState } from "react";
import { useDispatch } from "react-redux";
import PropType from "prop-types";
import { Button, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { addItemOnBasket } from "../../../../features/menu/menuSlice";
import AdditionalItem from "../AdditionalItem";
import DefaultDialog from "../../../../components/Dialog";
import { formatToBRL } from "../../../../util/util";
import noImage from "../../../../assets/images/menu/no-image.jpg";

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

const ItemModal = ({
  open,
  openMobileBasket,
  onClose,
  selectedItem,
  bgColor,
  primaryColor,
  isMobile,
}) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const returnItemImagePath = (item) => {
    if (item?.images?.length) {
      return item?.images[0].image;
    }
    return noImage;
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

  const handleClickAddToBasket = () => {
    const basketItem = {
      id: selectedItem.id,
      name: selectedItem.name,
      quantity: counter,
      price: selectedItem.price * counter,
      unitPrice: selectedItem.price,
    };

    dispatch(addItemOnBasket(basketItem));
    handleCloseModal();
    if (isMobile) {
      openMobileBasket();
    }
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
      fullScreen={isMobile}
    >
      <StyledBoxModalContent bgColor={bgColor} isMobile={isMobile}>
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
            <IconButton onClick={handleClickRemove} disabled={counter === 1}>
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
            <Button
              variant="outlined"
              onClick={handleClickAddToBasket}
            >{`Adicionar ao pedido - ${formatToBRL(
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
  openMobileBasket: PropType.func,
  selectedItem: PropType.object,
  bgColor: PropType.string,
  primaryColor: PropType.string,
  isMobile: PropType.bool,
};

export default ItemModal;
