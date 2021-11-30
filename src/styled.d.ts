// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      subButton: string;
      button: string;
      backgroundInput: string;
      background: string;
    };
    breakpoints: {
      sm: string;
      lg: string;
    };
  }
}
