import React, { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import {Link} from "react-router-dom";
import axios from "axios";

//import Footer from './pages/Footer';
class confirm_mail extends Component {
  render() {

      const resetToken = (Object(this.props)).match.params.reset_Token;
      if (resetToken) {
          axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/sendResetToken', {
              reset_token: resetToken
          })
              .then((response) => {
                  //  debugger;
                  if (response.status == 200) {
                      console.log("yes! it has");
                      Object(this.props).history.push(`/new_pass/${resetToken}`);
                  } else if (response.status = 204)
                      console.log("no content");
              })
              .catch(function (err) {

                  console.log("error")
              });
      }
    return (
      <div className="wrapper">
        <Header />
      <Section />
      <Footer />

      </div>
    );
  }
}

let str = {
    reset_subtitle: "An email with a password reset",
    verify_subtitle: "Verification Email with your password"
};

class Section extends Component {
    state={
        emailRegister:""
    };
    componentWillMount(): void {

        let GetUser = (localStorage.getItem("emailRegister"));//my email address
        let loginData = Object(JSON.parse(String(localStorage.getItem("LoginData"))));
        if (GetUser == null) {

        }
        else
        {
            this.setState({emailRegister:GetUser});
        }

    }
   /* async submit(e: { preventDefault: () => void; }) {

        const { emailRegister} = this.state;

        if (emailRegister) {

                e.preventDefault();
                let response = await register({
                    emailRegister
                });

                if (response) {
                    this.setState({
                        isRegistered: true
                    });
                }
            }
         else {
            handleError('Please provide all details');
        }
    }
*/
    render() {

    return (
	<div>
<section className="middsection_form">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="loginbox" id="div--confirm-email">
                  <h1>Message Successfully Sent</h1>

                    <form className="login" name="login">
                        <div className="form-group">
                            <p className="entertxtnew"> An email with a password reset</p>

                            <p className="linksent">Link was sent to {this.state.emailRegister}</p>
                        </div>
                       

                        <div className="form-group">
                            <input type="button" value="re-send "  className="login-btn" onClick={()=>this.onClick_reSend()}/>
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

 export default confirm_mail;
