import styled from "styled-components";
import { Boucing } from "../../components/Animations";
import { Gradient } from "../../components/TextStyled";

export const Container = styled.div`

    min-height: 100vh;
    width: 100vw;
    background: radial-gradient(circle at top,  #222, #1d1d1d, #161616, #0d0d0d, #000000);
    display: flex;
    flex-wrap: wrap;
    border-top: solid 2px #333;

`;

export const AboutContainer = styled.div`

    width: 100vw;
    padding: 144px 72px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        padding: 72px 10%;
        padding-top: 144px;
    }

`;

export const Aboutme = styled.div`

    max-width: 800px;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.textPrimary};
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    .contrast {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};
    }

`;

export const ImageSkillContainer = styled.div`

    height: auto;
    width: 100vw;
    display: flex;
    align-items: center;
        justify-content: center;

    @media (max-width: 1024px) {

        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
    }

`;

export const SkillContainer = styled.div`

    width: 50vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 0;
    position: relative;
    z-index: 5;

    @media (max-width: 1024px) {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

`;

export const SkillTitle = styled.p`

    font-size: 32px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.secondary};

    @media (max-width: 1024px) {
        font-size: 24px;
    }

`;

export const SkillWrapper = styled.div`

    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: calc(72px - 16px);

`;

export const ImageContainer = styled.div`

    width: 50vw;
    height: 100%;
    display: flex;

    @media (max-width: 1024px) {
        width: 100vw;
        align-items: center;
        justify-content: center;
    }

`;


export const ImageStyled = styled.img`
    
    height: 470px;
    width: 400px;
    margin-left: 10%;
    position: relative;
    bottom: 0%;
    right: 0;
    z-index: 2;
    align-self: flex-end;

    @media (max-width: 1024px) {
        
        margin-top: 120px;
        height: 240px;
        width: 200px;
        align-self: none;
        margin-left: 20%;

    }

`;

export const CircleStyled = styled.img`

    height: 400px;
    width: 400px;
    position: relative;
    z-index: 0;
    animation: ${Boucing} 8s linear infinite;
    left: -300px;
    top: 50px;

    @media (max-width: 1024px) {
        
        height: 200px;
        width: 200px;
        left: -150px;
        top: 50px;
    }
`;

export const JapaneseWrite = styled(Gradient)`

    font-size: 24px;
    font-weight: 900;
    position: relative;
    bottom: -550px;
    right: 400px;
    animation: ${Boucing} 8s linear infinite;
    white-space: nowrap;

    @media (max-width: 1024px) {
        
        font-size: 18px;
        bottom: -100px;
        right: 100px;

    }

`;