import React from 'react'

function FullScrImgItem(props) {
	return (
		
		<div className = "FullScrImgItem" style = 
		{
			props.id - 1 == props.trans || (props.id - 100)/100 == props.trans || (props.id - 10)/10 == props.trans?
			{
				transform:"translateX(" + (-props.trans*100) + "%) scale(1)",
				borderRadius: 20 + "px"
			}:
			{
				transform:"translateX(" + (-props.trans*100) + "%) scale(0.8)",
				opacity: 0.2,
				borderRadius: 100 + "px",
			}
		}>
			<img src={props.url} alt="" style = 
		{
			props.id - 1 == props.trans || (props.id - 100)/100 == props.trans || (props.id - 10)/10 == props.trans?
			{
				borderRadius: 20 + "px"
			}:
			{
				borderRadius: 100 + "px",
			}
		}/>
		</div>
	)
}

export default FullScrImgItem
