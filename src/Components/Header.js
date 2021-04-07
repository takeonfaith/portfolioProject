import React, {useState} from 'react'
import '../Styles/Header.css'
import NavList from './HeaderComponents/NavList'
import MobileMenuBtn from './HeaderComponents/MobileMenuBtn';
import LangBtns from './HeaderComponents/LangBtns';
function Header(props) {
	const [down, setDown] = useState(false)


	const scrollTop = () =>{
		window.scrollTo({top: 0, behavior: 'smooth'});
	};
	return (
		<div className={!props.fullProjects? "Header": "HeaderHidden"} style=
		{
			props.offsetY > 1 || props.menuVal? 
			{
				boxShadow:"0 0 5px black", 
				background:"#fff", 
				animation: "headerAnima 1s"
			}:
			{
				boxShadow:"0 0 0", 
				background:"transparent", 
				animation: "noAnima .8s"
			}
		}
		>
			<div className="Logo" onClick={scrollTop} onMouseDown={()=>setDown(true)} onMouseUp={()=>setDown(false)} style = 
			{
				down?
				{
					transform:"scale(.95)"
				}:
				{
					transform:"scale(1)"
				}
			}>
				Portfolio
			</div>
			<NavList lang = {props.lang}/>
			<LangBtns offsetY = {props.offsetY} lang = {props.lang} langFunc = {props.langFunc}/>
			<MobileMenuBtn offsetY={props.offsetY} callbackMenuFunc = {props.callbackMenuFunc} menuVal = {props.menuVal}/>
		</div>
	)
}

export default Header
