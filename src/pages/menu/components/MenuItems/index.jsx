import PropType from "prop-types";
import {
  StyledItemBox,
  StyledItemDetailsBox,
  StyledItemImageBox,
} from "./style";
import { Box } from "@mui/material";

const MenuItems = ({ menuItems }) => {
  const returnItemImagePath = (item) => {
    if (item?.images?.length) {
      return item?.images[0].image;
    }
    return "";
  };

  return (
    <>
      {menuItems?.length ? (
        menuItems.map((item) => (
          <StyledItemBox key={item?.id}>
            <StyledItemDetailsBox>
              <Box></Box>
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
};

export default MenuItems;
