import React from 'react'
import Tilt from 'react-tilt'
function ProjectItem(props) {
	return (
		
		<Tilt className = "TiltCover" options = {{max: 10, scale: 0.96}}>
			<div className="ProjectItem">
				<img src={props.imgUrl} alt="" style=
				{
					{
						width: "100%",
						borderRadius: "10px",
					}
				}/>
			</div>
		</Tilt>
		
	)
}

export default ProjectItem
