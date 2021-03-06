import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  addBtn?: boolean;
  deleteBtn?: boolean;
  resetBtn?: boolean;
  onClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | (() => void)
    | undefined;
  children: string;
}

const ButtonWrapper = styled.button<Props>`
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
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: background-color 200ms, color 200ms;

  ${(props) =>
    !(props.deleteBtn || props.resetBtn) &&
    css`
      &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.primary};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.primaryActive};
      }
    `};

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
        color: white;
        background-color: ${({ theme }) => theme.colors.reset};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.resetActive};
      }
    `}
`;

function Button({ addBtn, deleteBtn, resetBtn, onClick, children }: Props) {
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

export default Button;
