import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  async componentDidMount(){
    console.log("component did mount")
   let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8b5243936cd44668ad04b714bfc28037&page=1&pageSize=20";
   let data=await fetch(url);
   let parsedData=await data.json();
   console.log(parsedData)
   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
  }


NewshandleOnNextCLick=async ()=>{
  console.log('next button clicked')

  if(this.state.page +1 >Math.ceil(this.state.totalResults/20)){


  }
else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page +1}&pageSize=20`;
  let data=await fetch(url)
  let parsedData=await data.json();
 
  this.setState({

    

page:this.state.page+1,
articles:parsedData.articles


})
}
  }


  NewshandleOnPrevCLick=async (event)=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8b5243936cd44668ad04b714bfc28037&page=${this.state.page -1}&pageSize=20`;
    let data= await fetch(url)
    let parsedData=await data.json();
    console.log("prev clicked")


    this.setState({
  
      
  
  page:this.state.page - 1,
  articles:parsedData.articles
  

  
  })


  }

  articles = [
   
    // {
    //   source: { id: "abc-news-au", name: "ABC News (AU)" },
    //   author: "Dean Bilton",
    //   title:
    //     "Day one of SCG Ashes Test spoiled by rain as cricket's customs get in the way of the game",
    //   description:
    //     "Test cricket's inflexibility frustrates as much as the familiar Sydney rain on day one at the SCG, writes Dean Bilton.",
    //   url: "http://www.abc.net.au/news/2022-01-05/scg-ashes-test-day-one-frustration-rain-sydney/100739646",
    //   urlToImage:
    //     "https://live-production.wcms.abc-cdn.net.au/108d9da3cd8d8ae925e4212ee1e4ef5c?impolicy=wcms_crop_resize&cropH=2412&cropW=4288&xPos=0&yPos=296&width=862&height=485",
    //   publishedAt: "2022-01-05T08:02:01Z",
    //   content:
    //     "The SCG Test, more than any other of the Australian summer, is built on traditions both young and old.\r\nIt's a ground that sacrifices a seat for a paying customer in favour of a statue of a notorious… [+4294 chars]",
    // },
    // {
    //   source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    //   author: null,
    //   title:
    //     "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //   description:
    //     "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //   url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //   urlToImage:
    //     "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //   publishedAt: "2020-04-27T11:41:47Z",
    //   content:
    //     "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    // },

    // {
    //   source: {
    //     id: "polygon",
    //     name: "Polygon",
    //   },
    //   author: "Owen S. Good",
    //   title:
    //     "Steam sets a record for concurrent users at the end of the holidays",
    //   description:
    //     "According to SteamDB, the 27,942,036 concurrent users counted between 7 and 8 a.m. EST on Jan. 2, 2022 set an all-time record for PC gamers logged into the platform.",
    //   url: "https://www.polygon.com/22865009/steam-concurrent-users-record-chart-steamdb",
    //   urlToImage:
    //     "https://cdn.vox-cdn.com/thumbor/Xv7FNkdcv-GUD5s3KduPIg07MBw=/0x30:1536x834/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9708357/ss_f5875f8de419a3d5133ae7245b8296db2c027dd8.jpg",
    //   publishedAt: "2022-01-03T16:16:46Z",
    //   content:
    //     "On the last day of a two-week, weekend-holiday slowdown throughout much of the world, Steam set an all-time record for most concurrent users: 27,942,036, all logged in at the same time around 7 a.m. … [+1960 chars]",
    // },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,

    };
  }

  
  render() {
    return (
      <div className="container text-black my-3">
        <h2 className="h2 text-warning text-center">Top Headlines </h2>


        <hr className="text-light" />
      
        <div className="row">
          {this.state.articles.map((element) => {
         
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

          <div className="d-flex justify-content-between p-3">

        <button disabled={this.state.page<=1} className="btn btn-outline-primary" onClick={this.NewshandleOnPrevCLick}> &larr; Previous</button>
 
        <button className="btn btn-outline-warning"  onClick={this.NewshandleOnNextCLick}> Next &rarr;</button>
          
          </div>


        </div>
      </div>
    );
  }
}

export default News;
