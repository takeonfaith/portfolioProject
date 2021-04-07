import React from 'react'

function BubbleWrapper(props) {
	return (
		<div>
			<span className="bubble" style=
			{
				props.offsetY < 300?
				{
					transform:"translateY(" + -props.offsetY + "px) scale(" + (1 - props.offsetY/600) + ")", 
					opacity: (1 - props.offsetY/105)
				}:
				{
					transform:"translateY(" + -200 + "px) scale(" + 0 + ")", 
					opacity: 0
				}
			}
			></span>
			<span className="bubble" style={
				props.offsetY < 300?
				{
					transform:"translateY(" + -props.offsetY/2 + "px) scale(" + (1 - props.offsetY/800) + ")", 
					opacity: (1 - props.offsetY/75)
				}:
				{
					transform:"translateY(" + -200 + "px) scale(" + 0.7+ ")", 
					opacity: 0
				}
					
			}
			></span>
			<span className="bubble" style=
			{
				props.offsetY < 300?
				{
					transform:"translateY(" + -props.offsetY/4 + "px) scale(" + (1 - props.offsetY/700) + ")", 
					opacity: (1 - props.offsetY/305)
				}:
				{
					transform:"translateY(" + -200 + "px) scale(" + (0.7) + ")", 
					opacity: 0
				}
			}
			></span>
			<span className="bubble" style=
			{
				props.offsetY < 300?
				{
					transform:"translateY(" + -props.offsetY/6 + "px) scale(" + (1 - props.offsetY/400) + ")", 
					opacity: (1 - props.offsetY/55)
				}:
				{
					transform:"translateY(" + -200 + "px) scale(" + (0.7) + ")", 
					opacity: 0
				}
			}
			></span>
		</div>
	)
}

export default BubbleWrapper
