import React, {useState} from 'react'
import '../Styles/TopSection.css'
import bgImage from '../Img/Portfolio_Bg_new-min.png'
import BubbleWrapper from './TopSectionComponents/BubbleWrapper'
import ImgAndName from './TopSectionComponents/ImgAndName'
function TopSection(props) {
	return (
		<div className="TopSection">
			<BubbleWrapper offsetY = {props.offsetY}/>  
			<ImgAndName lang = {props.lang} offsetY = {props.offsetY}/>
			<img className = "bgImage" src={bgImage} alt=""/>
		</div> 
	)
}

export default TopSection
