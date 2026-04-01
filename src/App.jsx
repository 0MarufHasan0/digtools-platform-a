
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Stats from './Components/Stats'
import DigitalToolsData from './Components/DigitalToolsData'
import GetStart from './Components/GetStart'
import PricingCard from './Components/PricingCard'
import Footer from './Components/Footer'


const digitalToolsData = async () => {
   const res = await fetch ("/Data.json")
   return res.json()

}

const digitalTools  = digitalToolsData() 


function App() {
  const[cartCCount, setCartCount] = useState(0);
 
  
 

  return (
    <>
    <Navbar cartCCount={cartCCount}/>
      <Banner/>
        <Stats/>

       
       <Suspense fallback = {<span class="loading loading-spinner text-success"></span>}>
       
          <DigitalToolsData digitalTools={digitalTools} setCartCount={setCartCount} />
        
      </Suspense>
      
<GetStart/>
<PricingCard/>
<Footer/>
     
  
       
        
    </>
  )
}

export default App
