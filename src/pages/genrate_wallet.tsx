import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
class genrate_wallet extends Component {
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
                        <img src="./img/alert.png" className="img-responsive center-img" />                    
                        <p className="entertxtnew createwallet left-spac" >Please understand that creating
                                a wallet online is not safe</p>

                                <p className="aboutpera pad-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                       <div className="purchaseamount checkbox">  <input type="checkbox" className="" />  <label>I understand and accept</label></div>
                              
                                <form>
                           
                       
                     <input type="submit" value="Continue" className="login-btn" />       
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

 export default genrate_wallet;
