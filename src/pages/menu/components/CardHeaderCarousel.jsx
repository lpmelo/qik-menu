import { useState } from "react";
import PropType from "prop-types";
import {
  StyledAvatar,
  StyledCardHeader,
  StyledItemContainer,
  StyledTypography,
} from "./style";
import { useSelector } from "react-redux";

const CardHeaderCarousel = ({ sections }) => {
    const {primaryColour} = useSelector((state)=> state.webSettings);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickItemContainer = (id) => {
    setSelectedItem(id);
  };

  const verifyIfItemIsSelected = (id) => {
    if (selectedItem) {
      if (selectedItem === id) {
        return true;
      }
    }
    return false;
  };

  return (
    <StyledCardHeader>
      {sections?.length ? (
        sections.map((section) => {
          return (
            <StyledItemContainer
              onClick={() => handleClickItemContainer(section?.id)}
              selected={verifyIfItemIsSelected(section?.id)}
              primaryColor={primaryColour}
              key={section?.id}
            >
              <StyledAvatar
                bgImage={section?.images[0]?.image}
                primaryColor={primaryColour}
                selected={verifyIfItemIsSelected(section?.id)}
              />
              <StyledTypography primaryColor={primaryColour} selected={verifyIfItemIsSelected(section?.id)}>
                {section?.name}
              </StyledTypography>
            </StyledItemContainer>
          );
        })
      ) : (
        <></>
      )}
    </StyledCardHeader>
  );
};

CardHeaderCarousel.propTypes = {
  sections: PropType.array,
};

export default CardHeaderCarousel;
