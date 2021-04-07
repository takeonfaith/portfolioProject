import React from 'react'

function CardItem(props) {
	return (
		<div className="CardItem" style=
		{
			props.offsetY > 200 && props.offsetY < 1200?
			{
				animation:"fadeIn .7s " + props.delay + "s forwards",
			}:
			{
				animation:"nofadeIn .3s forwards",
			}
		}>
			<h4>{props.text}</h4>
			<span className="circle1"></span>
			<span className="circle2"></span>
		</div>
	)
}

export default CardItem
