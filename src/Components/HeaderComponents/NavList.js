import React from 'react'
import NavList_Component from './NavList__Component.js'
function NavList(props) {
	if(props.lang === "ru"){
		return (
			<div className="NavList">
				<NavList_Component name="Обо мне" link="AboutId"/>
				<NavList_Component name="Проекты" link="ProjectsId"/>
				<NavList_Component name="Навыки" link="SkillsId"/>
				<NavList_Component name="Контакты" link="ContactsId"/>
			</div>
		)
	}
	else{
		return (
			<div className="NavList">
				<NavList_Component name="About Me" link="AboutId"/>
				<NavList_Component name="Projects" link="ProjectsId"/>
				<NavList_Component name="Skills" link="SkillsId"/>
				<NavList_Component name="Contacts" link="ContactsId"/>
			</div>
		)
	}
}

export default NavList
