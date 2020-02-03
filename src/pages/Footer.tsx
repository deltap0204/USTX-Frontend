import React, { Component } from 'react';
import ReactDOM from "react-dom";

 class Footer extends Component {
  render() {
    return (
	<div>
	
	<section className="newletter">
        <div className="container">
          <div className="row">
             <div className="col-md-12 center-txt">
               <p className="subscribetext">Subscribe to our newsletter</p>

               <div className="newsletter">
                 <form>
                   <div className="newsgroup">
                       <input type="text" className="form-control newstxt" placeholder="Your Email Address" />
                       <input type="submit" className="newsbtn" value="Subscribe" />
                   </div>
                  
                 </form>
               </div>
             </div>
          </div>
        </div>
      </section>
<footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div className="logo">
           <img src="./img/logo-black.png" className="img-responsive" />
        </div>
  
        <div className="footerbox">
           <div className="icon">
              <img src="./img/loc.png" className="" />
           </div>
           <div className="contaxt">
             <span>3018, Second Floor, Ranjeet Nagar
                New Delhi-110008 </span>
            </div>
        </div>
        <div className="footerbox">
            <div className="icon">
               <img src="./img/call.png" className="" />
            </div>
            <div className="contaxt">
              <span>+1 (888) 650-1842 </span>
             </div>
         </div>
         <div className="footerbox">
            <div className="icon">
               <img src="./img/mail.png" className="" />
            </div>
            <div className="contaxt">
              <span>sales@ustx.com</span>
             </div>
         </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3 className="footer-heading">Resources</h3>
  
          <ul className="resourcelist">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Whitepaper</a></li>
            <li><a href="#">Transparency</a></li>
            <li><a href="#">Fees</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
  
          </div>
          <div className="col-md-3 col-sm-6">
              <h3 className="footer-heading">About</h3>
  
              <ul className="resourcelist">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Knowledge Base</a></li>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Transparency</a></li>
                <li><a href="#">Fees</a></li>
                <li><a href="#">Legal</a></li>
              </ul>
  
            </div>
            <div className="col-md-3 col-sm-6">
                <h3 className="footer-heading">connect</h3>
  
                <ul className="resourcelist">
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Knowledge Base</a></li>
                  <li><a href="#">Whitepaper</a></li>
                  <li><a href="#">Transparency</a></li>
                  <li><a href="#">Fees</a></li>
                  <li><a href="#">Legal</a></li>
                </ul>
  
              </div>
              <div className="col-md-12">
                  <p className="copytxt"> © 2019 USTX</p>
              </div>
      </div>
      
    </div>
  </footer>
	
	</div>
	
	);
  }
 }
 export default Footer;