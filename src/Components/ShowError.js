import React, { Component } from 'react'

export class ShowError extends Component {
 
    async updateNews(props) {
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
    
   
      }
    
    
      async componentDidMount() {
        this.updateNews()
      }
    
      articles = [];
    
      status=[];
    
      constructor(props) {
        super(props);
        this.state = {
          articles: this.articles,
          loading: false,
          page: 1,
          totalResults: 0
    
    
    
        }
    }
 
    runThisIfEmptyResponse() {

        if (this.state.totalResults < 0) {
    
          console.log(this.state.status)
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
 
 
 
 
 
 
 
    render() {
        return (
            <div>
                {this.runThisIfEmptyResponse()}

            </div>
        )
    }
}

export default ShowError;
