import React from "react";
import AuthForm from "../ui/AuthForm";
import { login, signup, subscribeToAuthChanged } from "../api/FoodsApi";

export default class LoginScreen extends React.Component {
  state = {
    authMode: "login",
  };

  componentDidMount() {
    subscribeToAuthChanged(this.onAuthStateChanged);
  }
  componentWillUnmount() {}

  onAuthStateChanged = (user) => {
    if (user !== null) {
      this.props.navigation.navigate("FoodList");
    }
  };

  switchAuthMode = () => {
    this.setState((prevState) => ({
      authMode: prevState.authMode === "login" ? "signup" : "login",
    }));
  };

  render() {
    return (
      <AuthForm
        login={login}
        signup={signup}
        authMode={this.state.authMode}
        switchAuthMode={this.switchAuthMode}
      />
    );
  }
}
