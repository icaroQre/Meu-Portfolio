import { keyframes } from "styled-components";

export const Boucing = keyframes`

    0% {transform: translateY(25px);}
    50% {transform: translateY(-25px);}
    100% {transform: translateY(25px);}

`;

export const BoucingReverse = keyframes`

    0% {transform: translateY(-25px);}
    50% {transform: translateY(25px);}
    100% {transform: translateY(-25px);}

`;

export const TypeCursor = keyframes`

  from, to { border-color: transparent; }
  50% { border-color: #FFF; }

`;

export const Typing = keyframes`

    0% { width: 0% }
    15% { width: 0% }
    50% { width: 100% }
    65% { width: 100% }
    100% { width: 0% }

`;