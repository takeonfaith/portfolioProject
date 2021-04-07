import React, {useState} from 'react'
import '../Styles/Projects.css'
import ProjectItem from './ProjectsComponents/ProjectItem'
function Projects(props) {
	function openFullProjects(){
		props.callbackFullProjectsFunc(!props.fullProjects)
	}
	return (
		<div className="Projects" id="ProjectsId" onClick = {openFullProjects} style ={
			props.offsetY > 1100 && props.offsetY < 3100?
			{
				animation: "ProjectsPopUp .7s forwards",
			}:
			{
				animation: "noProjectsPopUp .7s forwards",
			}
		}>
			<h1>{props.lang === "ru"? "Мои проекты":"My projects"}</h1>
			<div className="ProjectsImgs" >
				{props.projects.map((img)=>{return(<ProjectItem imgUrl = {img.url} text = {img.text} key = {img.id}/>)})}
			</div>
		</div>
	)
}

export default Projects
