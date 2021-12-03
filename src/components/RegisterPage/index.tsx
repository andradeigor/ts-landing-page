import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  RegisterPageWarper,
  RegisterPageImageWarper,
  RegisterPageImage,
  RegisterPageFormWarper,
  RegisterPageFormContainer,
  RegisterPageFormTitle,
  RegisterPageFormItemWarper,
  RegisterPageFormItemTitle,
  RegisterPageFormItem,
  RegisterPageButtonArea,
  RegisterPageButton,
  RegisterPageButtonSubTex,
  RegisterPageButtonSubTexLink,
  RegisterPageOAuthSubText,
  RegisterPageOAuthArea,
  RegisterPageOAuthButton,
  RegisterPageOAuthIcon,
  RegisterPageOAuthText,
} from "./style";
import ImagePath from "../../assets/background.jpeg";
import GoogleIconPath from "../../assets/GoogleLogo.svg";
import GitHubIconPath from "../../assets/GitHubLogo.svg";
import CreateUser from "../../services/UserServices/user";

const RegisterPage: React.FC = () => {
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
    <RegisterPageWarper>
      <RegisterPageImageWarper>
        <RegisterPageImage alt="background image" src={ImagePath} />
      </RegisterPageImageWarper>
      <RegisterPageFormWarper>
        <RegisterPageFormContainer onSubmit={handleSubmit(OnSubmit)}>
          <RegisterPageFormTitle>Welcome to Jammy</RegisterPageFormTitle>
          <RegisterPageFormItemWarper>
            <RegisterPageFormItemTitle>Full name</RegisterPageFormItemTitle>
            <RegisterPageFormItem
              error={errors.name}
              placeholder="John Doe"
              {...register("name", { required: true })}
            ></RegisterPageFormItem>
            {errors.name && <span> Name is required</span>}
          </RegisterPageFormItemWarper>
          <RegisterPageFormItemWarper>
            <RegisterPageFormItemTitle>Email</RegisterPageFormItemTitle>
            <RegisterPageFormItem
              error={errors.email}
              placeholder="Enter your Email here"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            ></RegisterPageFormItem>
            {errors.email && <span> Email is required</span>}
          </RegisterPageFormItemWarper>
          <RegisterPageFormItemWarper>
            <RegisterPageFormItemTitle>Password</RegisterPageFormItemTitle>
            <RegisterPageFormItem
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
            ></RegisterPageFormItem>
            {errors.password && <span> Password is required</span>}
          </RegisterPageFormItemWarper>
          <RegisterPageButtonArea>
            <RegisterPageButton type="submit">
              Create Account
            </RegisterPageButton>
            <RegisterPageButtonSubTex>
              Already have an account?
              <RegisterPageButtonSubTexLink>
                {" "}
                Log in
              </RegisterPageButtonSubTexLink>
            </RegisterPageButtonSubTex>
          </RegisterPageButtonArea>
          <RegisterPageOAuthSubText>OR</RegisterPageOAuthSubText>
          <RegisterPageOAuthArea>
            <RegisterPageOAuthButton>
              <RegisterPageOAuthIcon src={GoogleIconPath} />
              <RegisterPageOAuthText>Sign up with Google</RegisterPageOAuthText>
            </RegisterPageOAuthButton>
            <RegisterPageOAuthButton>
              <RegisterPageOAuthIcon src={GitHubIconPath} />
              <RegisterPageOAuthText>Sign up with Github</RegisterPageOAuthText>
            </RegisterPageOAuthButton>
          </RegisterPageOAuthArea>
        </RegisterPageFormContainer>
      </RegisterPageFormWarper>
    </RegisterPageWarper>
  );
};

export default RegisterPage;
