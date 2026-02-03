import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// routing
import Routes from "routes";

// project imports
import { LocalizationProvider } from "@mui/x-date-pickers";
import "dayjs/locale/zh-tw";
import NavigationScroll from "layouts/NavigationScroll";

import "./index.css";

// ==============================|| APP ||============================== //

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"zh-tw"}>
      <NavigationScroll>
        <Routes />
      </NavigationScroll>
    </LocalizationProvider>
  );
};

export default App;
