import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
class wallet extends Component {
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
                <div className="buybox">
                        <img src="./img/alert.png" className="img-responsive center-img" />                    
                        <p className="entertxtnew center-txt createwallet left-spac" >Please write down your wallet details</p>

                        <div className="walletinfoheading">
                                <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6"><p className="aboutpera">Seed backup phrase</p></div>
                            <div className="col-md-6 col-sm-6 col-xs-6"><img src="./img/copy.png" className="img-responsive copyimg img-right" /></div>
                                </div>
                            <div className="col-md-12">
                                <div className="backup-box">
                                    <p>:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                </div>
                            </div>
                        </div>

                        <div className="walletinfoheading">
                                <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6"><p className="aboutpera">Private key</p></div>
                                <div className="col-md-6 col-sm-6 col-xs-6"><img src="./img/copy.png" className="img-responsive copyimg img-right" /></div>
                                </div>
                                <div className="col-md-12">
                                    <div className="backup-box">
                                        <p>:8b83ad96664fe308301b64d50b0ba0a89a80162e7028bed71b4542473420038f</p>
                                    </div>
                                </div>
                            </div>

                            <div className="walletinfoheading">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-6"><p className="aboutpera">Public key</p></div>
                                    <div className="col-md-6 col-sm-6 col-xs-6"><img src="./img/copy.png" className="img-responsive copyimg img-right" /></div>
                                </div>
                                    <div className="col-md-12">
                                        <div className="backup-box">
                                            <p>:8b83ad96664fe308301b64d50b0ba0a89a80162e7028bed71b4542473420038f</p>
                                        </div>
                                    </div>
                                </div>


                              
                                <form>
                           
                       <div  className="top-head1"> <input type="submit" value="Continue" className="login-btn top-head1" /> </div>
                          
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

 export default wallet;
