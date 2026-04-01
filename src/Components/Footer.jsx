import React from 'react';
import instagram from "../assets/Instagram.png"
import facebook from "../assets/Facebook.png"
import twitter from "../assets/Twitter.png"

const Footer = () => {
    return (
        <div>

            <div className='bg-[#101727] '>

            

            <footer className="footer   sm:footer-horizontal text-neutral-content p-15 mt-30">
                 
   <div className='space-y-2'>
     <h1 className=" text-4xl  font-bold text-white">DigiTools</h1>
    <p className="text-gray-300 md:footer-title">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
   </div>
    
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a> 
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact     </a>
  </nav>


   
  <nav>
    <h6 className="footer-title">Social <span className="ml-2">Links</span></h6>
    <div className="grid grid-flow-col gap-4">
      <a>
      <img src={instagram} alt="Instagram" className=" h-8 w-8"/>
      </a>
      <a>
        <img src={facebook} alt="Facebook" className=" h-8 w-8"/>
      </a>
      <a>
        <img src={twitter} alt="Twitter" className=" h-8 w-8"/>
      </a>
    </div>
  </nav>

 

 
  
</footer>

 <div className='p-10'>
   <div className="ml-0 md:ml-30 mr-30 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-around gap-4 text-sm text-zinc-500">
          <div> © 2026 Digital tools. All rights reserved.</div>

          <div className="space-x-4">
            <a href="#" >
             Privacy Policy
            </a>
            <a href="#" >
             Terms of Service
            </a>
            <a href="#" >
             Cookies
            </a>
          </div>
        </div>
  </div>

</div>

 
            
        </div>
    );
};

export default Footer;