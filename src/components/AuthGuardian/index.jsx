import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropType from "prop-types";
import { useNavigate } from "react-router-dom";
import { defaultRoutes } from "../../routes/router";
import useCompanyApi from "../../features/company/companyApi";
import { saveCompanyData } from "../../features/company/companySlice";
import { saveWebSettings } from "../../features/webSettings/webSettingsSlice";
import Loader from "../Loader";

const AuthGuardian = (props) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.company);
  const navigate = useNavigate();
  const { getCompanyById } = useCompanyApi();

  const verifyCompanyData = async () => {
    const currentUrl = window.location.pathname;
    const currentUrlExists = defaultRoutes.find(
      (routeObj) => routeObj?.path === currentUrl
    );

    if (!id) {
      await getCompanyById("9").then((res) => {
        dispatch(saveCompanyData(res));
        dispatch(saveWebSettings(res));
      });

      if (!currentUrlExists) {
        navigate("/menu");
      }
    }
  };

  useEffect(() => {
    verifyCompanyData();
  }, []);

  return <>{id ? <>{props?.children}</> : <Loader />}</>;
};

AuthGuardian.propTypes = {
  children: PropType.element,
};

export default AuthGuardian;
