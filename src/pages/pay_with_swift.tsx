import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
class pay_with_swift extends Component {
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
                <div className="buybox center-txt pay-card">
                    <a href="buy.html" className="backbtn"><img src="./img/back.png" className="img-responsive" /></a>
                    <p className="purchaseamount">Purchase Amount</p>
                        <p className="entertxtnew">$1500 USD / 11483 GTK</p>

                        <p className="italictext achbg"> Pay with credit swift</p>
                       

                        <div className="row boxflex top-head">
                            <div className="col-md-3 col-sm-3">
                                 <label className="labeltxt">IBAN</label> 
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <div className="graybgbox">
                                    <p className="greentxtbox">2564513454112315</p>
                                </div>
                             </div>
                        </div>
                        <div className="row boxflex">
                                <div className="col-md-3 col-sm-3">
                                     <label className="labeltxt">SWIFT</label> 
                                </div>
                                <div className="col-md-9 col-sm-9">
                                    <div className="graybgbox">
                                        <p className="greentxtbox">KRfsksfbhb</p>
                                    </div>
                                 </div>
                            </div>
                            <div className="row boxflex">
                                    <div className="col-md-3 col-sm-3">
                                         <label className="labeltxt"> Amount </label> 
                                    </div>
                                    <div className="col-md-9 col-sm-9">
                                        <div className="graybgbox">
                                            <p className="greentxtbox">15000 USD</p>
                                        </div>
                                     </div>
                                </div>

                                <div className="row boxflex">
                                        <div className="col-md-3 col-sm-3">
                                             <label className="labeltxt"> remarks </label> 
                                        </div>
                                        <div className="col-md-9 col-sm-9">
                                            <div className="graybgbox">
                                                <p className="greentxtbox">Nomarks</p>
                                            </div>
                                         </div>
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

 export default pay_with_swift;
