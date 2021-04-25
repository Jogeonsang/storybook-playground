import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({label, backgroundColor, onClick, size}: ButtonProps) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} size={size} onClick={onClick}>{label}</ButtonWrapper>
  )
};

/*${props => props.status === 'unavailable' && css`
			background-color:${colors.lineDefault};
			pointer-events: none;
		`};*/

const ButtonWrapper = styled.button<{backgroundColor?: string, size?: 'small' | 'medium' | 'large'}>`
  padding: 10px;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
 
`;
