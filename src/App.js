
import "./App.css"
import Navbar from './components/Navbar';
import { Particles1 } from "./components/Particles";
import { TechSkill } from "./components/TechSkill";
import { Button, Heading, Text } from "@chakra-ui/react";
import Pdf from "./components/Saurav-Kumar-Resume.pdf";
import Project from "./components/Project";
import StateCalender from "./components/StateCalender";
import Contact from "./components/Contact";
import FadeIn from 'react-fade-in';
import Typewriter from "typewriter-effect";

function App() {
  
  return (
    <>
    <div className="App" id="home">
    
      <Navbar/>
      
      <div className="name">
        <h1 id="abt">Saurav Kumar</h1>
        {/* <h3 className="h3top">Full Stack Web Developer</h3> */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
        <div id="typeeff" style={{color:"#101e47",fontSize:"50px",paddingLeft:"10px"}}>
        <Typewriter
  
            onInit={(typewriter)=> {

            for(let i=0; i<100; i++){
              typewriter
            
            .typeString("Full Stack Web Developer.")
              
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcomes You.")
            .pauseFor(2000)
            .deleteAll()
            .start();
            }
            }}
            />
      </div>
        {/* <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?weight=600&size=45&pause=1000&color=F7F7F7&width=600&height=150&lines=Full+Stack+Web+Developer" alt="Typing SVG" /></a> */}
        </div>
      </div>
      
    </div>
      
      <div className="topmain">
      <FadeIn>
        <div style={{width:"95%",margin:"auto",borderRadius:"10px",backgroundColor:"#02054B",border:"none",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <Heading style={{fontFamily:"monospace",textAlign:"center",color:"white",paddingTop:"30px",fontSize:"50px",fontWeight:"bolder"}}>About Me</Heading>
          <div className="avatar">
            <img id="newResumeid" src="https://i.imgur.com/9u4Iskv.jpg" alt="" width="100%"/>
          </div>
          <div className="avatar_title" >
            <p>
            I am a Full stack web developer doing militry style coding and learning MERN Stack at Masai School. I have done various group as well as individual projects in my coding journey. I also did my B.Tech in Automobile Engineering from MCKVIE.
            </p>
            <br/>
            <Button id="resumeNew" bg="tomato" color="white" marginBottom="30px" onClick={()=>{
              let url="https://drive.google.com/file/d/1u7D7vobQ5oDAcB0wWIzjTYTPoRmBRHTu/view?usp=share_link"
              window.open(url,"_blank");
            }}><a href={Pdf} download>Resume</a></Button>
          </div>
        </div>
        </FadeIn>
      <div id="tsparticles">
      <Particles1 />
      </div>
      <FadeIn>
      <div id="skil">
        <TechSkill/>
      </div>
      </FadeIn>
      <div id="proj">
        <Project/>
      </div>
      <div>
        <StateCalender/>
      </div>
        <div id="cont">
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
