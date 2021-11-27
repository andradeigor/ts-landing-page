import React from "react";
import GlobalStyles from "./styles/global";
import { light } from "./styles/themes/light";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <h1>Hello Word</h1>
    </ThemeProvider>
  );
};

export default App;
