import React from 'react'
import {DiGithubFull} from "react-icons/di"
import {AiOutlineLink} from "react-icons/ai"
import { motion } from 'framer-motion'
import loadingImg from "../../img/bggif3.gif"
const PostItem = ({postValue, lang, index}) => {
  const IMG_URL = postValue.img_url;
  const PROJECT_URL = postValue.project_url;
  const bottomValue = [-250, -100, -300];
  if(index>2){
    index=0;
  }


  return (
    <motion.div
    initial={{ 
      opacity:0,
      bottom:bottomValue[index]}}
    animate={{
      opacity:1,
      bottom:0,
    }}
    
    transition={{type: "spring", mass: 1.5
    }}
    className='w-full min-h-80 h-max relative pb-5
    dark:bg-slate-700 rounded-lg shadow-2xl dark:border-b-4 dark:border-primary-400
    bg-primary-dark '>
    <img src={IMG_URL} 
        className="w-full mb-1 h-44 object-cover rounded-lg hover:scale-105 hover:transition-transform"/>

       <h3 className='uppercase font-regular text-center mb-1 mt-1 text-primary-light font-bold'>
         
        {
          lang=="ENG"? postValue.title[1]:postValue.title[0]
        }
        </h3> 
       {
        postValue.tag.map((tagItem, index)=>{
          return  <span key={index} className='px-[0.2rem] ml-1 italic text-[0.6rem] bg-[#f1f5f9b6] dark:bg-primary-400
          dark:text-primary-light rounded-md'>{tagItem}</span>
        })
      }
       <p className='px-1 ml-1 mt-2 text-xs mb-2 text-primary-light font-light opacity-90 italic'>
       {
          lang=="ENG"? postValue.description[1]:postValue.description[0]
        }
        </p>
      <a className='absolute text-primary-400  dark:text-primary-light flex gap-1 bottom-1 right-2 items-center' href={PROJECT_URL} target="_blank"><DiGithubFull
      className='text-4xl'/><AiOutlineLink className='text-xl'/></a>
    </motion.div>
  )
}

export default PostItem