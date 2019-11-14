import React, { Fragment } from "react";
import { Card, Button, Image } from "semantic-ui-react";

class ArticleCard extends React.Component {
  state = {
    clicked: false
  };

  handleButton = event => {
    this.handleSubmit(event, this.props.currentUser.id, this.props.article.id);
    this.handleColor();
  };

  handleColor = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  handleSubmit = (event, user_id, article_id) => {
    if (!this.props.likes.find(liked => liked.article_id === article_id)) {
      event.preventDefault();
      let url = "http://localhost:3010/api/v1/likes";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          user_id: user_id,
          article_id: article_id
        })
      })
        .then(res => res.json())
        .then(response => this.props.addLikes(response));
    }
  };

  handleDelete = articleId => {
    let url = `http://localhost:3010/api/v1/likes/${articleId}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      this.props.deleteLikes(articleId);
    });
  };

  handleClick = () => {
    this.props.selectedArticle(this.props.article);
  };

  render() {
    console.log(this.props.currentUser);
    let btn = !this.state.clicked ? "black" : "white";
    // console.log("currentUser", this.props.currentUser.id, "articleID", this.props.article.id)
    const { title, author, overview, image, url } = this.props.article;
    return (
      <Card onClick={this.handleClick}>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <a href={url}>{title}</a>
          </Card.Header>
          <Card.Meta>
            <span className="author">{author}</span>
          </Card.Meta>
          <Card.Description>{overview}</Card.Description>
        </Card.Content>

        {this.props.currentUser ? (
          <Fragment>
            {this.props.addLikes ? (
              <Button onClick={e => this.handleButton(e)}>
                {this.props.likes ? "Add Favorite" : "Added!"}
              </Button>
            ) : (
              <Button
                className={btn}
                style={
                  !this.state.clicked
                    ? { backgroundColor: "grey" }
                    : { backgroundColor: "green" }
                }
                onClick={() => {
                  this.handleDelete(this.props.likes.id);
                }}
                className="ui button"
              >
                Remove Favorite
              </Button>
            )}
          </Fragment>
        ) : (
          <Button
            onClick={() => window.alert("sign in first")}
            className="ui button"
          >
            Add Favorite
          </Button>
        )}
      </Card>
    );
  }
}

export default ArticleCard;
