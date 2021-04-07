import React, {useState} from 'react'
import '../Styles/FullScrProjects.css'
import FullScrImgRow from './FullScrProjectsComponents/FullScrImgRow'
function FullScrProjects(props) {
	function closeFullProject(){
		props.callbackFullProjectsFunc(!props.fullProjects)
	}
	return (
		<div className="FullScrProjects" style =
			{
				props.fullProjects?
				{
					borderRadius: "0px",
					opacity: 1,
					transform:"scale(1) translateY(0)"
				}:
				{
					borderRadius: "100px",
					opacity: 0,
					transform:"scale(.95) translateY(100%)"
				}
			}
		>
			<button 
			className="fullProjectsCloseBtn" 
			onClick = {closeFullProject}>
				<img 
					src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" 
					alt=""/>
			</button>
			<FullScrImgRow projects = {[props.projects[0], props.projects[1]]} text = {props.projects[0].text}/>
			<FullScrImgRow projects = {[props.projects[2], props.projects[3]]} text = {props.projects[2].text}/>
			<FullScrImgRow projects = {[props.projects[4], props.projects[5]]} text = {props.projects[4].text}/>
		</div>
	)
}

export default FullScrProjects
