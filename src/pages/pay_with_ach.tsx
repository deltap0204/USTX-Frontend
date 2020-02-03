import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
class pay_with_ach extends Component {
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
                <div className="buybox center-txt">
                    <a href="buy.html" className="backbtn"><img src="./img/back.png" className="img-responsive" /></a>
                    <p className="purchaseamount">Purchase Amount</p>
                        <p className="entertxtnew">$1500 USD / 11483 GTK</p>

                        <p className="italictext achbg"> Pay with credit ACH</p>
                       

                        <p  className="stripform">Stripe External Form</p>
                </div>
            </div>
        </div>
    </div>
</section>
	</div>
	
	);
  }
}

 export default pay_with_ach;
