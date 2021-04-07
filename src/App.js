import React, {useState, useEffect} from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Projects from './Components/Projects';
import TopSection from './Components/TopSection';
import Skills from './Components/Skills'
import MobileMenu from './Components/MobileMenu';
import FullScrProjects from './Components/FullScrProjects';

function App() {
  const [lang, setLang] = useState("ru")
  const [offsetY, setOffsetY] = useState(0)
  const [menu, setMenu] = useState(false)
  const [fullProjects, setFullProjects] = useState(false)
  
	const handleScroll = () => setOffsetY(window.pageYOffset)
  
  const imgs = [
		{
			id: 1,
			url:"https://cdn.dribbble.com/users/427857/screenshots/14630301/media/2d02ff854cf2d41e37822ecfcc842d33.png",
			text:lang === "ru"?"Музыкальное приложение":"Music Streaming App"
		},
		{
			id: 2,
			url:"https://cdn.dribbble.com/users/5031392/screenshots/14629553/media/a12ef56e4f4601612ceb79a2ca8e1991.png",
			text:lang === "ru"?"Музыкальное приложение1":"Music Streaming App"
		},
		{
			id: 10,
			url:"https://cdn.dribbble.com/users/816967/screenshots/14629203/media/67760ef4ca7674190d05e0c9028faf03.png",
			text:lang === "ru"?"Личный кабинет вуза":"Student's profile"
		},
		{
			id: 20,
			url:"https://cdn.dribbble.com/users/509287/screenshots/14652855/media/96bbf41a555c7f5ff6da2e288fb9751c.png",
			text:lang === "ru"?"Музыкальное приложение2":"Music Streaming App"
		},
		{
			id: 100,
			url:"https://cdn.dribbble.com/users/182336/screenshots/14630755/media/91b7739576d0b9e296b00241adaa63d5.png",
			text:lang === "ru"?"Еще что-то":"Something else"
		},
		{
			id: 200,
			url:"https://cdn.dribbble.com/users/5864847/screenshots/14593772/media/22493357cd3ddb8f30a9b377da0f6c52.jpg",
			text:lang === "ru"?"Музыкальное приложение3":"Music Streaming App"
		},
	]

	useEffect(()=>{
	  window.addEventListener('scroll', handleScroll);
		console.log(offsetY)
	  return () => window.removeEventListener("scroll", handleScroll);
	},[])


  function langFunc(l){
    setLang(l);
  }

  function callbackMenuFunc(m){
    setMenu(m)
  }

  function callbackFullProjectsFunc(p){
    setFullProjects(p)
  }
  if(fullProjects || menu){
		document.body.style.overflowY = "hidden";
  }
  else{
		document.body.style.overflowY = "auto";
  }

  return (
    <div className="App" >
      <MobileMenu lang = {lang} langFunc = {langFunc} menuVal = {menu} callbackMenuFunc = {callbackMenuFunc}/>
      <FullScrProjects projects = {imgs} fullProjects = {fullProjects} callbackFullProjectsFunc = {callbackFullProjectsFunc}/>

      <Header 
        langFunc = {langFunc} 
        lang = {lang} 
        offsetY = {offsetY} 
        callbackMenuFunc = {callbackMenuFunc} 
        menuVal = {menu}
        fullProjects = {fullProjects}
        />
      <TopSection lang = {lang} offsetY = {offsetY}/>
      <AboutMe lang = {lang} offsetY = {offsetY}/>
      <Projects lang = {lang} offsetY = {offsetY} projects = {imgs} callbackFullProjectsFunc = {callbackFullProjectsFunc} fullProjects = {fullProjects}/>
      <Skills lang = {lang} offsetY = {offsetY}/>
      <Footer lang = {lang} offsetY = {offsetY}/>
    </div>
  );
}

export default App;
