import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropType from "prop-types";
import {
  StyledItemBox,
  StyledContainerHeader,
  StyledItemContainer,
  StyledTypography,
} from "./style";

const CardHeaderCarousel = ({ sections }) => {
  const { primaryColour } = useSelector((state) => state.webSettings);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickItem = (id) => {
    setSelectedItem(id);
  };

  const selectFirstItem = () => {
    if (sections?.length) {
      handleClickItem(sections[0]?.id);
    }
  };

  const verifyIfItemIsSelected = (id) => {
    if (selectedItem) {
      if (selectedItem === id) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (sections?.length) {
      selectFirstItem();
    }
  }, [sections]);

  return (
    <StyledContainerHeader>
      {sections?.length ? (
        sections.map((section) => {
          return (
            <StyledItemContainer
              onClick={() => handleClickItem(section?.id)}
              selected={verifyIfItemIsSelected(section?.id)}
              primaryColor={primaryColour}
              key={section?.id}
            >
              <StyledItemBox
                bgImage={section?.images[0]?.image}
                primaryColor={primaryColour}
                selected={verifyIfItemIsSelected(section?.id)}
              />
              <StyledTypography selected={verifyIfItemIsSelected(section?.id)}>
                {section?.name}
              </StyledTypography>
            </StyledItemContainer>
          );
        })
      ) : (
        <></>
      )}
    </StyledContainerHeader>
  );
};

CardHeaderCarousel.propTypes = {
  sections: PropType.array,
};

export default CardHeaderCarousel;
