import styled from "styled-components";

const Logo = () => {
  return <Image src="../../public/logo.png" alt="company-logo" />;
};

const Image = styled.img`
  height: 13rem;
  width: 13rem;
`;

export default Logo;
