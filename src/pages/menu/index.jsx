import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useGetAllMenusQuery } from "../../features/challengeApi/challengeApi";
import AppBar from "../../components/AppBar";
import {
  StyledScreenContainer,
  StyledContentContainer,
  StyledIconTextField,
  StyledSearchBox,
  StyledMenuContentContainer,
} from "./style";
import CardHeaderCarousel from "./components/CardHeaderCarousel";

const Menu = () => {
  const { backgroundColour, primaryColour } = useSelector(
    (state) => state.webSettings
  );

  const { data } = useGetAllMenusQuery();

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
          <Grid item xs={8}>
            <Card>
              <CardHeaderCarousel sections={data?.sections} />
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                title={
                  <Typography
                    fontFamily={"Roboto"}
                    fontSize="24px"
                    color="#464646"
                    fontWeight={500}
                  >
                    Carrinho
                  </Typography>
                }
                sx={{ backgroundColor: "#F8F9FA" }}
              />
              <CardContent>Seu carrinho está vazio</CardContent>
            </Card>
          </Grid>
        </StyledMenuContentContainer>
      </StyledContentContainer>
    </StyledScreenContainer>
  );
};

export default Menu;
