import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
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

const Menu = () => {
  const { backgroundColour, primaryColour } = useSelector(
    (state) => state.webSettings
  );

  const { data } = useGetAllMenusQuery();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickItem = (itemInfo) => {
    setSelectedItem(itemInfo);
    setOpen(true);
  };

  const handleCloseItemModal = () => {
    setOpen(false);
  };

  return (
    <StyledScreenContainer
      container
      alignItems="stretch"
      bgColor={backgroundColour}
    >
      <AppBar />
      <StyledContentContainer container item xs={12}>
        <StyledSearchBox item xs={12}>
          <StyledIconTextField
            placeholder="Procurar Itens"
            inputIcon={<Search />}
            primaryColor={primaryColour}
          />
        </StyledSearchBox>
        <StyledMenuContentContainer container item xs={12} spacing={3}>
          <Grid maxHeight={"100%"} pb={"24px"} item xs={8}>
            <CardItems data={data} onClickItem={handleClickItem} />
          </Grid>
          <Grid item xs={4}>
            <DefaultCard
              cardHeaderProps={{ sx: { backgroundColor: "#F8F9FA" } }}
              typographyProps={{ color: "#464646", fontSize: "24px" }}
              title={"Carrinho"}
            >
              <Typography
                fontFamily="Roboto"
                fontWeight={400}
                fontSize="16px"
                color="#464646"
              >
                Seu carrinho está vazio
              </Typography>
            </DefaultCard>
          </Grid>
        </StyledMenuContentContainer>
      </StyledContentContainer>
      <ItemModal
        open={open}
        onClose={handleCloseItemModal}
        selectedItem={selectedItem}
        bgColor={backgroundColour}
        primaryColor={primaryColour}
      />
    </StyledScreenContainer>
  );
};

export default Menu;
