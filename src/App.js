import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './ArticleContainer'
import CategoryContainer from './CategoryContainer'
import NavContainer from './NavContainer'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{textAlign:"center", color: "green"}}>
          Welcome to Wander Times
        </h1>
        <NavContainer />
        <CategoryContainer />
        <ArticleContainer />
      </div>
    )
  }
}

export default App;
