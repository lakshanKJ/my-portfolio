
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar'
import FM from './Projects/Foetal-Movement-Detection/FM';
import StreamPlatform from './Projects/Streaming platform/Streaming';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="App"> */}
        


      </header>

      <div style={{}}>
        
<div className='back-div'>
<Navbar />
        <div id="home" style={{}} className='home'>
          <Home></Home>
        </div>
        </div>
        {/* Sections corresponding to navbar links */}
        <div id="about" style={{}}>
          <h2 style={{ color: '#387478' }}>About Me</h2>
          <About></About>
        </div>
        <div id="projects" style={{}}>
          <h2 style={{ color: '#387478' }}>Projects</h2>
          <p>This is the Projects section.</p>
          <br></br>
          <FM></FM>
          <br></br>
          <StreamPlatform></StreamPlatform>
        </div>
        <div id="contact" style={{}}>
          <h2 style={{ color: '#387478' }}>Contact</h2>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
