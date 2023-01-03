
import "./App.css"
import Navbar from './components/Navbar';
import { Particles1 } from "./components/Particles";
import { TechSkill } from "./components/TechSkill";


function App() {
  
  return (
    <>
    <div className="App">
    
      <Navbar/>
      
      <div className="name">
        <h1>SAURAV KUMAR</h1>
        <h3 className="h3top">Full Stack Web Developer</h3>
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
      </div>
      <div id="tsparticles">
      <Particles1 />
      </div>
      <div>
        <TechSkill/>
      </div>
      </div>
    </>
  );
}

export default App;
