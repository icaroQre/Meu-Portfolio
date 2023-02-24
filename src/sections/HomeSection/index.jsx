import React from 'react'
import { Container, Name, TextContainer, NameWrapper, SubName, ImageStyled, RetangleStyled, JapaneseWrite } from './style'
import HomeStatue from '../../assets/home-statue.png'

function HomeSection() {
  
  return (
    <Container id='home'>
        <TextContainer>
            <NameWrapper>
                <Name>&lt; Ícaro Queiroz /&gt;</Name>
                    <SubName>Desenvolvendo</SubName>
                    <SubName>o que você</SubName>
                    <SubName>precisa.</SubName>
            </NameWrapper>
        </TextContainer>
        <RetangleStyled />
        <ImageStyled src={HomeStatue} alt='Home Statue'/>
        <JapaneseWrite>
          イカロ・ケイロス
        </JapaneseWrite>
    </Container>
  )
}

export default HomeSection