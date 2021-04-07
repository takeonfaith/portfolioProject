import React, {useState, useEffect} from 'react'

function MobileMenuBtn(props) {
	function handleMenu(){
		props.callbackMenuFunc(!props.menuVal)
	}

	return (
		<div className="MobileMenuBtn" 
		style = 
			{
				props.offsetY> 1?
				{
					background: "rgba(245, 245, 245, 1)"
				}:
				{}
			}
		>
			<button onClick = {handleMenu}>
				<span className="Stick" style = 
					{
						props.menuVal?
						{
							width: 0,
							opacity:0
						}:
						{}
					}
				></span>
				<span className="Stick" style = 
					{
						props.menuVal?
						{
							top: 18 + "px",
							transform:"rotate(45deg)"
						}:
						{}
					}
				></span>
				<span className="Stick" style = 
					{
						props.menuVal?
						{
							bottom: 18 + "px",
							transform:"rotate(-45deg)"
						}:
						{}
					}
				></span>
			</button>
		</div>
	)
}

export default MobileMenuBtn
