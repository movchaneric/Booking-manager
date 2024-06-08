import styled from "styled-components";

const ContextMenu = ({ children }) => {
  return <StyledContextMenu>{children}</StyledContextMenu>;
};

const StyledContextMenu = styled.div`
  width: 13rem;
  display: flex;
  gap: 3px;
  flex-direction: column;
  padding: 5px 10px;
  position: absolute;
  top: 6rem;
  left: 70rem;
  z-index: 20;
`;

export default ContextMenu;
