import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    console.log(snapshot);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          {step}
          <div style={{ display: "flex" }} className="mt-10">
            {stepNumber > 0 && (
              <button
                className="text-left xl:mt-10 mr-12"
                onClick={() => previous(formik.values)}
                type="button"
              >
                <span
                  className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                  aria-label="Sign_in"
                >
                  {" "}
                  Back
                </span>
              </button>
            )}
            <div>
              <button
                disabled={formik.isSubmitting}
                type="submit"
                className="text-left xl:mt-10"
              >
                <span
                  className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                  aria-label="Sign_in"
                >
                  {isLastStep ? "Submit" : "Next"}
                </span>
              </button>
            </div>
          </div>
          <p
            className={`text-center text-greyLight mt-16 ${
              stepNumber == 0 ? "" : "xl:mt-36"
            } `}
          >
            Step {stepNumber + 1} of {totalSteps}
          </p>
        </Form>
      )}
    </Formik>
  );
};

const WizardStep = ({ children }) => (
  <div className="flex flex-col gap-8">{children}</div>
);

const CustomForm = ({ client }) => {
  return (
    <div>
      <Wizard
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone_number: "",
          date_of_birth: "",
          gender: "",
          country: "",
          international_id: "",
          bank_verification_num: "",
        }}
        onSubmit={async (values) => {
          const router = useRouter();
          console.log(values, client);
          const url =
            "https://internetid.geebee.engineer/api/v1/auth/register/";
          try {
            const resp = await axios.post(url, {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
              password: values.password,
              phone_number: values.phone_number,
              date_of_birth: values.date_of_birth,
              gender: values.gender,
              country: values.country,
              international_id: values.international_id,

              bank_verification_num: values.bank_verification_num,
              is_dev: client ? true : false,
            });
            router.push("/account_sucess");
            console.log(resp.data);
          } catch (error) {
            console.log(error.response.data);
            alert(
              `Your  details is ${error.response.data.error} and ${error.response.data.message} please check your details`
            );
          }
        }}
      >
        <WizardStep
          onSubmit={() => console.log("Step1 onSubmit")}
          validationSchema={Yup.object({
            first_name: Yup.string().required(
              "This field is required, input your first name"
            ),
            last_name: Yup.string().required(
              "This field is required, input your last name"
            ),
            country: Yup.string().required(
              "This field is required, input your country name"
            ),
            date_of_birth: Yup.date().required(
              "This field is required, select your date of birth"
            ),
          })}
        >
          <div>
            <Field
              component="input"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              type="text"
              className="w-full bg-cardBg p-3 text-sm rounded-lg  "
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="first_name"
            />
          </div>
          <div>
            <Field
              component="input"
              id="last_name"
              className="w-full bg-cardBg p-3 text-sm rounded-lg  "
              name="last_name"
              placeholder="Last Name"
              type="text"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="last_name"
            />
          </div>
          <div>
            <Field
              component="input"
              id="country"
              name="country"
              placeholder="Country"
              type="text"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="country"
            />
          </div>
          <div>
            <Field
              component="input"
              id="date_of_birth"
              name="date_of_birth"
              placeholder="Date of birth"
              type="date"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              component="div"
              name="date_of_birth"
              className="error text-xs text-red"
            />
          </div>
        </WizardStep>
        <WizardStep
          onSubmit={() => console.log("Step2 onSubmit")}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("required"),
            password: Yup.string()
              .min(5)
              .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
                message:
                  "Your password should be alphanumeric, minimum of 5 characters and a capital letters",
              })
              .required("This field is required, set your password"),
            phone_number: Yup.number().required(
              "This field is required, input your phone number"
            ),
          })}
        >
          <div>
            <Field
              component="input"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="email"
            />
          </div>
          <div>
            <Field
              component="input"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="password"
            />
          </div>
          <div>
            <Field
              component="input"
              id="phone_number"
              name="phone_number"
              placeholder="Phone Number"
              type="tel"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="phone_number"
            />
          </div>
        </WizardStep>
        <WizardStep
          onSubmit={() => console.log("Step2 onSubmit")}
          validationSchema={Yup.object({
            bank_verification_num: Yup.string()
              .min(11, "Your bank verification number is invalid")
              .required(
                "This field is required, input your bank verification number"
              ),
            // international_id: Yup.string()
            //   .min(9, "Your international identity is invalid")
            //   .required(
            //     "This field is required, input your international identity"
            //   ),
            gender: Yup.string().required(
              "This field is required, input your gender"
            ),
          })}
        >
          <div>
            <Field
              component="input"
              id="bank_verification_num"
              name="bank_verification_num"
              placeholder="Bank verification number"
              type="password"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="bank_verification_num"
            />
          </div>
          <div>
            <Field
              component="input"
              id="international_id            "
              name="international_id"
              placeholder="International identity number"
              type="password"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="international_id"
            />
          </div>
          <div>
            <Field
              component="input"
              id="gender"
              name="gender"
              placeholder="Gender"
              type="text"
              className="w-full bg-cardBg p-3 text-sm rounded-lg"
            />
            <ErrorMessage
              className="error text-xs text-red"
              component="div"
              name="gender"
            />
          </div>
        </WizardStep>
      </Wizard>
    </div>
  );
};

export default CustomForm;
