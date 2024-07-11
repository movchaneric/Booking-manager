import styled, { css } from "styled-components";

const sizes = {
  regular: css`
    height: 13rem;
    width: 13rem;
  `,

  large: css`
    height: 20rem;
    width: 20rem;
  `,
};

const Logo = ({ size }) => {
  return (
    <LogoContainer>
      <Image src="/logo.png" alt="company-logo" size={size} />
    </LogoContainer>
  );
};

const Image = styled.img`
  ${(props) => sizes[props.size]}
`;

Image.defaultProps = {
  size: "regular",
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Logo;
