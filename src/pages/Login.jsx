import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../components/Logo";
import Heading from "../components/Heading";

const Login = () => {
  return (
    <LoginBox>
      <Logo size="large" />
      <StyledHeading>
        <Heading as="h3">Log in to your account</Heading>
      </StyledHeading>
      <LoginForm />
    </LoginBox>
  );
};

const LoginBox = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
