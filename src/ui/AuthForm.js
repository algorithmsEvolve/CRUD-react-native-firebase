import React from "react";
import { styles } from "../../config/styles";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-elements";
import { withFormik } from "formik";
import * as yup from "yup";

const AuthForm = (props) => {
  displayNameInput = (
    <View>
      <TextInput
        style={styles.formInput}
        onChangeText={(text) => props.setFieldValue("displayName", text)}
        placeholder="Display Name"
      />
      <Text style={styles.validationText}>{props.errors.displayName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>
        Coding with Curry
      </Text>
      {props.authMode === "signup" ? displayNameInput : null}
      <TextInput
        style={styles.formInput}
        onChangeText={(text) => props.setFieldValue("email", text)}
        placeholder="email"
      />
      <Text style={styles.validationText}>{props.errors.email}</Text>
      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChangeText={(text) => props.setFieldValue("password", text)}
        placeholder="password"
      />
      <Text style={styles.validationText}>{props.errors.password}</Text>
      <Button
        onPress={() => props.handleSubmit()}
        buttonStyle={styles.button}
        title={props.authMode === "login" ? "Login" : "Create Account"}
      />
      <Button
        backgroundColor="transparent"
        color="black"
        buttonStyle={styles.button}
        onPress={() => props.switchAuthMode()}
        title={
          props.authMode === "login" ? "Switch to Signup" : "Switch to Login"
        }
      />
    </View>
  );
};
export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "", displayName: "" }),
  validationSchema: (props) =>
    yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(10).required(),
      displayName:
        props.authMode === "signup" ? yup.string().min(5).required() : null,
    }),
  handleSubmit: (values, { props }) => {
    props.authMode === "login" ? props.login(values) : props.signup(values);
  },
})(AuthForm);
