import React from 'react'
import SkillScaleItem from './SkillScaleItem'

function SkillScale(props) {
	const text = props.lang === "ru"? 
	["Достаточно хороший уровень", "Что-то могу", "Мало что могу"]:
	["Pretty good level", "Can do something", "Know just a little bit"]
	return (
		<div className="SkillScale">
			{props.skill.map((s)=>{return(<SkillScaleItem url = {s.url} skill = {s.skill} level = {s.level} offsetY = {props.offsetY}/>)})}
			<div className="DefinitionOfColor">
				{text.map((txt)=>{return(<h5>{txt}</h5>)})}
			</div>
		</div>
	)
}

export default SkillScale
