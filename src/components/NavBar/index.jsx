import React, { useState } from 'react';
import { NavContainer, NavMenu, MenuItens, MenuLink, Logo, MobileMenu } from './style';
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }

  return (
    <>
    <NavContainer>
      <Logo to='home' smooth={true} duration={1000}> QRE </Logo>
      <MobileMenu onClick={toggleMenu}>
        <AiOutlineMenu />
      </MobileMenu>
      <NavMenu visible = { showMenu }>
        <MenuItens> <MenuLink onClick={toggleMenu} to='home'  smooth={true} duration={1000}> Home </MenuLink> </MenuItens>
        <MenuItens> <MenuLink onClick={toggleMenu} to='about'  smooth={true} duration={1000}> Sobre </MenuLink> </MenuItens>
        <MenuItens> <MenuLink onClick={toggleMenu} to='projects'  smooth={true} duration={1000}> Projetos </MenuLink> </MenuItens>
        <MenuItens> <MenuLink onClick={toggleMenu} to='/' href='https://www.github.com/icaroqre'> Git Hub </MenuLink> </MenuItens>
        <MenuItens> <MenuLink onClick={toggleMenu} to='contact'  smooth={true} duration={1000}> Contato </MenuLink> </MenuItens>
      </NavMenu>
    </NavContainer>
    </>
  )
}

export default NavBar;