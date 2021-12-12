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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

class ItemCard extends Component {
  render() {
    const { children } = this.props;

    return <ItemCardWrapper>{children}</ItemCardWrapper>;
  }
}

export default ItemCard;
