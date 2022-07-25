import React from "react";
import UserContext from "./context";
import { useContext } from "react";
import { useFormik } from "formik";

// createaccount function is creating a form
// clearform function is clear the form
export default function CreateAccount() {
  const alldata = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (values.name);
      if (values.email);
      if (values.password);
      alert(`Account Created Successfully`);

      alldata.users.push({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        balance: 0
      });
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name Required!";
      } else if (values.name.length > 15) {
        errors.name = "Must be 15 characters or less";
      } else if (!/^[A-Z]{2,20}$/i.test(values.name)) {
        errors.name = "Invalid Name : Only String is allowed";
      }
      if (!values.email) {
        errors.email = "Required Email ID!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid Email ID";
      }
      if (!values.password) {
        errors.password = "Required Password";
      } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters";
      }
      return errors;
    }
  });

  return (
    <>
      <div class="wholepage">
        <div class="card">
          <div class="colfont">Create User Account</div>
          <div class="cardbody">
            <form onSubmit={formik.handleSubmit}>
              <div class="cardtext">
                <label className="form-label">Name:</label>
                <input
                  class="form-control"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name..."
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
              </div>

              <div class="cardtext">
                <label className="form-label">Email:</label>
                <input
                  class="form-control"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Mail..."
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />

                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </div>

              <div class="cardtext">
                <label class="form-label">Password:</label>
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password..."
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />

                {formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <br></br>
              <center>
                <button type="submit" class="but" disabled="">
                  Submit
                </button>
              </center>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
