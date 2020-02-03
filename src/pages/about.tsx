import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';


class About extends Component {
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
                    <h1 className="headingbg bigheading">About Us</h1>
                    <p className="aboutpera">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="col-md-12 center-txt meet-team top-spac">
                    <h1 className="headingbg bigheading">Meet Our Team</h1>
        <div className="col-md-12 teamslider">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="teambox">
                <figure className="team">
                    <img src="./img/team1.png" className="img-responsive" />
                </figure>
                <div className="aboutteam">
                    <h4 className="name">Name Here</h4>
                    <label className="desigination">Designation here</label>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="teambox">
                    <figure className="team">
                        <img src="./img/team2.png" className="img-responsive" />
                    </figure>
                    <div className="aboutteam">
                        <h4 className="name">Name Here</h4>
                        <label className="desigination">Designation here</label>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="teambox">
                        <figure className="team">
                            <img src="./img/team3.png" className="img-responsive" />
                        </figure>
                        <div className="aboutteam">
                            <h4 className="name">Name Here</h4>
                            <label className="desigination">Designation here</label>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="teambox">
                            <figure className="team">
                                <img src="./img/team4.png" className="img-responsive" />
                            </figure>
                            <div className="aboutteam">
                                <h4 className="name">Name Here</h4>
                                <label className="desigination">Designation here</label>
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
 
 export default About;
