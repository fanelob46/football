import { useState } from 'react'

import NavBar from './Componets/NavBar'
import Leagues from './Componets/Leagues'
import Filter from './Filter'

function App() {
 
  return (
    <>
   <NavBar/>
   
   <Leagues/>
   <Filter/>
    </>
  )
}

export default App
