import React, { useState } from "react";
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
import CreateUser from "../../services/UserServices/user";

const LoginPage: React.FC = () => {
  interface User {
    name: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const OnSubmit = async (data: User) => {
    console.log(data);
    const User: User = await CreateUser(data);
    console.log(User);
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
            <LoginPageFormItemTitle>Full name</LoginPageFormItemTitle>
            <LoginPageFormItem
              error={errors.name}
              placeholder="John Doe"
              {...register("name", { required: true })}
            ></LoginPageFormItem>
            {errors.name && <span> Name is required</span>}
          </LoginPageFormItemWarper>
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
