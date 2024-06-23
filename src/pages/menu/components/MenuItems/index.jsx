import { useSelector } from "react-redux";
import PropType from "prop-types";
import { formatToBRL } from "../../../../util/util";
import {
  StyledBadge,
  StyledItemBox,
  StyledItemDetailsBox,
  StyledItemImageBox,
  StyledItemInfoBox,
  StyledItemInfoHeader,
  StyledTypography,
} from "./style";

const MenuItems = ({ menuItems, onClickItem }) => {
  const { primaryColour } = useSelector((state) => state.webSettings);
  const { basket } = useSelector((state) => state.menu);

  const returnItemImagePath = (item) => {
    if (item?.images?.length) {
      return item?.images[0].image;
    }
    return "src/assets/images/menu/no-image.jpg";
  };

  const verifyBadge = (itemId) => {
    const arrayItems = basket?.items.filter((item) => item?.idItem === itemId);
    if (arrayItems?.length) {
      let badgeTotal = 0;

      arrayItems?.map((basketItem) => {
        badgeTotal += basketItem?.quantity;
      });

      return (
        <StyledBadge primaryColor={primaryColour}>{badgeTotal}</StyledBadge>
      );
    }
    return <></>;
  };
  return (
    <>
      {menuItems?.length ? (
        menuItems.map((item) => (
          <StyledItemBox onClick={() => onClickItem(item)} key={item?.id}>
            <StyledItemDetailsBox>
              <StyledItemInfoBox>
                <StyledItemInfoHeader>
                  {verifyBadge(item?.id)}
                  <StyledTypography fontWeight={500}>
                    {item?.name}
                  </StyledTypography>
                </StyledItemInfoHeader>
                <StyledTypography lightColor fontWeight={300}>
                  {item?.description}
                </StyledTypography>
                <StyledTypography lightColor fontWeight={500}>
                  {formatToBRL(item?.price)}
                </StyledTypography>
              </StyledItemInfoBox>
              <StyledItemImageBox bgImage={returnItemImagePath(item)} />
            </StyledItemDetailsBox>
          </StyledItemBox>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

MenuItems.propTypes = {
  menuItems: PropType.array,
  onClickItem: PropType.func,
};

export default MenuItems;
