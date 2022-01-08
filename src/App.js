import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {

    return (
      <div className="container bg-dark text-light ">

        <Navbar />
        <br></br>

        <Routes>
          <Route exact path="/" element={<News key="technology" pageSize={3} country={"in"} category={"technology"} />} />

          <Route exact path="/business" element={<News key="business" pageSize={3} country={"in"} category={"Business"} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={3} country={"in"} category={"entertainment"} />} />
          <Route exact path="/General" element={<News key="general" pageSize={3} country={"in"} category={"general"} />} />
          <Route exact path="/Health" element={<News key="health" pageSize={3} country={"in"} category={"health"} />} />
          <Route exact path="/Science" element={<News key="science" pageSize={3} country={"in"} category={"Science"} />} />
          <Route exact path="/Sports" element={<News key="sports" pageSize={3} country={"in"} category={"sports"} />} />
          <Route exact path="/Technology" element={<News key="technology" pageSize={3} country={"in"} category={"technology"} />} />


        </Routes>



      </div>
    )

  }
}

export default App
