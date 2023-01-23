import React from "react";
import { connect } from "react-redux";
import { login } from "../features/auth/authSlice";

class LoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    if (this.state.email && this.state.password) {
      this.props.logIn({
        email: this.state.email,
        password: this.state.password,
      });
    }
    return;
  }

  handleInputChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      // console.log(name, value);
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <h3>Login With Class Component</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            id="email1"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            id="password1"
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <input type="submit" value="Login" />
        </form>

        <h3>{this.props.User?.name}</h3>
        <h3>{this.props.User?.email}</h3>
        <small>{this.props.Message ? this.props.Message : null}</small>
      </>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => dispatch(login(user)),
  };
};

function mapStateToProps(state) {
  return {
    User: state.auth.user,
    Message: state.auth.message,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginClass);
