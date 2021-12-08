import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button``;

class Button extends Component {
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
