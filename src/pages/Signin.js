import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase-config";
import Error from "../shared/Error";
import "./Auth.scss";
import LoadSpinner from "../shared/LoadSpinner";

export default function Signin() {
  // sign in component
  const signInWithGoogle = async () => {
    // sign in with Google provider
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // get access token
      const userCredential = GoogleAuthProvider.credentialFromResult(result);
      const token = userCredential.accessToken;

      // get user
      const user = result.user;
      console.log(user);
    } catch (error) {
      setError({ message: error.message });
    }

    setIsLoading(false)
  };

  const signInWithMicrosoft = async () => {
    // sign in with Microsoft provider
  };

  const logInWithEmailAndPassword = async (email, password) => {
    // sign in with email and password
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);
      setFormValues({
        email: "",
        password: "",
      });
    } catch (error) {
      setError({ message: error.message });
    }
  };

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState({ message: "" });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (isSubmitted && Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      logInWithEmailAndPassword(formValues.email, formValues.password).then(
        () => setIsLoading(false)
      );
    }
    setIsSubmitted(false);
    return () => {};
  }, [isSubmitted]);

  const handleSubmit = (event) => {
    // sign in with email and password
    event.preventDefault();
    setFormErrors(() => {
      // validate form
      const errors = {};
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!formValues.email) errors.email = "Email is required!";
      else if (!emailRegex.test(formValues.email))
        errors.email = "This is not a valid email";
      if (!formValues.password) errors.password = "Password is required!";

      return errors;
    });

    setIsSubmitted(true);
  };

  const resetPassword = (event) => {
    // reset the password
    event.preventDefault();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      {/* <!--logo --> */}
      <div className="logo">Booklog</div>
      {/* <!-- errors --> */}
      {error.message ? <Error message={error.message} /> : ""}
      {/* <!-signin with gmail --> */}
      <div className="custom-width bg-white shadow-sm mb-2">
        <div className="d-grid">
          <button className="btn" onClick={signInWithGoogle}>
            {isLoading ? <LoadSpinner /> : "Log in with gmail"}
          </button>
        </div>
      </div>
      {/* <!-- sign in with microsoft --> */}
      <div className="custom-width bg-white shadow-sm mb-2">
        <div className="d-grid">
          <button className="btn">Log in with Microsoft</button>
        </div>
      </div>
      <div className="custom-width bg-white shadow-sm">
        {/* <!--signin with email --> */}
        <div className="email">
          <form onSubmit={handleSubmit}>
            <div className="mt-1">
              <small>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </small>
              <input
                type="text"
                className={
                  formErrors?.email ? "form-control is-invalid" : "form-control"
                }
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <small className="invalid-feedback">{formErrors?.email}</small>
            </div>
            <div className="mt-1">
              <div className="d-flex justify-content-between">
                <small>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                </small>
                <small>
                  <NavLink className="link-primary" onClick={resetPassword}>
                    forgot password?
                  </NavLink>
                </small>
              </div>
              <input
                type="password"
                className={
                  formErrors?.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <small className="invalid-feedback">{formErrors?.password}</small>
            </div>
            <div className="mt-2 d-grid">
              <button className="btn btn-primary">
                {isLoading ? <LoadSpinner color="white" /> : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <small className="mt-2">
        Don't have an account?&nbsp;
        <NavLink className="link-primary" to="/signup">
          Sign up
        </NavLink>
      </small>
    </div>
  );
}
