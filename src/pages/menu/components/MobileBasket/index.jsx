import { useDispatch, useSelector } from "react-redux";
import PropType from "prop-types";
import { Button } from "@mui/material";
import DefaultDialog from "../../../../components/Dialog";
import { StyledAddButtonBox } from "./style";
import BasketBox from "../BasketBox";
import { resetBasket } from "../../../../features/menu/menuSlice";

const MobileBasket = ({
  open,
  onClickOpenBasket,
  onClose,
  primaryColor,
  bgColor,
}) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.menu);

  const returnButtonLabel = () => {
    const itemsLabel = basket?.items?.length > 1 ? "itens" : "item";
    return `Seu carrinho - ${basket?.items?.length} ${itemsLabel}`;
  };

  const handleClickCheckout = () => {
    onClose();
    dispatch(resetBasket());
  };

  return (
    <>
      {basket?.items?.length ? (
        <StyledAddButtonBox primaryColor={primaryColor}>
          <Button variant="outlined" onClick={onClickOpenBasket}>
            {returnButtonLabel()}
          </Button>
        </StyledAddButtonBox>
      ) : (
        <></>
      )}

      <DefaultDialog
        open={open}
        onClose={onClose}
        closeIconButton
        closeIconColor={{ primary: primaryColor, background: bgColor }}
        dialogContentProps={{ sx: { padding: "0px !important" } }}
        title={"Carrinho"}
        fullScreen
      >
        <BasketBox basket={basket} primaryColor={primaryColor} />
        {basket?.items?.length ? (
          <StyledAddButtonBox primaryColor={primaryColor}>
            <Button variant="outlined" onClick={handleClickCheckout}>
              Finalizar compra
            </Button>
          </StyledAddButtonBox>
        ) : (
          <></>
        )}
      </DefaultDialog>
    </>
  );
};

MobileBasket.propTypes = {
  open: PropType.bool,
  onClickOpenBasket: PropType.func,
  onClose: PropType.func,
  bgColor: PropType.string,
  primaryColor: PropType.string,
};

export default MobileBasket;
