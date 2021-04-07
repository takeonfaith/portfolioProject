import React, {useState} from 'react'
import FullScrImgItem from './FullScrImgItem'

function FullScrImgRow(props) {
	const [page, setPage] = useState(0);

	function PageTransition(event){
		event.target.name == "right"?
		(
			page != props.projects.length-1?
				(setPage((page + 1) % props.projects.length)):
				(setPage(page))
		):
		(page != 0?
			(setPage((page - 1) < 0? props.projects.length - 1: page - 1)):
			(setPage(page))
		)
		
	}
	return (
		<div className="FullScrImgRow">
			<button className="rightBtn" onClick = {PageTransition} style={page == props.projects.length - 1?{opacity:0.3, transform:"scale(0.95)"}:{}}>
				<img 
					src="https://cdn.iconscout.com/icon/free/png-256/keyboard-left-arrow-1780092-1518653.png" 
					alt=""
					name = "right" 
					style = {{transform:"rotate(180deg)"}}
				/>
			</button>
			<button className="leftBtn" onClick = {PageTransition}style={page == 0?{opacity:0.3, transform:"scale(0.95)"}:{}} >
				<img 
					src="https://cdn.iconscout.com/icon/free/png-256/keyboard-left-arrow-1780092-1518653.png" 
					alt=""
					name = "left"
				/>
			</button>
			{props.projects.map((project)=>{return (<FullScrImgItem url = {project.url} text = {project.text} trans = {page} id = {project.id}/>)})}
			<h2>{props.text}</h2>
		</div>
	)
}

export default FullScrImgRow
