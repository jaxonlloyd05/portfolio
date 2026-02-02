import type React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <>
      <Header /> 

      <div id='app'>
        <Intro />
        <AboutMe />
        <Experience />
        <Projects />
      </div>

    </>
  );
}


export default App;
