import React, {useState} from 'react'

function LangBtns(props) {
	const [Switch, setSwitch] = useState(false)
	const [lang, setLang] = useState(props.lang);
	const [down, setDown] = useState(false)
	
	function handleChange(l){
		console.log(l)
		setLang(l)
		props.langFunc(l)
	}

	function switchTranslator(){
		setSwitch(!Switch)
		Switch != true? handleChange("en"): handleChange("ru")
	}
	return (
		<div className="langBtns" onMouseDown={()=>setDown(true)} onMouseUp={()=>setDown(false)} style={down?{transform:"scale(.95)"}:{}}>
			<div className="langSwitch" onClick={switchTranslator} style = {props.offsetY > 1? {boxShadow:" 0 0 3px black"}:{}}>
				<h5 style={!Switch? {color:"#fff"}:{}}>RU</h5>
				<h5 style={Switch? {color:"#fff"}:{}}>EN</h5>
				<span className="innerCircle" style={Switch?{transform: "translateX(calc(100% - 3px))"}:{transform: "translateX(0%)"}}></span>
			</div>
			{/* <button onClick={()=>handleChange("ru")} style={props.lang === "ru"?{background: "#ddd6f3", transform:"scale(.85)"}:{}}>
				<img src="https://cdn.webshopapp.com/shops/94414/files/54940454/russia-flag-icon-free-download.jpg" alt=""/>
			</button>
			<button onClick={()=>handleChange("eng")} style={props.lang === "eng"?{background: "#ddd6f3", transform:"scale(.85)"}:{}}>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cL3I-Lg0JPr84eG2Ipms_tEAhB4sHbAMXQ&usqp=CAU" alt=""/></button> */}
		</div>
	)
}

export default LangBtns
