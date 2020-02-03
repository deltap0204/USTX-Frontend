import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
class pay_with_creditcard extends Component {
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

	</div>
	
	);
  }
}

 export default pay_with_creditcard;
