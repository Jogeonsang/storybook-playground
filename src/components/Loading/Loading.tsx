import React from 'react';
import styled, {css} from 'styled-components';
import SpinnerSvg from "components/Icon/Spinner/Spinner";

export interface SpinnerLoadingProps {

}

export const SpinnerLoading = ({}: SpinnerLoadingProps) => {
  return (
    <SpinnerWrapper>
      <SpinnerSvg customStyle={SpinnerStyles}/>
    </SpinnerWrapper>
  )
};



const SpinnerStyles = css`
  animation: rotate 1s linear infinite;
  @keyframes rotate {
      from {
          transform: rotate(0deg);
    }

      to {
          transform: rotate(360deg);
      }
  }
`;
const SpinnerWrapper = styled.div`
  background-color: black;
`;


