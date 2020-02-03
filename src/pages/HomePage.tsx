import "./../assets/scss/app.scss";
import "./../assets/css/home.css";
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

import { Link } from "react-router-dom";

import Particles from 'react-particles-js';
import {Line} from 'react-chartjs-2';
import Footer from './Footer';
import  axios from "axios";
import {array} from "prop-types";
import {link} from "fs";


interface props {

    chartData: [];
    toggle(index: number): void;
    isOpen1: boolean;
    isOpen2: boolean;
    isOpen3: boolean;
    isOpen4: boolean;
    isOpen5: boolean;
    isOpen6: boolean;
    isOpen7: boolean;



}

interface state {}

class HomePage extends Component <props,state>{

        state = {

            data: 'nav',
            Name: "",
            loginBTNStatus:"login_btn",
            nameBTNStatus:"login_btn",
            logOutBTNStatus:"",
            logOutBtnSrc:"./img/logout.png"

        };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillMount(): void {
        let GetUser=(localStorage.getItem("LoginData5"));
        if (GetUser !='undefined' && GetUser != null)
        {
            console.log(GetUser);
            let userInf=JSON.parse(GetUser || "null");
            this.setState({Name: "Hi "+ userInf.firstName});
            this.setState({loginBTNStatus:"login_btn hidden"});



        }
        else
        {
            this.setState({nameBTNStatus:"login_btn hidden"});
            this.setState({logOutBTNStatus:"hidden"});

        }

    }

    handleScroll = () => {
        var ScrollTop = document.documentElement.scrollTop;
        if (ScrollTop > 0) {
            //    $navbar.addClass("sticky");
            this.setState({data: 'nav sticky'});
            this.setState({logOutBtnSrc:"./img/logout2.png"});

        } else {
            //  $navbar.removeClass("sticky");
            this.setState({data: 'nav'});
            this.setState({logOutBtnSrc:"./img/logout.png"});


        }

    }


    render() {

    return (
      <div className="wrapper">

          <section className="header_box onluhome">

              <header>
                  <nav id="nav" className={this.state.data}>
                      <button className="menu">
                          <em className="hamburger"></em>
                      </button>
                      <div className="brand">
                          <Link to="/"><img src="./img/logo-white.png" className="img-responsive non-sticky"/></Link>
                          <Link to="/"> <img src="./img/logo-black.png" className="img-responsive stickylo"/></Link>
                      </div>
                      <ul className="navbar pull-right">
                          <li>
                              <Link to="/buy">Buy</Link>
                          </li>
                          <li>
                              <Link to="/about"> News</Link>
                          </li>
                          <li>
                              <Link to="#">Help</Link>
                          </li>
                          <li>
                              <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                              <Link id="login" to="/login" className={this.state.loginBTNStatus}>Login</Link>

                          </li>

                          <li>
                              <Link to="/dashboard" className={this.state.nameBTNStatus}>{this.state.Name}</Link>
                          </li>
                          <li className={this.state.logOutBTNStatus}>
                              <img onClick={()=>this.LogOutBtn()} src={this.state.logOutBtnSrc} className=""/>
                          </li>
                      </ul>
                  </nav>


                  <div id="particles-js">
                      <Particles/>
                  </div>
                  <div className="count-particles"><span className="js-count-particles">--</span> particles</div>


              </header>
              <section className="header_text_section">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 center-txt">
                              <a href="#" className="gold_taken_btn">1 Gold Taken /$1 USD Market Cap: 1000k</a>
                              <h1 className="top-header_heading font-44 bold">The fastest way to buy Gold</h1>
                              <p className="pera">Lorem Ipsum is simply dummy text of the printing and typesetting
                                  industry. </p>

                              <div className="goldbtn anim">
                                  <a href="/buy" className="gold_btn"> Buy Gold </a>
                                  <a href="#" className="sell_btn slide"> Sell Gold </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="graphsection">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-5 col-sm-4" id="chartLine">
                              <Line
                                     height={100}
                                  data={this.props.chartData}
                                  options={{
                                      title:
                                          {
                                              display: false
                                          },
                                      legend: {
                                          display: false

                                      },
                                      scales: {
                                          xAxes: [{
                                              gridLines: {
                                                  display: true,
                                              },
                                              ticks: {
                                                  fontColor: "#fff",
                                                  fontSize: "15",
                                                  fontWeight: "700"
                                              },
                                          }],
                                          yAxes: [{
                                              display: true,
                                              gridLines: {
                                                  display: true,
                                              },
                                              ticks: {
                                                  fontColor: "#fff",
                                                  fontSize: "15"
                                              },
                                          }],
                                      }
                                  }}

                              />
                          </div>
                          <div className="col-md-7 col-sm-8">
                              <div className="currency_price col-md-4 col-sm-4 col-xs-4 top-price center-txt">
                                  <p className="pera"><sup>$</sup><strong
                                      className="font-38">14.018.</strong><sup>65</sup></p>
                                  <label className="ratetxt">Currency Price</label>
                              </div>
                              <div className="currency_price col-md-4 col-sm-4 col-xs-4 center-txt">
                                  <div className="ratingproce">
                                      <img src="./img/hightrate.png"/>
                                      <p className="pera"><sup>$</sup><strong
                                          className="font-38">122.</strong><sup>65</sup></p>
                                  </div>
                                  <label className="ratetxt">Past Hour (USD)</label>
                              </div>
                              <div className="currency_price col-md-4 col-sm-4 col-xs-4 center-txt">
                                  <div className="ratingproce">
                                      <img src="./img/lowrate.png"/>
                                      <p className="pera"><sup>$</sup><strong
                                          className="font-38">02.8</strong><sup>%</sup></p>
                                  </div>

                                  <label className="ratetxt">Past Hour (%)</label>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

          </section>


              <section className="aboutsection">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-5 col-sm-3"  data-aos="fade-right">
                              <img src="./img/logobig.png" className="img-responsive no-img" />
                          </div>
                          <div className="col-md-7 col-sm-9" data-aos="fade-left">
                              <h2 className="subheading subtxt">About Project</h2>
                              <p className="headbig">USTX</p>

                              <p className="aboutpera"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          </div>
                      </div>
                  </div>
              </section>


              <section className="featurebox top-spac">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 center-txt" data-aos="zoom-in">
                              <h1 className="headingbg bigheading">Some Features</h1>
                              <p className="aboutpera"> Lorem Ipsum is simply dummy text  the printing and typesetting industry. <br />Lorem Ipsum has been the industry's </p>

                              <div className="featurebox featureslidr" data-aos="zoom-in">
                                  <div className="col-md-4 col-sm-6">
                                      <div className="outerfeaturbx">
                                          <div className="maskview hvr-rectangle-out">
                                              <p className="font-21white">Buy with any credit card</p>
                                              <p className="pera font-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                          </div>
                                          <figure className="imgb">
                                              <img src="./img/1.png" className="img-responsive" />
                                          </figure>

                                          <h2 className="font21semibold"> Fast Gold Delivery</h2>

                                      </div>
                                  </div>

                                  <div className="col-md-4 col-sm-6">
                                      <div className="outerfeaturbx">
                                          <figure className="imgb">
                                              <img src="./img/4.png" className="img-responsive" />
                                          </figure>

                                          <h2 className="font21semibold"> Fast Gold Delivery</h2>
                                          <div className="maskview hvr-rectangle-out">
                                              <p className="font-21white">Buy with any credit card</p>
                                              <p className="pera font-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-4 col-sm-6">
                                      <div className="outerfeaturbx">
                                          <figure className="imgb">
                                              <img src="./img/3.png" className="img-responsive" />
                                          </figure>

                                          <h2 className="font21semibold"> Earn more with our
                                              affiliate program</h2>
                                          <div className="maskview hvr-rectangle-out">
                                              <p className="font-21white">Buy with any credit card</p>
                                              <p className="pera font-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-4 col-sm-6">
                                      <div className="outerfeaturbx">
                                          <figure className="imgb">
                                              <img src="./img/4.png" className="img-responsive" />
                                          </figure>

                                          <h2 className="font21semibold"> Buy with any credit card</h2>
                                          <div className="maskview hvr-rectangle-out">
                                              <p className="font-21white">Buy with any credit card</p>
                                              <p className="pera font-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-4 col-sm-6">
                                      <div className="outerfeaturbx">
                                          <figure className="imgb">
                                              <img src="./img/5.png" className="img-responsive" />
                                          </figure>

                                          <h2 className="font21semibold"> Secure</h2>
                                          <div className="maskview hvr-rectangle-out">
                                              <p className="font-21white">Buy with any credit card</p>
                                              <p className="pera font-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-4 col-sm-6">
                                      <div className="outerfeaturbx">
                                          <figure className="imgb">
                                              <img src="./img/f6.png" className="img-responsive" />
                                          </figure>

                                          <h2 className="font21semibold">Trusted bu thousands</h2>

                                          <div className="maskview hvr-rectangle-out">
                                              <p className="font-21white">Buy with any credit card</p>
                                              <p className="pera font-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>
              <section className="stepboxsection top-spac">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-7">
                              <h1 className="headingbg bigheading">How it works</h1>
                              <p className="aboutpera"> Lorem Ipsum is simply dummy text  the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              <div className="stepbox">
                                  <div className="step1" data-aos="fade-left" data-aos-delay="1000"  data-aos-duration="1000">
                                      <h2 className="stepbtn perlecolor">step 1</h2>
                                      <p className="pera">Lorem Ipsum is simply dummy text  the printing</p>
                                  </div>

                                  <div className="step2" data-aos="fade-left" data-aos-delay="2000"  data-aos-duration="4000">
                                      <h2 className="stepbtn perlecolor1">step 2</h2>
                                      <p className="pera">Lorem Ipsum is simply dummy text of the printing</p>
                                  </div>

                                  <div className="step3" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="5000">
                                      <h2 className="stepbtn perlecolor2">step 3</h2>
                                      <p className="pera">Lorem Ipsum is simply dummy text of the printing</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-5 img-space" data-aos="fade-left">
                              <img src="./img/brand.png" className="img-responsive no-img" />
                          </div>
                      </div>
                  </div>
              </section>

              <section className="faqsection top-spac">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 center-txt" data-aos="zoom-in">
                              <h1 className="headingbg bigheading">FAQ's</h1>
                              <p className="aboutpera"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's </p>



                              <div className="fax top-spac">
                                  <div className="panel-group" id="accordion">
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(1)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen1
                                                  })}><span className={"expanicon "+  (this.props.isOpen1 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen1}
                                                      className={
                                                          "app__collapse app__collapse--gradient  " +
                                                          (this.props.isOpen1 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(2)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen2
                                                  })}><span className={"expanicon "+  (this.props.isOpen2 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen2}
                                                      className={
                                                          "app__collapse app__collapse--gradient " +
                                                          (this.props.isOpen2 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(3)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen3
                                                  })}><span className={"expanicon "+  (this.props.isOpen3 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen3}
                                                      className={
                                                          "app__collapse app__collapse--gradient " +
                                                          (this.props.isOpen3 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(4)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen4
                                                  })}><span className={"expanicon "+  (this.props.isOpen4 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen4}
                                                      className={
                                                          "app__collapse app__collapse--gradient " +
                                                          (this.props.isOpen4 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>

                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(5)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen5
                                                  })}><span className={"expanicon "+  (this.props.isOpen5 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen5}
                                                      className={
                                                          "app__collapse app__collapse--gradient " +
                                                          (this.props.isOpen5 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>

                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(6)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen6
                                                  })}><span className={"expanicon "+  (this.props.isOpen6 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen6}
                                                      className={
                                                          "app__collapse app__collapse--gradient " +
                                                          (this.props.isOpen6 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel panel-default">
                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a onClick={() => this.props.toggle(7)}  className={cx("font-20 ", {
                                                      "app__toggle--active": this.props.isOpen7
                                                  })}><span className={"expanicon "+  (this.props.isOpen7 ? "cross" : "plus")}></span> What is Lorem Ipsum?</a>
                                              </h4>
                                          </div>
                                          <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body">
                                                  <Collapse
                                                      isOpen={this.props.isOpen7}
                                                      className={
                                                          "app__collapse app__collapse--gradient " +
                                                          (this.props.isOpen7 ? "app__collapse--active" : "")
                                                      }
                                                  >
                                                      <p className="font-18 panel-body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                                  </Collapse>

                                              </div>
                                          </div>
                                      </div>

                                  </div>

                                  <a  className="viewallbtn">View All</a>
                              </div>




                          </div>

                      </div>
                  </div>
              </section>





              <Footer  />
      </div>
    );
  }
    LogOutBtn=()=>
    {
        window.localStorage.removeItem("LoginData5");

        window.location.href="/";
    }
}






function mapStateToProps (state: any)
{
    return{
        chartData:state.chartData,
        isOpen1:state.isOpen1,
        isOpen2:state.isOpen2,
        isOpen3:state.isOpen3,
        isOpen4:state.isOpen4,
        isOpen5:state.isOpen5,
        isOpen6:state.isOpen6,
        isOpen7:state.isOpen7,
        user:[],
        count:0

    }
}

function mapDispatchToProps (dispatch: any)
{
   return {
       toggle: (index: number) => dispatch({type: "TOGGLECLICK",payload: index})
   }

}




export default connect(mapStateToProps,mapDispatchToProps)(HomePage) ;
