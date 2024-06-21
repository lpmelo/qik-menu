import PropTypes from "prop-types";
import { LoaderBox, LoaderCircle, LoaderSpinner } from "./style";

const Loader = (props) => {
  return (
    <LoaderBox bgColor={props?.containerBgColor}>
      {props?.typeLoader === "circle" ? (
        <>
          <LoaderCircle
            bgColor={props?.loaderBgColor}
            bgImage={props?.loaderBgImage}
          />
        </>
      ) : (
        <>
          <LoaderSpinner spinnerColor={props?.spinnerColor} />
        </>
      )}
    </LoaderBox>
  );
};

Loader.propTypes = {
  containerBgColor: PropTypes.string,
  typeLoader: PropTypes.oneOf(["spinner", "circle"]),
  loaderBgColor: PropTypes.string,
  loaderBgImage: PropTypes.string,
  spinnerColor: PropTypes.string,
};

export default Loader;
