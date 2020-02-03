import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import {Link, match, matchPath} from "react-router-dom";
import Header from './header';
import Footer from './Footer';
import {debug} from "util";
interface  props_section {
    history : History
}
class forget_password extends Component {
  render() {
    return (
      <div className="wrapper">
         <Header />
      <Section history = {Object(this.props).history}/>
      <Footer />

      </div>
    );
  }
}

class Section extends Component <props_section>{
    state = {
        email: ""
    }
    sendResetEmail = () => {
        axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/sendResetEmail', {
            email: this.state.email
        })
            .then( (response)=> {
                if (response.status == 200)
                    Object(this.props).history.push("/confirm");
            })
            .catch(function (err) {

                console.log("error")
            });
        //window.location.href = "/confirm";
    }
    OnChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=> {
        debugger;
        this.state.email = e.target.value;
    }
  render() {
    return (
	<div>
<section className="middsection_form">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="loginbox">
                   <h1>Forget Password</h1>

                    <form className="login" name="login">
                        <div className="form-group">
                            <p className="entertxt"> Please enter your email</p>
                            <input onChange={this.OnChangeEmail.bind(this)} type="text" className="form-control inputtext emailbg" placeholder="Email" required  name="email"/>
                        </div>
                       

                        <div className="form-group">
                            <input type="button" value="Send" className="login-btn" onClick={()=>this.sendResetEmail()} />
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
 export default withRouter(Object(forget_password));
