import React from 'react'
import SkillItem from './SkillItem'

function SkillContainer(props) {
	return (
		<div className = "SkillContainer">
			{props.url.map((skill)=>{return(<SkillItem img = {skill.url} key = {skill.id}/>)})}
			
		</div>
	)
}

export default SkillContainer
