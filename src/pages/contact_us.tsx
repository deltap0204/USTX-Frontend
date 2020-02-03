import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
class contact extends Component {
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
<section className="middsection_form top-spac">
    <div className="container">
        <div className="row">
            <div className="col-md-12 center-txt">
                    <h1 className="headingbg bigheading">Contact Us</h1>
            </div>
            <div className="contact_inner">
            <div className="col-md-6 pad-top">
                <div className="contact-txt">
                    <div className="countryimg">
                        <img src="./img/lotus.png" className="img-responsive" />

                    </div>
                    <div className="pad-top">
                        <h1>Australia</h1>
                        <div className="footerbox">
                                <div className="icon">
                                   <img src="./img/loc.png" className="" />
                                </div>
                                <div className="contaxt">
                                  <span>795 South Park Avenue, Melbourne, 
                                        Australia</span>
                                 </div>
                             </div>
                             <div className="footerbox">
                                    <div className="icon">
                                       <img src="./img/call.png" className="" />
                                    </div>
                                    <div className="contaxt">
                                      <span>8 800 567.890.11 </span>
                                     </div>
                                 </div>
                                 <div className="footerbox">
                                    <div className="icon">
                                       <img src="./img/mail.png" className="" />
                                    </div>
                                    <div className="contaxt">
                                      <span>support@ustx.com</span>
                                     </div>
                                 </div>
                               
                    </div>


                </div>
            </div>
            <div className="col-md-6 pad-top">
                <div className="contactbox">
                    <p className="entertxt boldcontact"> If you are interested in working
                            with us, please get in touch</p>
                    <form className="contact" name="contact">
                            <div className="form-group">
                                <input type="text" className="form-control inputtext" placeholder="What is your name?" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control inputtext" placeholder="Your email address" required />
                            </div>
                            <div className="form-group">
                                    <input type="text" className="form-control inputtext" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                        <input type="text" className="form-control inputtext" placeholder="Subject" required />
                                    </div>
                                    
                            <div className="form-group">
                                <input type="submit" value="Send a Message" className="login-btn" />
                             </div>
    
                           
                        </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>
	</div>
	
	);
  }
}

 
 export default contact;
