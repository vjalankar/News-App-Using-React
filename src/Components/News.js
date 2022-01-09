import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

 static defaultProps = {

    country: "in",
    pageSize: 3,
    category: "science"
  }

  static propTypes = {

    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  async updateNews(props) {
    this.props.setProgress(0);
    console.log("component did mount")
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      status:parsedData.status,
      

    })

    this.props.setProgress(100)

  }


  async componentDidMount() {
    
    if(!this.state.articles.length===0)
    {
      this.runThisIfEmptyResponse()
    }
  else{
    this.updateNews();
  }

  }



  captialiseFirstLetter = (string) => {

    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  NewshandleOnNextCLick = async () => {
    console.log('next button clicked')
    this.setState({ page: this.state.page + 1 })
    

  }


  NewshandleOnPrevCLick = async (event) => {

    this.setState({ page: this.state.page - 1 });
    this.updateNews()


  }

  articles = [


  ];

  status=[];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,



    }

    if(!this.articles){

      alert('sdfsdf')

    }

    document.title = `${this.captialiseFirstLetter(this.props.category)}`;



  }


  runThisIfEmptyResponse() {

    if (this.state.totalResults === 0) {

      console.log("Status is "+this.state.status)
      return <h3 className="h3 text-center text-light">Something went wrong</h3>

    }

    else if(this.state.status==="error"){
      console.log(this.state.status)
      return <h3 className="h3 text-center text-light">Something went wrong</h3> 
    }

    else{
      return <h3 className="h3 text-center text-light">Fetching More News</h3>
  
    }

  }

   fetchMoreData = async () => {
    this.setState({page:this.state.page+1});
    console.log("component did mount")
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,


    })



   };
 
 



  render() {

    return (
      <div className="container text-black my-3">
        <h2 className="h2 text-warning text-center">Top Headlines from {this.captialiseFirstLetter(this.props.category)}</h2>


       


         {this.state.loading  && <Spinner />}
        

        <hr className="text-light" />
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >



        <div className="row">





            {this.state.articles.map((element) => {

              if(!this.state.articles)
              {
                alert('something went wrong please try again')
              }


              return (
                <div className="col-md-4" key={element.url}>

                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>


              );


            })}

        
          


        




          {/* <div className="d-flex justify-content-between p-3">

            <button disabled={this.state.page <= 1} className="btn btn-outline-primary" onClick={this.NewshandleOnPrevCLick}> &larr; Previous</button>

            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-warning" onClick={this.NewshandleOnNextCLick}> Next &rarr;</button>


          </div> */}






        </div>

        </InfiniteScroll >
        
      </div>
    );
  }
}

export default News;
