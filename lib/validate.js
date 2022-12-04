export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    values.password.length < 9 ||
    values.password.length > 20
  ) {
    errors.password =
      'Must be greater than 9 and less than 20 characters';
  } else if (values.password.includes('')) {
    errors.password = 'Invalid Password';
  }

  return errors;
}

export function registerValidate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid Username';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    values.password.length < 9 ||
    values.password.length > 20
  ) {
    errors.password =
      'Must be greater than 9 and less than 20 characters';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.cpassword === values.cpassword) {
    errors.cpassword = 'Passwords Do Not Match';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Invalid Password';
  }

  return errors;
}
