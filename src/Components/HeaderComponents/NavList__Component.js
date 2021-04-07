import React from 'react'

function NavList__Component(props) {
	return (
		<div className="NavList__Component">
			<h4><a href={"#" + props.link}>{props.name}</a></h4>
		</div>
	)
}

export default NavList__Component
