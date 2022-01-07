import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export class News extends Component {

  static defaultProps = {

    country:"in",
    pageSize:3,
    category:"science"
}

static propTypes = {

  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


  async componentDidMount(){
   console.log("component did mount")
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
   this.setState({loading: true});
   let data=await fetch(url);
   let parsedData=await data.json();
   console.log(parsedData)
   this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults,
    loading: false
  
  })
  }


  




NewshandleOnNextCLick=async ()=>{
  console.log('next button clicked')

  if(!(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  
  this.setState({loading: true});
  
  let data=await fetch(url)
  let parsedData=await data.json();
  this.setState({loading: false});
  
 
  this.setState({

    

page:this.state.page+1,
articles:parsedData.articles,
loading:false


})
}
  }


  NewshandleOnPrevCLick=async (event)=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url)
    let parsedData=await data.json();
    console.log("prev clicked")


    this.setState({
  
      
  
  page:this.state.page - 1,
  articles:parsedData.articles,
  loading: false
  

  
  })


  }

  articles = [
   

  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,

    };
  }


  runThisIfEmptyResponse() {

    if(this.state.totalResults===0){

     
     return <h3 className="h3 text-center text-light">Something went wrong</h3>

    }
  
  }

  
  render() {

    return (
      <div className="container text-black my-3">
        <h2 className="h2 text-warning text-center">Top Headlines </h2>

        {this.state.loading &&  <Spinner />}

        <hr className="text-light" />
      
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
         
         return (
              <div className="col-md-4" key={element.url}>
                
                <NewsItem
                  title={element.title?element.title.slice(0,44):""}
                  description={element.description?element.description.slice(0,88):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );

            
          })}

         {
              this.runThisIfEmptyResponse()
         
         }
          
          <div className="d-flex justify-content-between p-3">

        <button disabled={this.state.page<=1} className="btn btn-outline-primary" onClick={this.NewshandleOnPrevCLick}> &larr; Previous</button>
 
        <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)}  className="btn btn-outline-warning"  onClick={this.NewshandleOnNextCLick}> Next &rarr;</button>
          
        <Button variant="contained">Hello World</Button>;

          </div>


        </div>
      </div>
    );
  }
}

export default News;
