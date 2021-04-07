import React, {useState} from 'react'
import '../Styles/MobileMenu.css'
import LangBtns from './HeaderComponents/LangBtns'
import NavList from './HeaderComponents/NavList'
import MobileMenuNavList from './MobileMenuComponents/MobileMenuNavList'
function MobileMenu(props) {
	function closeMenu(){
		props.callbackMenuFunc(!props.menuVal)
	}

	return (
		<div className="MobileMenu" onClick={closeMenu} style=
			{
				props.menuVal?
				{
					transform:"translateY(0%)", 
					opacity: 1
				}:
				{
					height: 200 + "%",
					transform:"translateY(100%)", 
					opacity: 0
				}
			}
		>
			<div className="MenuReal" style=
				{
					props.menuVal?
					{
						transform:"translateY(0%)", 
						opacity: 1
					}:
					{
						height: 110 + "%",
						borderRadius: 100 + "px",
						transform:"translateY(100%)", 
						opacity: 0
					}
				}
			>
				<MobileMenuNavList lang = {props.lang} callbackMenuFunc ={props.callbackMenuFunc} menuVal = {props.menuVal}/>
				<LangBtns lang = {props.lang} langFunc = {props.langFunc}/>
				<span className="circle1" style = 
					{
						props.menuVal?
						{
							transform: "translateY(0%) scale(1)",
							opacity:.7
						}:
						{
							transform: "translateY(20%) scale(3)",
							opacity:0
						}
					}
				></span>
			</div>
		</div>
	)	
}

export default MobileMenu
