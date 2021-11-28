import styled from "styled-components";

export const LoginPageWarper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const LoginPageImageWarper = styled.div`
  width: 45%;
`;

export const LoginPageImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

export const LoginPageFormWarper = styled.div`
  width: 55%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  padding: 5%;
`;

export const LoginPageFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginPageFormTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 8%;
`;
export const LoginPageFormItemWarper = styled.div`
  width: 100%;
  height: 150px;
`;

export const LoginPageFormItemTitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 5px;
`;

export const LoginPageFormItem = styled.input`
  width: 100%;
  height: 65px;
  background-color: ${(props) => props.theme.colors.backgroundInput};
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 5%;
  font-size: 20px;
`;
