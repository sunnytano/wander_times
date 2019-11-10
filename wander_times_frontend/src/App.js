import React,{ Fragment } from 'react';
import './App.css';
import CategoryContainer from './Containers/CategoryContainer'
import NavContainer from './Containers/NavContainer'
import MainContainer from './Containers/MainContainer'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route, } from 'react-router-dom'

class App extends React.Component{
  state = {
    articles: [],
    selectedArticles: [],
    loading: true, 
    filter: "",
    selectedCategory: null, 
    currentUser: null
  }

  componentDidMount(){
    // let url = "https://newsapi.org/v2/everything?q=technology&from=2019-09-10&sortBy=publishedAt&apiKey=f0a7beb8be6040cfadf7471e6a6676b4"
    let url = "http://localhost:3010/api/v1/articles"
   
    fetch(url)
    .then(resp=>resp.json())
    .then(article=>{
      this.setState({
        articles: article,
        selectedArticles: article
      })
    })
    const token=localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3010/api/v1/auto_login", {
              headers: {
                "Authorization": token
            }
          })
          .then(res => res.json())
          .then(response=>{
            if(response.errors){
              localStorage.removeItem("user_id")
              alert(response.errors)
            } else{
              this.setState({
                currentUser: response
              })
            }
          })
        }
      }

  setCurrentUser = user =>{
    this.setState({
      currentUser: user
    })
  }

  logout = () =>{
    this.setState({
      currentUser: null
    })
    this.props.history.push('/')
  }
  // changeFilter = (filterInput) => {
  //   console.log(filterInput)
  //   this.setState({
  //     filter: filterInput
  //   })
  // }

  handleSearch = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  changeCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  categoryFilter = () => {
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
    return(
      <div>
        <h1 href="/" style={{textAlign:"center", color: "dark grey"}}> THE WANDER TIMES
        </h1>
        <NavContainer currentUser={this.state.currentUser}
                      handleSearch={this.handleSearch}
                      logout={this.logout}
                      />
           <Switch>
          <Route path='/login' 
                 render={(routerProps)=>{
                     return <Login 
                     setCurrentUser={this.setCurrentUser} 
                   {...routerProps}
            />
          }}></Route>
           <Route path='/signup' 
                 render={(routerProps)=>{
                     return <Signup 
                     setCurrentUser={this.setCurrentUser} 
                   {...routerProps}
            />
          }}></Route>
          <Route path='/' render={(routerProps)=>{
            return  <Fragment> <CategoryContainer articles={this.state.articles}
            changeCategory={this.changeCategory}
            categoryFilter={this.categoryFilter} {...routerProps}
         />
        <MainContainer
        articles={this.categoryFilter()}
        filter={this.state.filter} />
          </Fragment>
          }}>
          </Route>
        </Switch>
      </div>  
    )
  }
}

export default App;
