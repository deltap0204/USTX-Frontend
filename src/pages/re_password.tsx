import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Link, withRouter, RouteComponentProps} from "react-router-dom";
import Header from './header';
import Footer from './Footer';
import axios from 'axios'
interface props_section{
    reset_token: string,
    history: History
}
class re_password extends Component{
    render() {
        const reset_pass_token=Object(this.props).match.params.reset_pass_token;
        console.log(reset_pass_token);
        return (
            <div className="wrapper">
                <Header />
                <Section reset_token={String(Object(this.props).match.params.reset_pass_token)} history = {Object(this.props).history}/>
                <Footer />

            </div>
        );
    }
}

class Section extends Component <props_section> {
    state = {
        password:"",
        confirm_pass:"",
        Password_unmatch:"text-danger pt-5 hidden",
        Password_short:"text-danger pt-5 hidden",
        Password_required:"text-danger pt-5 hidden"
    }

    confirmpass = () =>{
        if(!this.state.password || !this.state.confirm_pass)
        {
            this.setState({Password_required:"text-danger pt-5"});
        }
        else if(this.state.password.length < 8 || this.state.password.length < 8)
        {
            this.setState({Password_short:"text-danger pt-5"});
        }
        else if(this.state.password!=this.state.confirm_pass)
        {
            this.setState({Password_unmatch:"text-danger pt-5"});
        }
        else
        {
            axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/new_pass', {
                new_pass: this.state.password ,
                reset_token: this.props.reset_token
            })
                .then((response) => {
                    console.log(response);
                    if (response.status == 200)
                    {
                        Object(this.props).history.push("/reset_pass_success");
                    }
                    else
                    {

                    }

                })
                .catch(function (err) {
                    console.log(err)

                });
        }

    }
    OnChangeHold =(e: React.ChangeEvent<HTMLInputElement>)=> {
        this.setState({Password_short:"text-danger pt-5 hidden"});
        this.setState({Password_unmatch:"text-danger pt-5 hidden"});
        this.setState({Password_required:"text-danger pt-5 hidden"});
        if(e.target.name=="new_password"){
            this.setState({password:e.target.value});
        }
        if(e.target.name=="confirm_pass"){
            this.setState({confirm_pass:e.target.value});
        }

    }
    render() {
        return (
            <div>
                <section className="middsection_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="loginbox">
                                    <h1>New Password</h1>

                                    <form className="login" name="login">
                                        <div className="form-group">
                                            <p className="entertxt"> Please enter your new password</p>
                                            <input type="password" onChange={this.OnChangeHold.bind(this)} name="new_password" className=" form-control inputtext passwordbg" placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" onChange={this.OnChangeHold.bind(this)} name="confirm_pass" className=" form-control inputtext passwordbg" placeholder="Confirmation Password" required />
                                            <h5 className={this.state.Password_unmatch}>Passwords are not match.</h5>
                                            <h5 className={this.state.Password_short}>Password should have at least 8 letters.</h5>
                                            <h5 className={this.state.Password_required}>Passwords are required.</h5>
                                        </div>


                                        <div className="form-group">
                                            <button  type="button" onClick={()=>this.confirmpass()} className="login-btn" >Change</button>
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
}

export default withRouter(Object(re_password));
