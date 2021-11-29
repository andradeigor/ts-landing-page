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
            <LoginPageFormItemTitle>Full Name</LoginPageFormItemTitle>
            <LoginPageFormItem
              error={errors.fullname}
              placeholder="John Doe"
              {...register("fullname", { required: true })}
            ></LoginPageFormItem>
            {errors.fullname && <span> Fullname is required</span>}
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Email</LoginPageFormItemTitle>
            <LoginPageFormItem
              error={errors.email}
              placeholder="Enter your Email here"
              {...register("email", { required: true })}
            ></LoginPageFormItem>
            {errors.email && <span> Email is required</span>}
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Password</LoginPageFormItemTitle>
            <LoginPageFormItem
              error={errors.password}
              type="password"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            ></LoginPageFormItem>
            {errors.password && <span> Password is required</span>}
          </LoginPageFormItemWarper>
          <LoginPageButtonArea>
            <LoginPageButton type="submit">Create Account</LoginPageButton>
            <LoginPageButtonSubTex>
              Already have an account?
              <LoginPageButtonSubTexLink> Log in</LoginPageButtonSubTexLink>
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
