import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropType from "prop-types";
import { useNavigate } from "react-router-dom";
import { defaultRoutes } from "../../routes/router";
import { saveCompanyData } from "../../features/company/companySlice";
import { saveWebSettings } from "../../features/webSettings/webSettingsSlice";
import Loader from "../Loader";
import { useGetCompanyByIdQuery } from "../../features/challengeApi/challengeApi";

const AuthGuardian = (props) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.company);
  const navigate = useNavigate();
  const { data, isLoading } = useGetCompanyByIdQuery("9");

  const verifyCompanyData = async (res) => {
    const currentUrl = window.location.pathname;
    const currentUrlExists = defaultRoutes.find(
      (routeObj) => routeObj?.path === currentUrl
    );

    if (!id) {
      dispatch(saveCompanyData(res));
      dispatch(saveWebSettings(res));

      if (!currentUrlExists) {
        navigate("/home");
      }
    }
  };

  useEffect(() => {
    if (data) {
      verifyCompanyData(data);
    }
  }, [data]);

  return <>{isLoading ? <Loader /> : <>{props?.children}</>}</>;
};

AuthGuardian.propTypes = {
  children: PropType.element,
};

export default AuthGuardian;
