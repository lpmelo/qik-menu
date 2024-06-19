import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCompanyData } from "../features/company/companySlice";
import useCompanyApi from "../features/company/companyApi";
import AppBar from "../components/AppBar/AppBar";
import { saveWebSettings } from "../features/webSettings/webSettingsSlice";

const App = () => {
  const dispatch = useDispatch();
  const { getCompanyById } = useCompanyApi();
  const { id } = useSelector((state) => state.company);

  useEffect(() => {
    if (!id) {
      getCompanyById("9").then((res) => {
        dispatch(saveCompanyData(res));
        dispatch(saveWebSettings(res));
      });
    }
  }, []);

  return <AppBar />;
};

export default App;
