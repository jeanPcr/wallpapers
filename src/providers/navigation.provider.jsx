import { BrowserRouter } from "react-router-dom";

const NavigationProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default NavigationProvider;
