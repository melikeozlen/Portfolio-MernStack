
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostItem from "../PostItem";
import {IoIosArrowBack} from "react-icons/io"
import {DiCoffeescript} from "react-icons/di"
import eclipse from "../../img/Eclipse.svg"
const Post = ({lang}) => {
  const [postdata, setPost] = useState([]);
  const [dataLength , setDataLength]=useState();
  useEffect(() => {
    fetch("https://melikeozlen-portfolio.herokuapp.com/getproject/")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setDataLength(data.length);
      });
  }, []);
  return (
    <div className="w-full h-max 
    dark:bg-primary-extra-dark
    bg-primary-light
     ">
      <Link className="inline-block dark:text-primary-400 text-primary-dark font-medium ml-2" to='https://melikeozlen.herokuapp.com/'>
        <IoIosArrowBack className="inline-block dark:text-primary-400 text-primary-dark"/> Back
      </Link>
      {
        postdata.length ==dataLength ? 
      
      <div className='scale-90 sm:mx-16 md:mx-4 lg:mx-10 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  grid-auto-flow-dense'>
        {postdata.map((post, index) => {
          return <PostItem key={index} postValue={post} lang={lang} index={index}/>;
        })}
      </div>
    
    : 
    <div className="w-full relative pt-24 flex flex-col justify-center items-center  text-center">
      <DiCoffeescript className="text-6xl absolute text-primary-400"/>
      <img src={eclipse} className="absolute"
      />

    </div>
    }
    </div>
  );
};

export default Post;