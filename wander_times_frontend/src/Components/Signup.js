import React, { Fragment } from "react";
import { Form, Button } from "semantic-ui-react";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createUser = () => {
    let url = "http://localhost:3010/api/v1/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors);
        } else {
          localStorage.setItem("token", response.token);
          this.props.setCurrentUser(response.user);
          // this.props.history.push(`users/${response.user.id}`)
          this.props.history.push("/home");
        }
      });
  };

  handleSubmit = event => {
    this.createUser();
  };

  render() {
    return (
      <Fragment>
        {" "}
        Signup Form
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Fragment>
    );
  }
}

export default Signup;
