import React, {useState, useEffect} from 'react'
import '../Styles/Footer.css'
import footerUrl from '../Img/Portfolio_Bg_Footer.png'
import FooterDataWrapper from './FooterComponents/FooterDataWrapper'

function Footer(props) {
	const [footerOffset, setFooterOffset] = useState(0)
	useEffect(()=>{
		setFooterOffset(document.getElementById('ContactsId').offsetTop)	
	}, [])
	return (
		<div className="Footer" id = "ContactsId" >
			<h1 style=
			{
				props.offsetY >= footerOffset - 200?
				{
					opacity: 1,
					transform:"translateY(" + 100 + "px)" 
				}:
				{
					opacity: 0,
					transform:"translateY(" + 250 + "px)"
				}
			}>
				{props.lang === "ru"?"Мои контакты":"My contacts"}
			</h1>
			<FooterDataWrapper offsetY = {props.offsetY} footerOffset = {footerOffset}/>
			<img src={footerUrl} alt=""/>
		</div>
	)
}

export default Footer
