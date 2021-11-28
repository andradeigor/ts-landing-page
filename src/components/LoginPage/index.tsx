import React from "react";
import { LoginPageWarper, LoginPageImageWarper, LoginPageImage } from "./style";
import ImagePath from "../../assets/background.jpeg";
/*     */
const LoginPage: React.FC = () => {
  return (
    <LoginPageWarper>
      <LoginPageImageWarper>
        <LoginPageImage src={ImagePath} />
      </LoginPageImageWarper>
    </LoginPageWarper>
  );
};

export default LoginPage;
