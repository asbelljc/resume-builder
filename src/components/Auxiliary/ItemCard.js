import React, { Component } from 'react';
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
    transition: transform 200ms;
  }
  &.expand-exit {
    transform: scale(1);
  }
  &.expand-exit-active {
    transform: scale(0);
    transition: transform 200ms;
  }
`;

class ItemCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <CSSTransition
        in={this.state.mounted}
        timeout={200}
        unmountOnExit
        classNames="expand"
      >
        <ItemCardWrapper>{children}</ItemCardWrapper>
      </CSSTransition>
    );
  }
}

export default ItemCard;
