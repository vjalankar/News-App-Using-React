import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  
  setProgress =(progress)=>{

    this.setState({progress:progress})

  }
  
  state ={

    progress:10
  }
  
  
  render() {

    return (
      <div className="container bg-dark text-light ">

        <Navbar />

        <LoadingBar
        color='#f11946'
        
        progress={this.state.progress}
        
           />
        
        
        <br></br>

      <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="technology" pageSize={3} country={"in"} category={"technology"} />} />

          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business"  pageSize={3} country={"in"} category={"Business"} />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={3} country={"in"} category={"entertainment"} />} />
          <Route exact path="/General" element={<News setProgress={this.setProgress} key="general" pageSize={3} country={"in"} category={"general"} />} />
          <Route exact path="/Health" element={<News setProgress={this.setProgress} key="health" pageSize={3} country={"in"} category={"health"} />} />
          <Route exact path="/Science" element={<News setProgress={this.setProgress} key="science" pageSize={3} country={"in"} category={"Science"} />} />
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="sports" pageSize={3} country={"in"} category={"sports"} />} />
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={3} country={"in"} category={"technology"} />} />


        </Routes>



      </div>
    )

  }
}

export default App
