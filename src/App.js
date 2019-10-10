import React from 'react';
import './App.css';
import ArticleContainer from './Containers/ArticleContainer'
import CategoryContainer from './Containers/CategoryContainer'
import NavContainer from './Containers/NavContainer'

class App extends React.Component{
  state = {
    articles: [],
    loading: true
  }

  componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=technology&from=2019-09-10&sortBy=publishedAt&apiKey=f0a7beb8be6040cfadf7471e6a6676b4"
    fetch(url)
    .then(resp=>resp.json())
    .then(article=>{
      this.setState({
        articles: article
      })
    })
  }

  render(){
    // console.log(this.state.articles)
    return(
      <div>
        <h1 style={{textAlign:"center", color: "green"}}>
          Welcome to Wander Times
        </h1>
        <NavContainer />
        <CategoryContainer />
        <ArticleContainer articles={this.state.articles}/>
      </div>
    )
  }
}

export default App;
