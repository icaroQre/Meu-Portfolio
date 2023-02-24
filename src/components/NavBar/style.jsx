import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const NavContainer = styled.nav`

    position: fixed;
    top: 0;
    width: calc(100vw - 64px);
    max-width: 100vw;
    height: 48px;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: solid 2px;
    border-color: ${({theme}) => theme.colors.tertiary};
    padding: 0 32px;
    z-index: 999;

    @media (max-width: 1024px) {
        justify-content: space-between;
    }


`;

export const NavMenu = styled.ul`

    display: flex;
    list-style: none;
    align-items: center;

    @media (max-width: 1024px) {
        position: fixed;
        flex-direction: column;
        max-width: 100vw;
        top: 50px;
        right: 0px;
        background-color: orange;
        border-bottom-left-radius: 16px;
        background: rgba(0, 0, 0, 0.9);
        transform: translateX(${({ visible }) => visible ? "0" : "100%" });
        transition: all ease-in-out 0.3s;
        z-index: 999;
    }

`;

export const MenuItens = styled.li`

    height: 100%;
    margin: 16px 32px;

`;

export const MenuLink = styled(LinkScroll)`

    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    color: ${({theme}) => theme.colors.textPrimary};

    :hover{
        color: ${({theme}) => theme.colors.secondary};
    }


`;

export const MobileMenu = styled.div`

    color: ${({theme}) => theme.colors.secondary};
    font-size: 1.5rem;
    display: none;

    @media (max-width: 1024px) {
        display: block;
    }

`;

export const Logo = styled(MenuLink)`

    color: ${({theme}) => theme.colors.secondary}; 
    font-weight: 900;
    font-size: 1.2rem;
    text-decoration: none;

`;