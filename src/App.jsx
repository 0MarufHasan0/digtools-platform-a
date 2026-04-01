
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Stats from './Components/Stats'
import DigitalToolsData from './Components/DigitalToolsData'
import GetStart from './Components/GetStart'
import PricingCart from './Components/PricingCard'
import PricingCard from './Components/PricingCard'


const digitalToolsData = async () => {
   const res = await fetch ("/Data.json")
   return res.json()

}

const digitalTools  = digitalToolsData() 

function App() {
 
  
 

  return (
    <>
    <Navbar/>
      <Banner/>
        <Stats/>

       
       <Suspense fallback = {<span class="loading loading-spinner text-success"></span>}>
       
          <DigitalToolsData digitalTools={digitalTools} />
        
      </Suspense>
      
<GetStart/>
<PricingCard/>
     
  
       
        
    </>
  )
}

export default App
