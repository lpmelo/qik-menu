import PropType from "prop-types";
import {
  StyledItemBox,
  StyledItemDetailsBox,
  StyledItemImageBox,
  StyledItemInfoBox,
  StyledTypography,
} from "./style";
import { formatToBRL } from "../../../../util/util";

const MenuItems = ({ menuItems, onClickItem }) => {
  const returnItemImagePath = (item) => {
    if (item?.images?.length) {
      return item?.images[0].image;
    }
    return "src/assets/images/menu/no-image.jpg";
  };

  return (
    <>
      {menuItems?.length ? (
        menuItems.map((item) => (
          <StyledItemBox onClick={() => onClickItem(item)} key={item?.id}>
            <StyledItemDetailsBox>
              <StyledItemInfoBox>
                <StyledTypography fontWeight={500}>
                  {item?.name}
                </StyledTypography>
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
