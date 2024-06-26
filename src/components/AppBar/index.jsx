import { useSelector } from "react-redux";
import { useIsMobile } from "../../hooks/useIsMobile/useIsMobile";
import AppBarButtons from "./AppBarButtons";
import { StyledBox, StyledHeader, StyledAppBarContainer } from "./style";
import AppBarMobileButtons from "./AppBarMobileButtons";

const AppBar = () => {
  const { navBackgroundColour, bannerImage } = useSelector(
    (state) => state.webSettings
  );
  const { isMobile } = useIsMobile();

  return (
    <>
      <StyledAppBarContainer item xs={12}>
        <StyledBox bgColor={navBackgroundColour}>
          {isMobile ? <AppBarMobileButtons /> : <AppBarButtons />}
        </StyledBox>

        <StyledHeader bannerImage={bannerImage} bgColor={navBackgroundColour} />
      </StyledAppBarContainer>
    </>
  );
};

export default AppBar;
