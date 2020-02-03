import React, { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import {Link} from "react-router-dom";
import axios from "axios";

//import Footer from './pages/Footer';
class reset_pass_confirm extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Section />
                <Footer />
            </div>
        );
    }
}
class Section extends Component {
    render() {
        return (
            <div>
                <section className="middsection_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="loginbox">
                                    <h1>Congratulations!</h1>

                                    <form className="login" name="login">
                                        <div className="form-group">
                                            <p className="entertxtnew"> You Have Successfully Registered!</p>

                                        </div>

                                        <Link to="/login" className="greentxt">Back to Login</Link>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
    onClick_reSend=()=>{
    }
}

export default reset_pass_confirm;
