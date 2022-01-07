import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

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
            <h5 className="card-titl text-primary">{title}...</h5>

            {<hr className="text-primary" /> }
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
}

export default NewsItem;
