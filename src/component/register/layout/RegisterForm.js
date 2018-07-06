import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";
import { customTextField } from "../../../global/commoncomponent/customTextField";
import { customCheckBoxField } from "../../../global/commoncomponent/CustomCheckBoxField";
import { validate } from "../functions/validation";

const submit = values => {
  alert(JSON.stringify(values));
};

let RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <View>
      <Field
        label="Name"
        name="userName_register"
        type="default"
        component={customTextField}
      />
      <Field
        label="Mobile N.o"
        name="mobileno_register"
        type="numeric"
        component={customTextField}
      />
      <Field
        label="Consumer N.o"
        name="consumerno_register"
        type="default"
        component={customTextField}
      />
      <Field
        label="Password"
        name="password_register"
        type="default"
        passwordField={true}
        component={customTextField}
      />
      <Field
        label="Confirm Password"
        name="confirm_password_register"
        type="default"
        passwordField={true}
        component={customTextField}
      />
      <Field
        label="Terms And Condition!"
        name="T_C_register"
        component={customCheckBoxField}
        //  checked={false}
      />

      <Button title="Register" onPress={handleSubmit(submit)} />
    </View>
  );
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: "Register",
  validate
})(RegisterForm);

export default RegisterForm;
