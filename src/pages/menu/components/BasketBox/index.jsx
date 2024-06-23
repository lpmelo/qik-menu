import { useDispatch } from "react-redux";
import PropType from "prop-types";
import { IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import {
  incrementItemOnBasket,
  removeItemFromBasket,
} from "../../../../features/menu/menuSlice";
import { formatToBRL } from "../../../../util/util";
import {
  StyledBasketBox,
  StyledBasketItem,
  StyledBasketItemHeader,
  StyledTypography,
  StyledCounterBox,
  StyledTotalBox,
} from "./style";

const BasketBox = ({ basket, primaryColor }) => {
  const dispatch = useDispatch();

  const handleClickRemove = (itemId) => {
    dispatch(removeItemFromBasket(itemId));
  };

  const handleClickIncrement = (itemId) => {
    dispatch(incrementItemOnBasket(itemId));
  };

  return (
    <StyledBasketBox>
      {basket?.items.map((item) => (
        <>
          <StyledBasketItem key={item?.id}>
            <StyledBasketItemHeader>
              <StyledTypography>{item?.name}</StyledTypography>

              <StyledTypography title>
                {formatToBRL(item?.price)}
              </StyledTypography>
            </StyledBasketItemHeader>
            <StyledCounterBox primaryColor={primaryColor}>
              <IconButton onClick={() => handleClickRemove(item?.id)}>
                <RemoveCircle />
              </IconButton>
              <StyledTypography title mr={2} ml={2}>
                {item?.quantity}
              </StyledTypography>
              <IconButton onClick={() => handleClickIncrement(item?.id)}>
                <AddCircle />
              </IconButton>
            </StyledCounterBox>
          </StyledBasketItem>
        </>
      ))}
      <StyledTotalBox>
        <StyledTypography mt={3}>Sub total</StyledTypography>
        <StyledTypography title mt={3}>
          {formatToBRL(basket?.subTotal)}
        </StyledTypography>
      </StyledTotalBox>
      <StyledTotalBox>
        <StyledTypography
          fontWeight={"300 !important"}
          fontSize={"24px !important"}
        >
          Total
        </StyledTypography>
        <StyledTypography title fontSize={"24px !important"}>
          {formatToBRL(basket?.total)}
        </StyledTypography>
      </StyledTotalBox>
    </StyledBasketBox>
  );
};

BasketBox.propTypes = {
  basket: PropType.object,
  primaryColor: PropType.string,
};

export default BasketBox;
