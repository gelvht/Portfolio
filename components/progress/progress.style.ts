import styled, { keyframes } from "styled-components";

import { IProgressProps } from "./progress";

const transition = (perc: string) => keyframes` 
from{
    width: 0;
}
to{width:${perc}}
`;

export const ProgressStyle = styled.div<IProgressProps>`
  width: ${(props) => props.percentage};
  height: 13px;
  background: ${(props) => props.inputColor};
  border-radius: 5px;
  box-shadow: 2px 2px 4px #c4c4c4, -2px -2px 4px #ffffff;
  animation: ${(props) => transition(props.percentage)} 1s linear;
`;
