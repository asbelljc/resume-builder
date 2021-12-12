import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  border: 4px solid white;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border-radius: 20px;
  line-height: 0;
  height: 40px;
  padding: 8px 0;
  margin: 0 8px;
  font-family: 'Caveat', cursive;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${(props) =>
    props.deleteBtn &&
    css`
      width: 48px;
      height: 48px;
      line-height: 0;
      display: flex;
      border: none;
      padding: 18px 10px 0;
      margin: 0;
      font-size: 48px;
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: none;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: transparent;
      }
    `};

  ${(props) =>
    props.addBtn &&
    css`
      width: 40px;
      height: 40px;
      line-height: 0;
      border-radius: 20px;
      align-self: center;
      background-color: white;
      font-size: 42px;
      padding: 0 6px 8px 0;
      margin: 0;
    `}

  ${(props) =>
    props.resetBtn &&
    css`
      &:hover {
        background: ${({ theme }) => theme.colors.reset};
      }
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
