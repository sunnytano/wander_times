import React, { Fragment } from "react";
import "./App.css";
import CategoryContainer from "./Containers/CategoryContainer";
import NavContainer from "./Containers/NavContainer";
import MainContainer from "./Containers/MainContainer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    articles: [],
    loading: true,
    filter: "",
    selectedCategory: null,
    selectedArticle: [],
    currentUser: null,
    likes: [],
    backgroundColor: "black"
  };

  componentDidMount() {
    let url = "http://localhost:3010/api/v1/articles";
    fetch(url)
      .then(resp => resp.json())
      .then(article => {
        this.setState({
          articles: article
        });
      });
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3010/api/v1/auto_login", {
        headers: {
          Authorization: token
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            localStorage.removeItem("user_id");
            alert(response.errors);
          } else {
            this.setState({
              currentUser: response
            });
          }
        });
    }
  }

  setCurrentUser = user => {
    this.setState({
      currentUser: user
    });
  };

  logout = () => {
    this.setState({
      currentUser: null
    });
  };
  // changeFilter = (filterInput) => {
  //   console.log(filterInput)
  //   this.setState({
  //     filter: filterInput
  //   })
  // }

  handleSearch = event => {
    this.setState({
      filter: event.target.value
    });
  };

  changeCategory = category => {
    this.setState({
      selectedCategory: category
    });
  };

  categoryFilter = () => {
    let selected;
    switch (this.state.selectedCategory) {
      case "travel":
        selected = this.state.articles.filter(
          article => article.category === "travel"
        );
        break;
      default:
        selected = this.state.articles.filter(
          article => article.category === "tech"
        );
        break;
    }
    return selected;
  };

  addLikes = selectedArticle => {
    this.setState({
      likes: [selectedArticle, ...this.state.likes],
      backgroundColor: "white"
    });
  };

  selectedArticle = article => {
    console.log(article);
    this.setState({
      selectedArticle: article
    });
  };

  render() {
    return (
      <div>
        <h1 href="/" style={{ textAlign: "center", color: "dark grey" }}>
          THE WANDER TIMES
        </h1>
        <NavContainer
          currentUser={this.state.currentUser}
          handleSearch={this.handleSearch}
          logout={this.logout}
        />
        <Switch>
          <Route
            path="/users/:id"
            render={routerProps => {
              return (
                <Profile
                  deleteLikes={this.deleteLikes}
                  likes={this.state.likes}
                  articles={this.categoryFilter()}
                  selectedArticle={this.selectedArticle}
                  currentUser={this.state.currentUser}
                  backgroundColor={this.state.backgroundColor}
                  {...routerProps}
                />
              );
            }}
          ></Route>
          <Route
            path="/login"
            render={routerProps => {
              return (
                <Login setCurrentUser={this.setCurrentUser} {...routerProps} />
              );
            }}
          ></Route>
          <Route
            path="/signup"
            render={routerProps => {
              return (
                <Signup setCurrentUser={this.setCurrentUser} {...routerProps} />
              );
            }}
          ></Route>
          <Route
            path="/"
            render={routerProps => {
              return (
                <Fragment>
                  <CategoryContainer
                    articles={this.state.articles}
                    changeCategory={this.changeCategory}
                    categoryFilter={this.categoryFilter}
                    {...routerProps}
                  />
                  <MainContainer
                    articles={this.categoryFilter()}
                    filter={this.state.filter}
                    addLikes={this.addLikes}
                    currentUser={this.state.currentUser}
                    selectedArticle={this.selectedArticle}
                    deleteLikes={this.deleteLikes}
                    likes={this.state.likes}
                    backgroundColor={this.state.backgroundColor}
                  />
                </Fragment>
              );
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
