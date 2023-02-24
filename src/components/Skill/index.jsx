import React from "react";
import { Container } from "./style";

function Skill({ skill, showSkill, clear }) {

  return <Container onMouseEnter={showSkill}  onMouseOut={ clear }>{skill}</Container>;
}

export default Skill;
