import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  internet_id: yup
    .string()
    .required("This field is required, input your internet id"),
  password: yup
    .string()
    .required("This field is required, input your password"),
});
export const signUpSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("This field is required, input your first name"),
  last_name: yup
    .string()
    .required("This field is required, input your last name"),
  country: yup
    .string()
    .required("This field is required, input your country name"),
  date_of_birth: yup
    .date()
    .required("This field is required, select your date of birth"),
  email: yup
    .string()
    .email("incorrect email format")
    .required("This field is required, input your email address"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Your password should be alphanumeric, minimum of 5 characters and a capital letters",
    })
    .required("This field is required, set your password"),
  phone: yup
    .number()
    .required("This field is required, input your phone number"),
  bank_verification_num: yup
    .string()
    .min(11, {
      message: "Your bank verification number is invalid",
    })
    .required("This field is required, input your bank verification number"),
  international_id: yup.string().min(9, {
    message: "Your international identity is invalid",
  }),
  gender: yup.string().required("This field is required, input your gender"),
});
