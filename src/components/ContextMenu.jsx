import { useEffect, useRef } from "react";
import styled from "styled-components";

const ContextMenu = ({ children, openId, onClose, position }) => {
  const contextRef = useRef();
  
  const { top, left } = position;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [onClose]);

  return (
    <StyledContextMenu ref={contextRef} top={top} left={left}>
      {children}
    </StyledContextMenu>
  );
};

const StyledContextMenu = styled.div`
  width: 100%;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  max-width: 16rem;
  display: flex;
  gap: 3px;
  flex-direction: column;
  padding: 5px 10px;
  position: absolute;
  top: ${(props) => `${props.top + 10}px`};
  left: ${(props) => `${props.left - 140}px`};
  z-index: 20;
`;

export default ContextMenu;
