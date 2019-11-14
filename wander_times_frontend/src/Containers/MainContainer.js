import React from "react";
import ArticleContainer from "./ArticleContainer";

class MainContainer extends React.Component {
  render() {
    // console.log(this.props.articles)
    // articles={this.props.articles.filter(article=>{
    //     return article.title.toLowerCase().includes(this.props.filter.toLowerCase())
    // })}
    return (
      <div>
        <ArticleContainer
          articles={this.props.articles}
          addLikes={this.props.addLikes}
          deleteLikes={this.props.deleteLikes}
          currentUser={this.props.currentUser}
          selectedArticle={this.props.selectedArticle}
          likes={this.props.likes}
          backgroundColor={this.props.backgroundColor}
        />
      </div>
    );
  }
}

export default MainContainer;
