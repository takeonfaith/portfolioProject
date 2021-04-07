import React from 'react'
import '../Styles/AboutMe.css'
import bgImg2 from '../Img/Portfolio_Bg2.png'
import CardWrapper from './AboutMeComponents/CardWrapper'
function AboutMe(props) {
	return (
		<div className="AboutMe" id="AboutId">
			<h1>{props.lang === "ru"?"Обо мне":"About Me"}</h1>
			<img src={bgImg2} alt=""/>
			<CardWrapper lang = {props.lang} offsetY = {props.offsetY}/>
		</div>
	)
}

export default AboutMe
