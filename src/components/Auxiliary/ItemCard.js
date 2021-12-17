import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const ItemCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.0625in;
  padding: 0.25in;
  margin-bottom: 0.125in;
  border-radius: 20px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transform-origin: top;

  &.expand-enter {
    transform: scale(0);
  }
  &.expand-enter-active {
    transform: scale(1);
    transition: transform 250ms;
  }
  &.expand-exit {
    transform: scale(1);
  }
  &.expand-exit-active {
    transform: scale(0);
    transition: transform 250ms;
  }
`;

function ItemCard({ children }) {
  const [isMounted, mount] = useState(false);

  useEffect(() => {
    mount(true);
  });

  return (
    <CSSTransition
      in={isMounted}
      timeout={250}
      unmountOnExit
      classNames="expand"
    >
      <ItemCardWrapper>{children}</ItemCardWrapper>
    </CSSTransition>
  );
}

export default ItemCard;
