import React, {Component} from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {withRouter} from "react-router-dom";
import Header from './header';
import Footer from './Footer';
import {Link, match, matchPath} from "react-router-dom";
import axios from "axios";


class login extends Component {

    state = {
        email: "",
        password: "",
        EmailVerify: "text-danger pt-5 hidden",
        EmailValidation: "text-danger pt-5 hidden",
        Email2Validation: "text-danger pt-5 hidden",

        PassValidation: "text-danger pt-5 hidden",
        Pass2Validation: "text-danger pt-5 hidden",
        Pass3Validation: "text-danger pt-5 hidden"
    };

    render() {
        // const { match: {params: id} } = this.props;
        // let parameter = match.params.name;
        const token_str = ((Object)((Object)(this.props).match.params)).name;
        if (token_str != null) {
            this.LoginHandle_token();
        }
        return (
            <div className="wrapper">
                <Header/>

                <section className="middsection_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="loginbox">

                                    <form className="login" name="login">
                                        <div className="form-group" id="login-form--email-group">
                                            <h5 className={this.state.EmailVerify}>Your Email is unverified! Please
                                                verify your email address.</h5>
                                            <input type="text" onChange={this.changeEmail.bind(this)}
                                                   className="form-control inputtext emailbg" placeholder="Email"/>
                                            <h5 className={this.state.EmailValidation}>Email is Required</h5>
                                            <h5 className={this.state.Email2Validation}>Enter correct Email</h5>


                                        </div>
                                        <div className="form-group" id="login-form--password-group">
                                            <input type="password" onChange={this.changepass.bind(this)}
                                                   className="form-control inputtext passwordbg"
                                                   placeholder="Password"/>

                                            <h5 className={this.state.PassValidation}>Password is Required</h5>
                                            <h5 className={this.state.Pass2Validation}>Error in Email or Password</h5>
                                            <h5 className={this.state.Pass3Validation}>Password should have at least 8
                                                letters.</h5>

                                        </div>

                                        <div className="form-group" id="login-form--submit-group">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input type="button" onClick={() => this.LoginHandle()}
                                                           value="Login" className="login-btn"/>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row top-space">
                                            <div className="col-md-6">
                                                <Link to="/forget_password" className="forgetpass">
                                                    Forgot Password
                                                </Link>
                                            </div>


                                            <div className="col-md-6">
                                                <p className="check_txt">New Here
                                                    <Link to="/register" className="forgetpass">Sign Up
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>

            </div>
        );
    }

    LoginHandle_token = () => {
        axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/login', {
            email: this.state.email,
            password: this.state.password,
            token: ((Object)((Object)(this.props).match.params)).name
        })
            .then((response) => {
                console.log(response);
                if (response.data.message == "NotExist") {
                    //alert("Your email error");
                    this.setState({Pass2Validation: "text-danger pt-5"});
                    return;
                }
                if (response.data.LoginData !== null && response.data.message == "success") {

                    
                    let LogiData = JSON.stringify(response.data.LoginData);
                    window.localStorage.setItem("LoginData5", LogiData);
                    Object(this.props).history.push("/new_pass/" + response.data.LoginData.reset_pass_confirmation_tokken);
                }

                if (response.data.message == "No Active") {
                    this.setState({EmailVerify: "text-danger pt-5"});
                }

            })
            .catch(function (err) {

                console.log("error")
            });

    }
    LoginHandle = () => {


        if (this.state.email == null || this.state.email.length == 0) {
            this.setState({EmailValidation: "text-danger pt-5"});
        } else if (validateEmail(this.state.email) == false) {
            this.setState({Email2Validation: "text-danger pt-5"});
        } else if (this.state.password == null || this.state.password.length == 0) {
            this.setState({PassValidation: "text-danger pt-5"});

        } else if (this.state.password.length < 8) {
            this.setState({Pass3Validation: "text-danger pt-5"});

        } else {
            axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/login', {
                email: this.state.email,
                password: this.state.password,
                token: "token"
            })
                .then((response) => {
                    console.log(response.data);
                    if (response.status == 205) {

                        this.setState({EmailVerify: "text-danger pt-5"});
                    } else if (response.status == 204) {
                        this.setState({Pass2Validation: "text-danger pt-5"});

                    } else {
                        console.log(response.data.LoginData);
                        let LogiData = JSON.stringify(response.data.LoginData);
                        window.localStorage.setItem("LoginData5", LogiData);
                        window.location.href = "/dashboard";
                    }

                })
                .catch(function (err) {

                    console.log(err)
                });


        }


    }
    changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: e.target.value});
        if (this.state.email != null) {

            this.setState({EmailValidation: "text-danger pt-5 hidden"});
        }
        this.setState({Email2Validation: "text-danger pt-5 hidden"});
        this.setState({EmailVerify: "text-danger pt-5 hidden"});
    }
    changepass = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: e.target.value});
        if (this.state.password != null) {

            this.setState({PassValidation: "text-danger pt-5 hidden"});
        }

        this.setState({Pass2Validation: "text-danger pt-5 hidden"});
        this.setState({Pass3Validation: "text-danger pt-5 hidden"});
    }


}

//e: React.FormEvent<HTMLInputElement>

function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default withRouter(Object(login));


