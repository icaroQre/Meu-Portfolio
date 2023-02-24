import React, { useState } from "react";
import Skill from "../../components/Skill";
import {
  Container,
  Aboutme,
  AboutContainer,
  ImageContainer,
  SkillContainer,
  SkillTitle,
  SkillWrapper,
  ImageStyled,
  ImageSkillContainer,
  CircleStyled,
  JapaneseWrite,
} from "./style";
import AthenaStatue from "../../assets/athena-statue.png";
import Circle from "../../assets/gradient-circle.png";
import SkillDesc from "../../components/SkillDesc";

function AboutSection() {
  const [skillName, setSkillName] = useState("");
  const [skillDesc, setSkillDesc] = useState(false);

  const showSkill = (e) => {
    setSkillName(e.target.innerHTML.toUpperCase());
    setSkillDesc(true);
  };

  const clear = () => {
    setSkillDesc(false);
  };

  return (
    <Container id="about">
      <AboutContainer>
        <Aboutme>
          Olá, meu nome é{" "}
          <span className="contrast"> Ícaro Queiroz Reccanello </span>
          Atualmente cursando{" "}
          <span className="contrast"> Ciência da Computação </span> na{" "}
          <span className="contrast"> UENP </span> (Universidade Estadual do
          Norte do Paraná), aprimorando habilidades no{" "}
          <span className="contrast"> desenvolvimento </span> WEB voltado para o{" "}
          <span className="contrast"> Front-End </span> e futuramente,
          Full-Stack.
        </Aboutme>
      </AboutContainer>
      <ImageSkillContainer>
        <ImageContainer>
          <ImageStyled src={AthenaStatue} alt="Home Statue" />
          <CircleStyled src={Circle} />
          <JapaneseWrite>スキル</JapaneseWrite>
        </ImageContainer>
        <SkillContainer>
          <SkillTitle>Skills</SkillTitle>
          <SkillWrapper>
            <Skill skill="HTML5" showSkill={showSkill} clear={clear} />
            <Skill skill="CSS3" showSkill={showSkill} clear={clear} />
            <Skill skill="Git Hub" showSkill={showSkill} clear={clear} />
            <Skill skill="Java Script" showSkill={showSkill} clear={clear} />
            <Skill skill="React Js" showSkill={showSkill} clear={clear} />
            <Skill
              skill="Styled Components"
              showSkill={showSkill}
              clear={clear}
            />
            <Skill skill="Photoshop" showSkill={showSkill} clear={clear} />
            <Skill skill="Figma" showSkill={showSkill} clear={clear} />
          </SkillWrapper>
          <SkillDesc skill={skillName} skillDesc={skillDesc} />
        </SkillContainer>
      </ImageSkillContainer>
    </Container>
  );
}

export default AboutSection;
