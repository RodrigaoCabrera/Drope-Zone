import React from "react";
import styled from "styled-components";
import GoogleIcon from "../assets/GoogleIcon";

const Login = () => {
  return (
    <LoginContainer>
      <TitileContainer>
        <DropZoneTitle>Bienvenido a DDrop</DropZoneTitle>
        <InstructiveText as="p">
          Para subir tus archivos de forma simple a drive, puedes hacer LogIn a
          través de Google.
        </InstructiveText>
      </TitileContainer>
      <section>
        <LoginButtonContainer>
          <GoogleIcon />
          <LoginButtonLabel as="p">Login con Google</LoginButtonLabel>
        </LoginButtonContainer>
      </section>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  width: max(40%, 440px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-right: 2.5rem;
`;

const TitileContainer = styled.section`
  border-bottom: 1px solid #39424e;
  padding-bottom: 2rem;
`;

const DropZoneTitle = styled.h1`
  color: #fff;
  text-align: center;
`;
const InstructiveText = styled(DropZoneTitle)`
  text-align: start;
`;
const LoginButtonContainer = styled.button`
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  cursor: pointer;
`;

const LoginButtonLabel = styled(DropZoneTitle)`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
`;
