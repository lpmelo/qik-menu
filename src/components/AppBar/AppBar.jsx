import { useSelector } from "react-redux";
// import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import StyledBox from "./components/StyledBox/StyledBox";
import StyledHeader from "./components/StyledHeader/StyledHeader";

const AppBar = () => {
  // const { isMobile } = useIsMobile();
  const { navBackgroundColour, bannerImage } = useSelector(
    (state) => state.webSettings
  );

  return (
    <>
      <StyledBox bgColor={navBackgroundColour} />
      <StyledHeader bannerImage={bannerImage} bgColor={navBackgroundColour} />
    </>
  );
};

export default AppBar;
