import React  from "react";

const NewsItem=(props)=>  {
  
    let { title, description, imageUrl, newsUrl,source} = props;

    return (
      <div>
        <div className="card bg-dark text-light text-justify shadow rounded p-2" >
          
          
          {console.title}

          <img
            src={imageUrl}
            className="card-img-top img-fluid img-responsive" style={{ objectFit: "fill" }}

            alt="can not be displayed at this moment "


          />
          <hr className="text-warning" />

          <div className="card-body ">


            <h5 className="card-title text-primary">{title}...</h5>   



            <p className="bg-white shadow p-2 mb-1 ard-text text-right text-black" style={{float:"right"}}> - {source}</p>

      <br />  
      <br />
            {<hr className="text-primary mb-3" /> }
            <p className="card-text text-light ">{description}...</p>
        
            <hr className="text-light" />

            <center> <a
              href={newsUrl} target="_blank" rel="noreferrer"
              className="btn btn-outline-primary "
            >
              Read Full News
            </a>
            </center>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
