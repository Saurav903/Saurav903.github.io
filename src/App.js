
import "./App.css"
import Navbar from './components/Navbar';
import { Particles1 } from "./components/Particles";
import { TechSkill } from "./components/TechSkill";
import { Button } from "@chakra-ui/react";
import Pdf from "./components/Saurav_Kumar_Resume.pdf";
import Project from "./components/Project";
import StateCalender from "./components/StateCalender";

function App() {
  
  return (
    <>
    <div className="App">
    
      <Navbar/>
      
      <div className="name">
        <h1>SAURAV KUMAR</h1>
        {/* <h3 className="h3top">Full Stack Web Developer</h3> */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?weight=600&size=45&pause=1000&color=F7F7F7&width=600&height=150&lines=Full+Stack+Web+Developer" alt="Typing SVG" /></a>
        </div>
      </div>
    </div>
      <div className="topmain">
      <div className="avatar">
        <img src="https://i.imgur.com/9u4Iskv.jpg" alt="" width="100%"/>
      </div>
      <div className="avatar_title">
        <p>
        I am a Full stack web developer doing militry style coding and learning MERN Stack at Masai School. I have done various group as well as individual projects in my coding journey. I also did my B.Tech in Automobile Engineering from MCKVIE.
        </p>
        <br/>
        <Button display={{ md: 'none' }} bg="red.400" color="white"><a href={Pdf} download>Resume</a></Button>
      </div>
      <div id="tsparticles">
      <Particles1 />
      </div>
      <div>
        <Project/>
      </div>
      <div>
        <StateCalender/>
      </div>
      <div>
        <TechSkill/>
      </div>
      </div>
    </>
  );
}

export default App;
