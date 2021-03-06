import React from "react";
import GlobalStyles from "./styles/global";
import { light } from "./styles/themes/light";
import { ThemeProvider } from "styled-components";
import RegisterPage from "./components/RegisterPage/index";
import LoginPage from "./components/Loginpage/index";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
