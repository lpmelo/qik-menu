import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import CardHeaderCarousel from "../CardHeaderCarousel/index";
import DefaultAccordion from "../../../../components/Accordion";
import MenuItems from "../MenuItems";
import { StyledCard, StyledContentBox } from "./style";

const CardItems = ({ data, isLoading, onClickItem }) => {
  const returnItemsAccordions = () => {
    if (data?.sections?.length) {
      return data?.sections.map((section) => (
        <DefaultAccordion
          key={section.id}
          summaryContent={
            <Typography
              fontSize={"24px"}
              fontFamily={"Roboto"}
              fontWeight={500}
            >
              {section.name}
            </Typography>
          }
          detailsContent={
            <MenuItems menuItems={section.items} onClickItem={onClickItem} />
          }
        />
      ));
    }
  };

  return (
    <StyledCard>
      <CardHeaderCarousel sections={data?.sections} isLoading={isLoading} />
      <StyledContentBox>
        {data ? returnItemsAccordions() : <></>}
      </StyledContentBox>
    </StyledCard>
  );
};

CardItems.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  onClickItem: PropTypes.func,
};

export default CardItems;
