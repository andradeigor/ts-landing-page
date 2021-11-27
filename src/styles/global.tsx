import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`*{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background-color: ${(props) => props.theme.colors.background};
    font-size:14px;
    color: ${(props) => props.theme.colors.primary};
}
`;
