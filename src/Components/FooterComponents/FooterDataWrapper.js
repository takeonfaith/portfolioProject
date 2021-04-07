import React from 'react'

function FooterDataWrapper(props) {
	return (
		<div className = "FooterDataWrapper" style=
		{
			props.offsetY >= props.footerOffset - 200?
			{
				animation: "footerPopUp 1s forwards"
			}:
			{
				animation: "nofooterPopUp .3s forwards"
			}
		}>
			<h3>takeonfaith6@gmail.com</h3>
			<h3>+79885001077</h3>
			<div className="bgCircles" >
				<span className="circle"></span>
				<span className="circle"></span>
				<span className="circle"></span>
				<span className="circle"></span>
			</div>
		</div>
	)
}

export default FooterDataWrapper
