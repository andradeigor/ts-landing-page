import styled from "styled-components";

export const LoginPageWarper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const LoginPageImageWarper = styled.div`
  width: 45%;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 0;
  }
`;

export const LoginPageImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

export const LoginPageFormWarper = styled.div`
  width: 55%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 6%;
  padding-bottom: 6%;
  padding-left: 6%;
  padding-right: 6%;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const LoginPageFormContainer = styled.form`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;
export const LoginPageFormTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 30px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 32px;
  }
`;
export const LoginPageFormItemWarper = styled.div`
  width: 100%;
  height: 140px;
`;

export const LoginPageFormItemTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 5px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const LoginPageFormItem = styled("input")<{
  error: boolean;
}>`
  width: 100%;
  height: 65px;
  background-color: ${(props) => props.theme.colors.backgroundInput};
  outline: none;
  border: ${(props) => (props.error ? "1px red solid" : "none")};
  color: ${(props) => props.theme.colors.secondary};
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 5%;
  font-size: 20px;
  :focus {
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 16px;
    height: 45px;
  }
`;

export const LoginPageButtonArea = styled.div`
  margin-top: 10px;
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 250px;
  }
`;
export const LoginPageButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.button};
  border: none;
  outline: none;
  font-size: 26px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  :active {
    position: relative;
    top: -0.5px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }
`;

export const LoginPageButtonSubTex = styled.p`
  margin-top: 15px;
  font-weight: 300;
  font-size: 18px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;
export const LoginPageButtonSubTexLink = styled.a`
  margin-top: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.button};
  font-size: 18px;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const LoginPageOAuthSubText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 600;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 18px;
  }
`;
export const LoginPageOAuthArea = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 10px;
    height: 40px;
  }
`;

export const LoginPageOAuthButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  width: 290px;
  height: 100%;
  border: ${(props) => props.theme.colors.subButton} 1px solid;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  :active {
    position: relative;
    top: -0.5px;
  } //
`;

export const LoginPageOAuthIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const LoginPageOAuthText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 12px;
    width: 100%;
  }
`;
