import React from 'react';
import './App.css';
import ArticleContainer from './Containers/ArticleContainer'
import CategoryContainer from './Containers/CategoryContainer'
import NavContainer from './Containers/NavContainer'
// import MainContainer from './Containers/MainContainer'

class App extends React.Component{
  state = {
    articles: [],
    loading: true, 
    filter: "",
    selectedCategory: null
  }

  componentDidMount(){
    // let url = "https://newsapi.org/v2/everything?q=technology&from=2019-09-10&sortBy=publishedAt&apiKey=f0a7beb8be6040cfadf7471e6a6676b4"
    let url = "http://localhost:3010/api/v1/articles"
    fetch(url)
    .then(resp=>resp.json())
    .then(article=>{
      this.setState({
        articles: article,
      })
    })
  }

  changeFilter = (filterInput) => {
    this.setState({
      filter: filterInput
    })
  }

  changeCategory = (filterInput) => {
    this.setState({
      selectedCategory: filterInput
    })
  }

  categoryFilter = () => {
    console.log(this.state.selectedCategory)
    let selected;
    switch(this.state.selectedCategory){
      case "tech":
        selected= this.state.articles.filter(article=>article.category==="tech")
        break;
      case "travel":
        selected = this.state.articles.filter(article=>article.category==="travel")
        break;
      default:
        selected= this.state.articles
        break;
    }
    return selected
  }

  
  render(){
    // {this.state.articles.filter(article=>{
    //   return article.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
    //          article.overview.toLowerCase().includes(this.state.filter.toLowerCase())
    // })}
    console.log(this.state.articles)
    return(
      <div>
        <h1 style={{textAlign:"center", color: "green"}}>
        </h1>
        <NavContainer changeFilter={this.changeFilter}/>
        <CategoryContainer articles={this.state.articles}
                              changeCategory={this.changeCategory}
                              categoryFilter={this.categoryFilter}
                           />
        <ArticleContainer 
        changeCategory={this.changeCategory}
        articles={this.categoryFilter()}
        filter={this.state.filter}
        />
      </div>
    )
  }
}

export default App;
