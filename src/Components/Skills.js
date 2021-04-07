import React from 'react'
import '../Styles/Skills.css'
import SkillContainer from './SkillsComponent/SkillContainer'
import SkillScale from './SkillsComponent/SkillScale'

function Skills(props) {
	const skillUrls = [
		{
			id: 1,
			url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
			skill: "Html",
			level: 8,
		},
		{
			id: 2,
			url:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
			skill:"Css",
			level: 8.5,
		},
		{
			id: 3,
			url:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
			skill:"Figma",
			level: 9,
		},
		{
			id: 4,
			url:"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
			skill: "React",
			level: 4,
		},
		{
			id: 5,
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
			skill: "C++",
			level: 4,
		},
		{
			id: 6,
			url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png",
			skill: "JavaScript",
			level: 5,
		},
		{
			id:7,
			url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
			skill:"Python",
			level: 3,
		},
	]

	return (
		<div className="Skills" id = "SkillsId">
			<div className="WrapperAndTitle">
				<div className="SkillWrapper">
					<SkillContainer url = {[skillUrls[0], skillUrls[1]]} key = "1"/>
					<SkillContainer url = {[skillUrls[2], skillUrls[3], skillUrls[4]]} key = "2"/>
					<SkillContainer url = {[skillUrls[5], skillUrls[6]]} key = "3"/>
				</div>
				<h1>{props.lang == "ru"? "Мои навыки": "My skills"}</h1>
			</div>
			<SkillScale lang = {props.lang} skill = {skillUrls} offsetY = {props.offsetY} key = "10"/>
		</div>
	)
}

export default Skills

