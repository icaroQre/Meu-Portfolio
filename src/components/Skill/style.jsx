import styled from "styled-components";

export const Container = styled.span`

    display: inline-block;
    padding: 8px 16px;
    border: solid 2px;
    border-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: transparent;
    font-size: 1rem;
    margin: 6px;
    font-weight: 600;
    cursor: pointer;

    :hover{
        ${({ theme }) => theme.colors.gradientBgGold}
        color: ${({ theme }) => theme.colors.primary};
        border-color: black;
    }

`;