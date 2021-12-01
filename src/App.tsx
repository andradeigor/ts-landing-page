import React from "react";
import GlobalStyles from "./styles/global";
import { light } from "./styles/themes/light";
import { ThemeProvider } from "styled-components";
import LoginPage from "./components/RegisterPage/index";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
