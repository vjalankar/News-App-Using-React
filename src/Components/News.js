import React, { useEffect,useState } from "react";



import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactSession } from 'react-client-session';


const News=(props)=> {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResult] = useState(0)
  // const [status, setstatus] = useState(true)

const updateNews=async ()=>{
    let cat=ReactSession.get("categoryValue")
    console.log(cat)
    props.setProgress(10);
    console.log("component did mount")
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${cat===""?props.category:cat}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    console.log(url)
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    console.log(parsedData)
    props.setProgress(70)

    setArticles(parsedData.articles)
    settotalResult(parsedData.totalResults)
    setLoading(false)
  //  setstatus(true)

    props.setProgress(100)

  }

  // articles = [


  // ];

  useEffect(() => {

    
    updateNews();

    if(articles.length===0)
    {
      alert('API LIMIT Exhasted Please try again tomorrow')
    }
   
   
    return function cleanUp() {
    ReactSession.set("categoryValue","")
    };

  });

 




  // componentDidUpdate()
  // {

  //   if (this.state.articles.length === 0) {
  //     //this.runThisIfEmptyResponse()

     
  //     return "<h3 class='h3 text-warning '>something went wrong</h3>";
      
  //   }
    
  // }

  // componentWillUnmount(){

  //   ReactSession.set("categoryValue","")


  // }


 const captialiseFirstLetter = (string) => {

    return string.charAt(0).toUpperCase() + string.slice(1);
  }



//  const NewshandleOnNextCLick = async () => {
//     console.log('next button clicked')
//     setpage(page + 1 )
//     updateNews()



//   }


// const  NewshandleOnPrevCLick = async (event) => {

//   setpage(page - 1)  
//   this.updateNews()


//   }



  

    
    //  let cat=ReactSession.get("categoryValue");

  //   document.title = `${
  //    this.captialiseFirstLetter(this.setCatValue()===""?props.category:this.setCatValue())}`;



  // };
    

  // const runThisIfEmptyResponse=()=> {

  //   if (totalResults === 0) {

  //     console.log("Status is " + status)
  //     return <h3 className="h3 text-center text-light">Something went wrong</h3>

  //   }

  //   else if (status === "error") {
  //     console.log(status)
  //     return <h3 className="h3 text-center text-light">Something went wrong</h3>
  //   }

  //   else {
  //     return <h3 className="h3 text-center text-light">Fetching More News</h3>

  //   }

  // }

 

const  fetchMoreData = async () => {
    let cat=ReactSession.get("categoryValue")
    console.log(cat)
   
    setpage(page+1)
    //this.setState({ page: this.state.page + 1 });
    console.log("component did mount")
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${cat===undefined?props.category:cat}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    settotalResult(parsedData.totalResults)
    setLoading(true)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,


    // })



  };


  
  const setCatValue=()=>{

    let cat=ReactSession.get("categoryValue");
    return cat;
   
  }



 
    return (
      <>

      <div className="container text-black my-3">

    
        <h2 className="h2 text-warning text-center">Top Headlines from {captialiseFirstLetter(setCatValue()===undefined?props.category:setCatValue())}</h2>




        {loading && <Spinner />}


        <hr className="text-light" />
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >



          <div className="row">





            {articles.map((element) => {

              if (!articles) {
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

            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-outline-warning" onClick={this.NewshandleOnNextCLick}> Next &rarr;</button>


          </div> */}






          </div>

        </InfiniteScroll >

      </div>
      </>
    );
  
}

News.defaultProps = {

  country: "in",
  pageSize: 3,
  category: "science"
}

News.propTypes = {

  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}




export default News;