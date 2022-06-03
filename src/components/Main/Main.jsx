import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdEmail } from "react-icons/md";  
import { BsFileEarmarkPdfFill } from "react-icons/bs";  
import bubble from "../../img/bbl.png"
import { motion } from "framer-motion"
const Main = ({lang}) => {
  const [whatAmILearning, setWhatAmILearning] =useState([]);
  const [whatAmIUsing, setWhatAmIUsing] =useState([]);

  useEffect(() => {
    fetch("https://melikeozlen-portfolio.herokuapp.com/getteknology/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWhatAmILearning(data[0].whatAmILearning);
        setWhatAmIUsing(data[0].whatAmIUsing);

      });
  }, []);
console.log(whatAmILearning);
  return (
    <div
      className='w-full h-11/12  pb-4 md:pb-0 md:h-3/4 px-6 md:px-12  
    bg-primary-light 
    dark:text-primary-light dark:bg-primary-extra-dark'
    >
      <h6
        className='font-light mb-0 tracking-wide text-center md:text-left
      '
      >
        {
        lang =="ENG" ? "Hello, I'm" : "Merhaba, Ben"
        }
      </h6>
      <h1
        className='font-bold text-2xl md:text-4xl  z-0 mt-2 relative tracking-wider
      text-primary-dark md:before:w-10 before:absolute before:h-4 before:bg-primary-400 before:-z-50
      before:top-3 before:-left-4 text-center md:text-left
      dark:text-primary-light md:before:block before:hidden
      '
      >
        MELİKE ÖZLEN
      </h1>
      <h2
        className='font-light mb-4 tracking-wide text-sm md:text-md
      dark:text-primary-400 text-center md:text-left
      '
      >
        Frontend | React Developer
      </h2>
      
      <div
        className='container md:w-11/12 md:h-2/3 px-6 pt-8 pb-3 flex flex-col justify-between shadow-2xl
      bg-primary-300   h-90 rounded-md
      bg-slate-800 relative
      '
      >
        <p
          className='font-light opacity-70 text-xs italic font-mono
              text-primary-light mb-2'
        >
          // Portfolio.js
        </p>

        <p
          className='md:mb-0 mb-4 font-normal dark:opacity-70 text-[0.77rem]  dark:font-light font-mono
              text-primary-light '
        >
          {
          whatAmIUsing.length === 0 ? 
          'const whatAmIUsing = [...prew, "ReactJS", "HTML", "JavaScript", "CSS", "JSON", "Redux", "Tailwind"];'
         : `const whatAmIUsing = [${whatAmIUsing[0]}, "${whatAmIUsing[1]}", "${whatAmIUsing[2]}", "${whatAmIUsing[3]}", "${whatAmIUsing[4]}", "${whatAmIUsing[5]}", "${whatAmIUsing[6]}", "${whatAmIUsing[7]}"];`
       } 
        </p>
        <p
          className='dark:font-light font-normal dark:opacity-70 text-[0.77rem] font-mono
              text-primary-light mb-2'
        >{
          whatAmILearning.length === 0 ? 
          'const whatAmILearning = ["GIT", "MERN", "Sass", "NextJS" ];'
         : `const whatAmILearning = ["${whatAmILearning[0]}", "${whatAmILearning[1]}", "${whatAmILearning[2]}", "${whatAmILearning[3]}" ];`
       } </p>

        <div className='flex md:justify-between mt-3 md:flex-row flex-col '>
        <div className="flex gap-1 md:gap-4 mb-4 ml-0 px-0">
          <a href='https://github.com/melikeozlen' target="_blank">
            <AiFillGithub
              className='text-xl hover:scale-110 text-primary-light dark:opacity-70 dark:hover:opacity-100 
              dark:hover:text-primary-400 transition-all'
            />
          </a>
          <a  href='https://www.linkedin.com/in/melikeozlen/' target="_blank">
            <AiFillLinkedin
              className='text-xl hover:scale-110 text-primary-light dark:opacity-70 dark:hover:opacity-100 
          dark:hover:text-primary-400 transition-all'
            />
          </a>
          <a  href="mailto: melikeozlen@gmail.com" target="_blank">
            <MdEmail
              className='text-xl hover:scale-110 dark:opacity-70 dark:hover:opacity-100 text-primary-light
              dark:hover:text-primary-400 transition-all'
            />
          </a>
          <a href='https://drive.google.com/file/d/1JqFpt8FnwT1NodM6GMM1v1nXwGTDzCjq/view?usp=sharing' target="_blank">
            <BsFileEarmarkPdfFill
              className='text-xl scale-90 hover:scale-110 dark:opacity-70 dark:hover:opacity-100 text-primary-light
              dark:hover:text-primary-400 transition-all'
            />
          </a>
          </div>
          <Link className="text-xs md:text-sm text-primary-400" to='/post'>My Project<MdOutlineNavigateNext className="inline-block text-lg md:text-2xl text-primary-400"/> </Link>
        </div>
      </div>
      <motion.img
        src={bubble}
        alt="ball-1"
        className="hidden lg:block w-24 h-auto absolute  right-24 cursor-pointer bottom-56 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
    </div>
  );
};

export default Main;