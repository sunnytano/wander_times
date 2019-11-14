import React from "react";
import { Grid } from "semantic-ui-react";

class CategoryCard extends React.Component {
  handleFilter = event => {
    this.props.changeCategory(event.target.value);
  };

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <button
              onClick={this.handleFilter}
              value="tech"
              name="tech"
              className="category-card-tech"
            >
              TECH
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              onClick={this.handleFilter}
              value="travel"
              name="travel"
              className="category-card-travel"
            >
              TRAVEL
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CategoryCard;
