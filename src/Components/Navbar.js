import React from 'react'
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session'







const readData = () => {

  ReactSession.setStoreType("sessionStorage");
  let searchData = document.getElementById("search").value
  if (searchData === null) {
    ReactSession.set("categoryValue", "")
    return false;

  }
  else {
    ReactSession.set("categoryValue", searchData)
    return true;
  }


}



const Navbar =(props)=> {

return (
<>

      <div>


        <nav className="navbar shadow my-3 navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>

                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>

                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>

                </li>


                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>

                </li>


              </ul>
              <form className="d-flex" method="get" onSubmit={readData} >
                <input className="form-control me-2" id="search" type="search" placeholder="Enter category" />
                <button className="btn btn-outline-success" type="submit" >Search</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
</>
    
  
)};

export default Navbar
