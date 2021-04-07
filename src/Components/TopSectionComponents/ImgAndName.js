import React from 'react'
import Me2 from '../../Img/Me2.jpg'
function ImgAndName(props) {
	function goToBottom(){
		window.scrollTo(0, document.querySelector(".App").scrollHeight)
	}
	return (
		<div className="ImgAndName" style=
			{
				props.offsetY < 300?
				{
					transform:"translateY(" + -props.offsetY/2 + "px)", opacity: (1 - props.offsetY/145)
				}:
				{
					transform:"translateY(" + -200 + "px) scale(" + (0.7) + ")", 
					opacity: 0
				}
			}>
				<img className = "myImg" src={Me2} alt=""/>
				<h1>{props.lang === "ru"? "Константин Долоз": "Konstantin Doloz"}</h1>
				<div className="Email" >
					<img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-256.png" alt="" onClick={goToBottom}/>
					<h4>{props.lang === "ru"? "Напиши мне":"Email me"}</h4>
				</div>
		</div>
	)
}

export default ImgAndName
