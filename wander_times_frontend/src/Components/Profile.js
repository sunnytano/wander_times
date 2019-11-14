import React, { Fragment } from "react";
import { Grid, Segment, Image, Loader } from "semantic-ui-react";
import ArticleCard from "./ArticleCard";

class Profile extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    let url = `http://localhost:3010/api/v1/users/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(response => {
        this.setState({
          user: response
        });
      });
  }

  deleteLikes = remLike => {
    console.log("DELETING");
    const newLikes = this.state.user.likes.filter(
      liked => liked.id !== remLike
    );
    let update = { ...this.state.user, likes: newLikes };
    this.setState({
      user: update
    });
  };

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <Fragment>
          <Grid columns={2} positon="left">
            <Grid.Column width={3}>
              This is the Profile Page
              <Segment>
                <Image src={user.avatar} fluid />
                <strong>{user.username}</strong>
                <br />
              </Segment>
            </Grid.Column>
          </Grid>
          <h3>Favorite Articles</h3>
          <div className="article-card-container">
            {this.state.user.likes.map(liked => {
              // debugger
              return (
                <ArticleCard
                  selectedArticle={this.props.selectedArticle}
                  key={liked.id}
                  deleteLikes={this.deleteLikes}
                  likes={liked}
                  remove={this.remove}
                  article={liked.article}
                  currentUser={this.props.currentUser}
                  backgroundColor={this.props.backgroundColor}
                />
              );
            })}
          </div>
        </Fragment>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Profile;
