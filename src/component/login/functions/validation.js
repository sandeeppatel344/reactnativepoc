export const validate = values => {
  const errors = {};

  if (!values.fname) {
    errors.fname = "Please input first name.";
  }

  return errors;
};

