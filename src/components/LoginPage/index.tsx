import React from "react";
import {
  LoginPageWarper,
  LoginPageImageWarper,
  LoginPageImage,
  LoginPageFormWarper,
  LoginPageFormContainer,
  LoginPageFormTitle,
  LoginPageFormItemWarper,
  LoginPageFormItemTitle,
  LoginPageFormItem,
} from "./style";
import ImagePath from "../../assets/background.jpeg";
/*
 */
const LoginPage: React.FC = () => {
  return (
    <LoginPageWarper>
      <LoginPageImageWarper>
        <LoginPageImage src={ImagePath} />
      </LoginPageImageWarper>
      <LoginPageFormWarper>
        <LoginPageFormContainer>
          <LoginPageFormTitle>Welcome to Jammy</LoginPageFormTitle>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Full Name</LoginPageFormItemTitle>
            <LoginPageFormItem placeholder="John Doe"></LoginPageFormItem>
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Email</LoginPageFormItemTitle>
            <LoginPageFormItem placeholder="Enter your Email here"></LoginPageFormItem>
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Password</LoginPageFormItemTitle>
            <LoginPageFormItem placeholder="Enter your Password"></LoginPageFormItem>
          </LoginPageFormItemWarper>
        </LoginPageFormContainer>
      </LoginPageFormWarper>
    </LoginPageWarper>
  );
};

export default LoginPage;
