
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Stats from './Components/Stats'

function App() {
 

  return (
    <>
    <Navbar/>
      <Banner/>
        <Stats/>
    </>
  )
}

export default App
