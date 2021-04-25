import React from 'react';
import styled, {css} from 'styled-components';
import * as colors from 'styles/colors';

export interface InputProps {
  isDisabled: boolean;
  icon?: 'search' | 'down';
  isError?: boolean;
}

export const Input = ({isDisabled=false, icon, isError=false, ...otherProps}: InputProps) => {

  return (
    <InputWrapper>
      <StyledInput {...otherProps} disabled={isDisabled} isError={isError}/>
      {isError && (<ErrorText>인증번호를 잘못 입력했습니다</ErrorText>)}
    </InputWrapper>
  )
};

const InputWrapper = styled.div`
  position: relative;
  display: block;
`;

const StyledInput = styled.input<{isError: boolean}>`
  width: 100%;
  height: 56px;
  border: 1px solid ${colors.lineDefault};
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 16px 0 16px;
  line-height: 56px;
  font-size: 16px;
  overflow: hidden;
  letter-spacing: -0.03em;
  cursor: pointer;
  
  ${(({ isError }) => isError && css`
    border: solid 1px ${colors.error};
  `)};
  
  &:focus {
    border: solid 1px ${colors.da24Blue};
  }
  
  &:disabled {
    background-color: ${colors.grayBg};
    cursor: not-allowed;
    color: ${colors.gray88};
  }
`;

const ErrorText = styled.div`
  padding-top: 8px;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.error};
`;