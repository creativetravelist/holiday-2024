import { keyframes } from '@mui/system';

export const sparkleAnimation = keyframes`
    0% {
         opacity: .2;
    }
    25% {
        opacity: 1;
    }
    75% {
        opacity: .2;
    }
    100% {
        opacity: 1;
    }
 `;

export const hintAnimation = keyframes`
    0% {
         opacity: .3;
    }
    100% {
        opacity: 1;
    }
 `;

export const sparkleHintAnimation = keyframes`
    0% {
         opacity: 0;
         scale: .9;
    }
    25% {
        opacity: 1;
        scale: 1;
    }
    75% {
        opacity: 0;
        scale: .9;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
 `;

export const showfromLeft = keyframes`
    0% {
       width:0%;
    }
    100% {
       width:68%;
    }
`;

export const showfromBottom = keyframes`
    0% {
       height:0%;
    }
    100% {
       height:34vh;
    }
`;

export const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;
