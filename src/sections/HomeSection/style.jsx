import styled from "styled-components";
import { Boucing, BoucingReverse, TypeCursor, Typing } from "../../components/Animations";
import { Gradient } from "../../components/TextStyled";

export const Container = styled.div`

    height: 100vh;
    width: 100vw;
    background: radial-gradient(circle at bottom,  #222, #1d1d1d, #161616, #0d0d0d, #000000);
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
        
        flex-direction: column;

    }

`;

export const TextContainer = styled.div`

    height: 100vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        
        height: 50vh;
        width: 100vw;
        align-items: flex-end;

    }

`;

export const NameWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;

export const Name = styled(Gradient)`

    font-size: 5rem;
    font-family: 'Bebas Neue', cursive;
    margin-bottom: 32px;
    border-right: solid 4px ${({ theme }) => theme.colors.secondary};
    animation: ${Typing} 10s steps(18) infinite, ${TypeCursor} 1s linear infinite;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 1024px) {
        
        font-size: 48px;

    }

`;

export const SubName = styled.p`

    font-size: 24px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.secondary};

    @media (max-width: 1024px) {
        
        font-size: 18px;

    }
`;

export const ImageStyled = styled.img `

    width: 300px;
    height: 450px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    animation: ${BoucingReverse} 8s linear infinite;

    @media (max-width: 1024px) {
        
        height: 255px;
        width: 170px;

    }
`;

export const RetangleStyled = styled.div`

    height: 500px;
    width: 220px;
    position: absolute;
    bottom: 100px;
    right: 0;
    background-color: transparent;
    border: solid yellow 2px;
    z-index: 0;
    border-image: linear-gradient(to right, rgb(81,53,10), rgba(255,242,131,1)) 1;
    animation: ${Boucing} 8s linear infinite;

    @media (max-width: 1024px) {
        
        width: 120px;
        height: 280px;
        bottom: 50px;

    }

`;

export const JapaneseWrite = styled(Gradient)`

    font-size: 24px;
    font-weight: 900;
    position: absolute;
    bottom: calc(50px - 12px);
    right: 150px;
    animation: ${Boucing} 8s linear infinite;

    @media (max-width: 1024px) {
        
        font-size: 18px;
        bottom: calc(25px - 9px);
        right: 80px;

    }

`;
