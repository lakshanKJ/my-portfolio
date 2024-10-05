import React from 'react';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar'
import FM from './Projects/Foetal-Movement-Detection/FM';
import StreamPlatform from './Projects/Streaming platform/Streaming';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="App"> */}
        <Navbar /> {/* Render the Navbar */}


      </header>

      <div style={{ marginTop: '35px' }}>

        <div id="home" style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects, skills, and get in touch!</p>
          <Home></Home>
        </div>
        {/* Sections corresponding to navbar links */}
        <div id="about" style={{ padding: '50px', backgroundColor: '#E2F1E7' }}>
          <h2 style={{ color: '#387478' }}>About Me</h2>
          <p>This is the About section.</p>
        </div>
        <div id="projects" style={{ padding: '50px' }}>
          <h2 style={{ color: '#387478' }}>Projects</h2>
          <p>This is the Projects section.</p>
          <br></br>
          <FM></FM>
          <br></br>
          <StreamPlatform></StreamPlatform>
        </div>
        <div id="contact" style={{ padding: '50px', backgroundColor: '#E2F1E7' }}>
          <h2 style={{ color: '#387478' }}>Contact</h2>
          <p>This is the Contact section.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
