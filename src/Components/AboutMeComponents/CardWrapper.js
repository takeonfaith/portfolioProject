import React from 'react'
import CardItem from './CardItem'

function CardWrapper(props) {
	const text = props.lang === "ru"? 
	[
		{
			txt:"19 лет",
			delay:0
		},
		{
			txt:"Живу в Москве",
			delay:0.1
		},
		{
			txt:"Знаю английский на уровне B2", 
			delay:0.2
		},
		{
			txt:"Учусь в универе", 
			delay:0.3
		},
		{
			txt:"Бла-бла-бла",
			delay:0.4
		},
	]:
	[
		{
			txt:"19 year old",
			delay:0
		},
		{
			txt:"Live in Moscow",
			delay:0.1
		},
		{
			txt:"English level is B2",
			delay:0.2
		},
		{
			txt:"Study in University", 
			delay:0.3
		},
		{
			txt:"Bla-bla-bla",
			delay:0.4
		},
	]
	const cards = text.map((card)=>{return(<CardItem text={card.txt} offsetY = {props.offsetY} delay = {card.delay}/>)})
	return (
		<div className="CardWrapper">
			{cards}
		</div>
	)
}

export default CardWrapper
