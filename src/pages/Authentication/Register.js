import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
import { registerUser, apiError, resetRegisterFlag } from "../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

//import images
import logoSm from "../../assets/images/logo-sm.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { createSelector } from "reselect";

const Register = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            first_name: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            first_name: Yup.string().required("Please Enter Your Username"),
              password: Yup.string().required("Please enter your password"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords do not match")
                .required("Please confirm your password"),
        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
        }
    });

    const selectLayoutState = (state) => state.Account;
    const registerdatatype = createSelector(
        selectLayoutState,
        (account) => ({
            success: account.success,
            error: account.error
        })
    );
    // Inside your component
    const {
        error, success
    } = useSelector(registerdatatype);

    useEffect(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => history("/login"), 3000);
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

    }, [dispatch, success, error, history]);

    document.title = "Basic SignUp | Velzon - React Admin & Dashboard Template";

    return (
      <React.Fragment>
      <ParticlesAuth>
          <div className="auth-page-content mt-lg-5">
              <Container>
                  <Row className="justify-content-center">
                      <Col md={8} lg={6} xl={5}>
                          <Card className="mt-4">

                              <CardBody className="register">
                              <div className='login-img text-center'>
                                  <span className="logo-sm">
                                  <img src={logoSm} alt="" />
                              </span>
                                  </div>
                                  <div className="text-center mt-2">
                                      <h5 className="text-login">Get Started with<span className="heading"> Red Services</span></h5>
                                      <p className="text-muted">Create your free account</p>
                                  </div>
                                  <div className="p-2 mt-5">
                                      <Form
                                          onSubmit={(e) => {
                                              e.preventDefault();
                                              validation.handleSubmit();
                                              return false;
                                          }}
                                          className="needs-validation" action="#">

                                          {success && success ? (
                                              <>
                                                  {toast("Your Redirect To Login Page...", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white', progress: undefined, toastId: "" })}
                                                  <ToastContainer autoClose={2000} limit={1} />
                                                  <Alert color="success">
                                                      Register User Successfully and Your Redirect To Login Page...
                                                  </Alert>
                                              </>
                                          ) : null}

                                          {error && error ? (
                                              <Alert color="danger"><div>
                                                  Email has been Register Before, Please Use Another Email Address... </div></Alert>
                                          ) : null}

                                          <div className="mb-3">
                                              <Input
                                                  className="input-register"
                                                  name="first_name"
                                                  type="text"
                                                  placeholder="Your Full Name"
                                                  onChange={validation.handleChange}
                                                  onBlur={validation.handleBlur}
                                                  value={validation.values.first_name || ""}
                                                  invalid={
                                                      validation.touched.first_name && validation.errors.first_name ? true : false
                                                  }
                                              />
                                              <i class="icon-user ri-user-line"></i>
                                              {validation.touched.first_name && validation.errors.first_name ? (
                                                  <FormFeedback type="invalid"><div>{validation.errors.first_name}</div></FormFeedback>
                                              ) : null}

                                          </div>
                                          <div className="mb-3">
                                              {/* <Label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></Label> */}
                                              <Input
                                                  id="email"
                                                  name="email"
                                                  className="input-register"
                                                  placeholder="Your Email Address"
                                                  type="email"
                                                  onChange={validation.handleChange}
                                                  onBlur={validation.handleBlur}
                                                  value={validation.values.email || ""}
                                                  invalid={
                                                      validation.touched.email && validation.errors.email ? true : false
                                                  }
                                              />
                                              < i class="icon-mail ri-mail-line"></i>

                                              {validation.touched.email && validation.errors.email ? (
                                                  <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                                              ) : null}

                                          </div>


                                          <div className="mb-3">
                                              {/* <Label htmlFor="userpassword" className="form-label">Password <span className="text-danger">*</span></Label> */}
                                              <Input
                                               className="input-register"
                                                  name="password"
                                                  type="password"
                                                  placeholder="Create a Strong Password"
                                                  onChange={validation.handleChange}
                                                  onBlur={validation.handleBlur}
                                                  value={validation.values.password || ""}
                                                  invalid={
                                                      validation.touched.password && validation.errors.password ? true : false

                                                  }
                                              />
                                             <i class="icon-password ri-git-repository-private-line"></i>
                                              {validation.touched.password && validation.errors.password ? (
                                                  <FormFeedback type="invalid"><div>{validation.errors.password}</div></FormFeedback>
                                              ) : null}

                                          </div>


                                          <div className="mt-5 mb-5 text-center">
                                              <p className="account">Already have an account ? <Link to="/login" className="linked-text"> Login</Link> </p>
                                          </div>

                                          <div className="mt-4  text-center">
                                              <button className="register-btn" type="submit">Sign Up</button>
                                          </div>
                                      </Form>
                                  </div>
                              </CardBody>
                          </Card>

                      </Col>
                  </Row>
              </Container>
          </div>
      </ParticlesAuth>
  </React.Fragment>
    );
};

export default Register;
