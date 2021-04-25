import React from 'react';
import styled from 'styled-components';
import * as colors from 'styles/colors';

export interface ButtonProps {
  label: string;
  width?: number;
  onClick?: () => void;
  type: 'normal' | 'error' | 'disabled'
}

export const Button = ({label, onClick, width, type}: ButtonProps) => {
  const typeBackgroundColor = () => {
    switch (type) {
      case 'normal':
        return colors.da24Blue;
      case 'error':
        return colors.error;
      case 'disabled':
        return colors.disabled;
      default:
        return colors.da24Blue;
    }
  }

  return (
    <StyledButton backgroundColor={typeBackgroundColor()} width={width} onClick={onClick}>{label}</StyledButton>
  )
};

const StyledButton = styled.button<{backgroundColor?: string , width?: number}>`
  padding: 16px 31px;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.da24Blue};
  width: ${props => props.width && `${props.width}px`};
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  border-radius: 6px;
  line-height: 24px;
  letter-spacing: -0.03em;
  
`;
