import type React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'

const App: React.FC = () => {
  return (
    <>
      <Header /> 

      <div id='app'>
        <Intro />

        {/* <div id=''></div> */}
      </div>

    </>
  )
}

export default App
