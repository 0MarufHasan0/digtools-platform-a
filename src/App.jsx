
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <>
    <Navbar/>
    <Suspense>
      <Banner/>
    </Suspense>
    </>
  )
}

export default App
