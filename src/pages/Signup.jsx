import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase-config";
import Error from "../shared/Error";
import LoadSpinner from "../shared/LoadSpinner";
import "./Auth.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  // sign up component
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    // sign user up with Google provider
    try {
      const provider = new GoogleAuthProvider();
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
    setIsSubmitting(false);
    navigate("/signin");
  };

  const signUpWithMicrosoft = async () => {
    // sign user up with Microsoft provider
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      // reset form
      setFormValues({
        email: "",
        password: "",
        confirmPassword: "",
        tncs: false,
      });
    } catch (error) {
      setError({ message: error.message });
    }
    setIsSubmitting(false);
    navigate("/signin");
    return;
  };

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    tncs: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const [error, setError] = useState({ message: "" });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmitted) {
      console.log("Creating a user...", formValues.email);
      setIsSubmitting(true);
      signUpWithEmailAndPassword(formValues.email, formValues.password);
    }
    setIsSubmitted(false);
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormValues({ ...formValues, [name]: name == "tncs" ? checked : value });
  };

  const handleSubmit = async (e) => {
    // sign user up with email and password
    e.preventDefault();
    setFormErrors(() => {
      // validate form
      const errors = {};
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@])[a-zA-Z\d_@]{8,23}$/;
      if (!formValues.password) errors.password = "Password is required!";
      else if (!passwordRegex.test(formValues.password))
        errors.password = "Password is invalid!";
      if (formValues.confirmPassword !== formValues.password)
        errors.confirmPassword = "Password does not match";
      if (!formValues.tncs)
        errors.tncs = "You must agree to the Terms and Conditions";
      return errors;
    });

    setIsSubmitted(true);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      {/* <!--       logo --> */}
      <div className="logo">
        <img src="logo_icon.png" width={25} className="img-fluid" />
      </div>
      {/* <!-- errors --> */}
      {error.message ? <Error message={error.message} /> : ""}
      {/* <!--           signin with gmail --> */}
      <div className="custom-width bg-white shadow-sm mb-2">
        <div className="d-grid">
          <button
            className="btn google"
            onClick={signUpWithGoogle}
            disabled={isSubmitting}
          >
            <div className="d-flex justify-content-around align-items-center">
              <FontAwesomeIcon icon={faG} /> Sign up with Google
            </div>
          </button>
        </div>
      </div>
      {/* <!--             sign in with microsoft --> */}
      <div className="custom-width bg-white shadow-sm mb-2">
        <div className="d-grid">
          <button
            className="btn"
            onClick={signUpWithMicrosoft}
            disabled={isSubmitting}
          >
            <div className="d-flex justify-content-around align-items-center">
              <span className="microsoft-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                  <path fill="#fff" d="M0 0h23v23H0z" />
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
              </span>
              Sign up with Microsoft
            </div>
          </button>
        </div>
      </div>
      <div className="custom-width bg-white shadow-sm">
        {/* <!--           signin with email --> */}
        <div className="email">
          <form onSubmit={handleSubmit}>
            <div className="mt-1">
              <small>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </small>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                required
                value={formValues.email}
                onChange={handleChange}
                onFocus={() => setError({ message: "" })}
              />
            </div>
            <div className="mt-1">
              <small>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </small>
              <input
                type="password"
                className={
                  formErrors?.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="password"
                id="password"
                required
                minLength={8}
                maxLength={23}
                aria-invalid={formErrors?.password ? "true" : "false"}
                aria-describedby="password-error"
                value={formValues.password}
                onChange={handleChange}
              />
              <small id="password-error" className="invalid-feedback">
                {formErrors?.password}. It should be
                <ul>
                  <li>at least 8 characters long</li>
                  <li>
                    a combination of at least one uppercase and lowercase
                    letter, one digit and a non-alphabetic character eg. &#64;
                  </li>
                </ul>
              </small>
            </div>
            <div className="mt-1">
              <small>
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
              </small>
              <input
                type="password"
                className={
                  formErrors?.confirmPassword
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="confirmPassword"
                id="confirmPassword"
                required
                aria-invalid={formErrors?.confirmPassword ? "true" : "false"}
                aria-describedby="password-error"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              <small className="invalid-feedback">
                {formErrors?.confirmPassword}
              </small>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                className={
                  formErrors?.tncs
                    ? "form-check-input is-invalid"
                    : "form-check-input"
                }
                name="tncs"
                id="tncs"
                checked={formValues.tncs}
                onChange={handleChange}
              />
              <small>
                <label htmlFor="tncs" className="form-check-label">
                  &nbsp;Agree to the&nbsp;
                  <NavLink to="/tncs" className="link-primary">
                    Terms and Conditions
                  </NavLink>
                </label>
              </small>
              <small className="invalid-feedback">{formErrors?.tncs}</small>
            </div>
            <div className="mt-2 d-grid">
              <button className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? <LoadSpinner color="white" /> : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <small className="mt-2">
        Already have an account?&nbsp;
        <NavLink className="link-primary" to="/signin">
          Sign in
        </NavLink>
      </small>
    </div>
  );
}
