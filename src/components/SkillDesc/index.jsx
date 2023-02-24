import React from "react";
import { Container } from "./style";

 const description = {

  HTML5: 'linguagem de marcação bla bla',
  CSS3: 'linguagem de estilizaçao bla bla',
  REACTJS: 'biblioteca java script blabla',

 }

function SkillDesc({ skill, skillDesc }) {

  var width = window.screen.width;
  var noDesc;

  if(width < 1024){
    noDesc = 'Clique na habilidade que deseja ver a descrição'
  }else { noDesc = 'Passe o Mouse sobre a habilidade que deseja ver a descrição' }

  return <Container>{skillDesc ? skill : noDesc}</Container>;
}

export default SkillDesc;