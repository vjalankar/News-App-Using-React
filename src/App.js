import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Routes, Route} from "react-router-dom";

export class App extends Component {
  render() {

    return (
      <div className="container bg-dark text-light ">

        <Navbar />
        <br></br>
        {/* <Router> */}

          {/* <Switch>
         
            <Route path="/" ><News key="technology" pageSize={3} country={"in"} category={"technology"} /></Route>
  */}



              {/* <Route exact path="/business" > <News key="business" pageSize={3} country={"in"} category={"business"} /></Route>
              <Route exact path="/entertainment" ><News key="entertainment" pageSize={3} country={"in"} category={"entertainment"} /></Route>
              <Route exact path="/general"><News key="general" pageSize={3} country={"in"} category={"general"} /></Route>
              <Route exact path="/health" > <News key="health" pageSize={3} country={"in"} category={"health"} /> </Route>
              <Route exact path="/science"><News key="science" pageSize={3} country={"in"} category={"science"} /></Route>
              <Route exact path="/sports"><News key="sports" pageSize={3} country={"in"} category={"sports"} /></Route>
              <Route exact path="/technology"><News key="technology" pageSize={3} country={"in"} category={"technology"} /></Route> */}

                {/* <Route path="/sports" exact component={<News key="sports" pageSize={3} country={"in"} category={"sports"} />} /> */}



         {/* </Switch> */}
          



{/* </Router> */}

      <Routes>
      <Route exact path="/" element={<News key="technology" pageSize={3} country={"in"} category={"technology"} />} />

        <Route exact path="/business"  element={<News key="business" pageSize={3} country={"in"} category={"Business"} />} />
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
