export const validate = values => {
  const errors = {};

  if (!values.userName_register) {
    errors.userName_register = "Please provide your Full Name!";
  }

  if (!values.mobileno_register) {
    errors.mobileno_register = "Please provide your Mobile Number!";
  }

  if (values.mobileno_register) {
    if (values.mobileno_register.length != 10)
      errors.mobileno_register = "’Please enter valid mobile no";
  }

  if (!values.consumerno_register) {
    errors.consumerno_register = "Please provide your Consumer Number!";
  }
  if (values.consumerno_register) {
    if (values.consumerno_register.length != 12)
      errors.consumerno_register = "’Only 12 digit Number can be entered!";
  }
  if (!values.password_register) {
    errors.password_register = "Please enter your password!";
  }

  if (!values.confirm_password_register) {
    errors.confirm_password_register = "Required";
  } else if (values.confirm_password_register !== values.password_register) {
    errors.confirm_password_register = "Password mismatched";
  }

  if (!values.T_C_register) {
    errors.T_C_register = "Accept Terms and Conditions";
  }

  console.log(values);
  return errors;
};
