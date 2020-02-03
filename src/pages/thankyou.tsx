import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
import {Link} from "react-router-dom";
class thankyou extends Component {
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
    <div className="container" id="div--thankyou--message">

        <div className="row">
            <div className="col-md-12">
                <div className="buybox center-txt">
                        <img src="./img/thum.png" className="img-responsive center-img" />                    
                        <p className="entertxtnew createwallet left-spac" >Thank you!<br />
                                we have recieved your order</p>

                                <p className="aboutpera pad-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                      
                              
                                <form>
                                    <Link to="/"> Back Home </Link>
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


 export default thankyou;
