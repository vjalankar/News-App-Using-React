import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { ReactSession } from 'react-client-session';
const App=() =>{

const apiKey=process.env.REACT_APP_NEWS_API_KEY


const setProgress = (progress) => {

    state({ progress: progress })

  }

 const state = {

    progress: 0,
    searchData: null
  }



  

    ReactSession.setStoreType("sessionStorage")
    


    return (
      <div className="container bg-dark text-light ">

  <Navbar />

        <LoadingBar
          height={2}
          color='orange'

          progress={state.progress}

        />


        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={3} country={"in"} category={"technology"}  />} />

          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}   key="business" pageSize={3} country={"in"} category={"Business"} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={3} country={"in"} category={"entertainment"} />} />
          <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={3} country={"in"} category={"general"} />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={3} country={"in"} category={"health"} />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={3} country={"in"} category={"Science"} />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={3} country={"in"} category={"sports"} />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress}apiKey={apiKey}  key="technology" pageSize={3} country={"in"} category={"technology"} />} />


        </Routes>



      </div>
    )

  
}

export default App