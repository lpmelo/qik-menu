import { useSelector } from "react-redux";
import { StyledBox, StyledHeader } from "./style";
import { useIsMobile } from "../../hooks/useIsMobile/useIsMobile";
import AppBarButtons from "./AppBarButtons";

const AppBar = () => {
  const { navBackgroundColour, bannerImage } = useSelector(
    (state) => state.webSettings
  );
  const { isMobile } = useIsMobile();

  return (
    <>
      <StyledBox bgColor={navBackgroundColour}>
        {isMobile ? <></> : <AppBarButtons />}
      </StyledBox>

      <StyledHeader bannerImage={bannerImage} bgColor={navBackgroundColour} />
    </>
  );
};

export default AppBar;
