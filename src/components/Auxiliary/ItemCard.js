import React, { Component } from 'react';
import styled from 'styled-components';

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
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s;

  &.shown {
    transform: scaleY(1);
  }
`;

class ItemCard extends Component {
  constructor(props) {
    super(props);

    this.state = '';
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        class: 'shown',
      });
    });
  }

  render() {
    const { children } = this.props;

    return (
      <ItemCardWrapper className={this.state.class}>{children}</ItemCardWrapper>
    );
  }
}

export default ItemCard;
