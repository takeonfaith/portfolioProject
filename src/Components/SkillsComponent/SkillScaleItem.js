import React from 'react'

function SkillScaleItem(props) {
	const color = props.level <= 3? 
		"#e75250e8":
		props.level < 6?"#ebb85b": 
		"linear-gradient(-20deg, #02aab0 0%, #00cdac	100%)" 
	return (
		<div className="SkillScaleItem">
			<div className="ImgAndSkill">
				<img src={props.url} alt=""/>
				<h4>{props.skill}</h4>
			</div>
			<div className="Scale">
				<div className="MyLevel" style=
				{
					props.offsetY > 2500?
					{
						background:color, 
						width: props.level * 10 + "%",
					}:
					{
						background:color, 
						width: 0 + "%",
					}
				}
				></div>
			</div>
		</div>
	)
}

export default SkillScaleItem
