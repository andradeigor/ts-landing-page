import React from "react";
import { useForm } from "react-hook-form";
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
  LoginPageButtonArea,
  LoginPageButton,
  LoginPageButtonSubTex,
  LoginPageButtonSubTexLink,
  LoginPageOAuthSubText,
  LoginPageOAuthArea,
  LoginPageOAuthButton,
  LoginPageOAuthIcon,
  LoginPageOAuthText,
} from "./style";
import ImagePath from "../../assets/background.jpeg";
import GoogleIconPath from "../../assets/GoogleLogo.svg";
import GitHubIconPath from "../../assets/GitHubLogo.svg";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const OnSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <LoginPageWarper>
      <LoginPageImageWarper>
        <LoginPageImage alt="background image" src={ImagePath} />
      </LoginPageImageWarper>
      <LoginPageFormWarper>
        <LoginPageFormContainer onSubmit={handleSubmit(OnSubmit)}>
          <LoginPageFormTitle>Welcome to Jammy</LoginPageFormTitle>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Email</LoginPageFormItemTitle>
            <LoginPageFormItem
              error={errors.email}
              placeholder="Enter your Email here"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            ></LoginPageFormItem>
            {errors.email && <span> Email is required</span>}
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Password</LoginPageFormItemTitle>
            <LoginPageFormItem
              error={errors.password}
              type="password"
              placeholder="Enter your Password"
              {...register("password", {
                required: "required",
                minLength: {
                  value: 6,
                  message: "min lenght is 5",
                },
              })}
            ></LoginPageFormItem>
            {errors.password && <span> Password is required</span>}
          </LoginPageFormItemWarper>
          <LoginPageButtonArea>
            <LoginPageButton type="submit">Login</LoginPageButton>
            <LoginPageButtonSubTex>
              Don't Have an account?
              <LoginPageButtonSubTexLink> Create one</LoginPageButtonSubTexLink>
            </LoginPageButtonSubTex>
          </LoginPageButtonArea>
          <LoginPageOAuthSubText>OR</LoginPageOAuthSubText>
          <LoginPageOAuthArea>
            <LoginPageOAuthButton>
              <LoginPageOAuthIcon src={GoogleIconPath} />
              <LoginPageOAuthText>Sign up with Google</LoginPageOAuthText>
            </LoginPageOAuthButton>
            <LoginPageOAuthButton>
              <LoginPageOAuthIcon src={GitHubIconPath} />
              <LoginPageOAuthText>Sign up with Github</LoginPageOAuthText>
            </LoginPageOAuthButton>
          </LoginPageOAuthArea>
        </LoginPageFormContainer>
      </LoginPageFormWarper>
    </LoginPageWarper>
  );
};

export default LoginPage;
