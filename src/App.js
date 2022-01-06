import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

export class App extends Component {
  render() {
    return (
      <div className="container bg-dark text-light ">
        
       
<Navbar />   
<br></br>

<News />     

      </div>
    )
  }
}

export default App
