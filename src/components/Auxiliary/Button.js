import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  ${(props) =>
    props.deleteBtn &&
    css`
      position: absolute;
      top: 0;
      right: 0;
    `}
`;

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addBtn, deleteBtn, resetBtn, onClick, children } = this.props;

    return (
      <ButtonWrapper
        addBtn={addBtn} // If these props are specified, they overwrite the default button style.
        deleteBtn={deleteBtn} //
        resetBtn={resetBtn} //
        onClick={onClick}
      >
        {children}
      </ButtonWrapper>
    );
  }
}

export default Button;
