import React,{useState} from 'react'
import {AiOutlineInfoCircle} from "react-icons/ai"
const Header = ({lang, setLang}) => {
  const [theme, setTheme]=useState("LIGHT");
  const my_html = document.querySelector("html");
  
  if(theme==="DARK"){
    my_html.className="dark";
  }
  else {my_html.className="light";}

  return (
    <header className="w-full h-1/4 pt-6 bg-primary-light flex justify-end px-8 items-center 
    dark:bg-primary-extra-dark gap-2">
     <button className=' relative before:absolute before:w-36 before:rounded-md before:h-32 before:bg-primary-400 before:top-7 before:z-[50] md:before:top-5 md:before:right-5 before:hidden
     hover:before:block before:transition-all  before:duration-1000 before:font-mono before:text-xs before:text-primary-light before:p-4 before:content-["Bu_portfolyoda_kullanılan_teknolojiler:__+MERN_Stack__+Tailwind__+Framer_Motion"]'
     
     ><AiOutlineInfoCircle className='text-primary-400'/></button> 
      
      
      <button className="w-12 h-8 border-2 text-xs 
      bg-primary-300 text-primary-400 mr-1 font-bold border-primary-400
      dark:bg-transparent dark:text-primary-300  dark:border-primary-300 "
       onClick={()=> setTheme(theme==="DARK" ? "LIGHT":"DARK" )}>
      {theme==="DARK" ? "LIGHT":"DARK"}
      </button>

      <button className="w-12 h-8 border-2 text-xs 
      dark:bg-primary-300  dark:text-white font-bold  
      bg-primary-400 text-primary-light border-primary-400 
          "
      onClick={()=> setLang(lang==="TR" ? "ENG":"TR" )}>
      {lang==="TR" ? "ENG":"TR"}
      </button>
    </header>
  )
}

export default Header