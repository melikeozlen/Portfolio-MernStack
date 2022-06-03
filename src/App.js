import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Post from "./components/Post";
import NotFound from  "./components/NotFound/NotFound"
const App = () => {
  const [lang, setLang]=useState("ENG");
  
    return (
      <div className='w-full h-screen h-min-screen bg-primary-light dark:bg-primary-extra-dark'>
      <React.Fragment>
        <Header lang={lang} setLang={setLang}/>
        <Routes>
          <Route exact path='https://melikeozlen.herokuapp.com/' element={<Main lang={lang} />} />
          <Route path='https://melikeozlen.herokuapp.com/post' element={<Post lang={lang}/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </React.Fragment>
      </div>
    );
  
}

export default App