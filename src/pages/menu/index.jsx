import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useGetAllMenusQuery } from "../../features/challengeApi/challengeApi";
import AppBar from "../../components/AppBar";
import CardItems from "./components/CardItems";
import DefaultCard from "../../components/Card";
import ItemModal from "./components/ItemModal";
import {
  StyledScreenContainer,
  StyledContentContainer,
  StyledIconTextField,
  StyledSearchBox,
  StyledMenuContentContainer,
} from "./style";
import BasketBox from "./components/BasketBox";
import { useIsMobile } from "../../hooks/useIsMobile/useIsMobile";
import MobileBasket from "./components/MobileBasket";

const Menu = () => {
  const { backgroundColour, primaryColour } = useSelector(
    (state) => state.webSettings
  );

  const { basket } = useSelector((state) => state.menu);

  const { data } = useGetAllMenusQuery();

  const [open, setOpen] = useState(false);
  const [openMobileBasket, setOpenMobileBasket] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredData, setFilteredData] = useState({});
  const [filterValue, setFilterValue] = useState("");

  const { isMobile } = useIsMobile();

  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value);
    let newFilteredSections = data?.sections.filter((section) => {
      if (e.target.value) {
        if (section?.items?.length) {
          const findedMenuItem = section.items.find((menuItem) =>
            menuItem.name.toLowerCase().includes(e.target.value.toLowerCase())
          );

          if (findedMenuItem) {
            return true;
          }
        }
        return false;
      }
      return true;
    });

    let formattedSections = newFilteredSections.map((section) => {
      let newSection = section;
      const newItemsArray = newSection.items.filter((menuItem) =>
        menuItem.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      newSection = {
        ...section,
        items: newItemsArray,
      };

      return newSection;
    });

    const newFilteredData = { ...data, sections: formattedSections };

    setFilteredData(newFilteredData);
  };

  const handleClickItem = (itemInfo) => {
    setSelectedItem(itemInfo);
    setOpen(true);
  };

  const handleCloseItemModal = () => {
    setOpen(false);
  };

  const handleClickBasketButton = () => {
    setOpenMobileBasket(true);
  };

  const handleCloseMobileBasket = () => {
    setOpenMobileBasket(false);
  };

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <StyledScreenContainer
      container
      alignItems="stretch"
      bgColor={backgroundColour}
    >
      <AppBar />
      <StyledContentContainer isMobile={isMobile}>
        {isMobile ? (
          <>
            <StyledSearchBox isMobile={isMobile}>
              <StyledIconTextField
                placeholder="Procurar Itens"
                inputIcon={<Search />}
                primaryColor={primaryColour}
                value={filterValue}
                onChange={handleChangeFilter}
              />
            </StyledSearchBox>
            <Box pt={"16px"}>
              <CardItems
                data={filteredData}
                onClickItem={handleClickItem}
                primaryColor={primaryColour}
              />
            </Box>
            <MobileBasket
              open={openMobileBasket}
              onClickOpenBasket={handleClickBasketButton}
              onClose={handleCloseMobileBasket}
              bgColor={backgroundColour}
              primaryColor={primaryColour}
            />
          </>
        ) : (
          <>
            <StyledSearchBox>
              <StyledIconTextField
                placeholder="Procurar Itens"
                inputIcon={<Search />}
                primaryColor={primaryColour}
                value={filterValue}
                onChange={handleChangeFilter}
              />
            </StyledSearchBox>
            <StyledMenuContentContainer container item xs={12} spacing={3}>
              <Grid maxHeight={"100%"} pb={"24px"} item xs={8}>
                <CardItems
                  data={filteredData}
                  onClickItem={handleClickItem}
                  primaryColor={primaryColour}
                />
              </Grid>
              <Grid item xs={4}>
                <DefaultCard
                  cardHeaderProps={{ sx: { backgroundColor: "#F8F9FA" } }}
                  cardContentProps={
                    basket?.items?.length ? { sx: { p: "0px !important" } } : {}
                  }
                  typographyProps={{ color: "#464646", fontSize: "24px" }}
                  title={"Carrinho"}
                >
                  {basket?.items?.length ? (
                    <BasketBox basket={basket} primaryColor={primaryColour} />
                  ) : (
                    <Typography
                      fontFamily="Roboto"
                      fontWeight={400}
                      fontSize="16px"
                      color="#464646"
                    >
                      Seu carrinho está vazio
                    </Typography>
                  )}
                </DefaultCard>
              </Grid>
            </StyledMenuContentContainer>
          </>
        )}
      </StyledContentContainer>
      <ItemModal
        open={open}
        openMobileBasket={handleClickBasketButton}
        onClose={handleCloseItemModal}
        selectedItem={selectedItem}
        bgColor={backgroundColour}
        primaryColor={primaryColour}
        isMobile={isMobile}
      />
    </StyledScreenContainer>
  );
};

export default Menu;
