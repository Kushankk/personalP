import { useState } from 'react'
import Work from "./compo/Work"
import Who from './compo/Who'
import Hero from './compo/Hero'
import Contact from './compo/Contact'




function App() {

  return(
    
    <div className='App'>
      
      <Hero />
      <Who />
      <Work />
      <Contact />
      
    </div>
  )
}


export default App
