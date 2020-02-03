import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
import dashboard from "./dashboard";

class dashbord extends Component {

      state = {
          PaymentTap: "tabcontent ",
          TransactionsTap: "tabcontent hidden",
          DetailsTap: "tabcontent hidden",
          KYCTap: "tabcontent hidden",
         KYCFormAc:" kyc-form"

    }

    componentWillMount(): void {

    }
    render() {
        let GetUser = (localStorage.getItem("LoginData5"));
        if (GetUser == null) {
            window.location.href = "/login";

        }
        else
        {
            return (
                <div className="wrapper">
                    <Header/>
                    <section className="middsection_form dashboard-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className=" center-txt">
                                        <div className="tab">
                                            <button className="tablinks" onClick={() => this.openCityPayment()}
                                                    name="Payment" id="defaultOpen">Payment
                                            </button>
                                            <button className="tablinks" onClick={() => this.openCityTransactions()}
                                                    name="Transactions"> Tokens Transactions
                                            </button>
                                            <button className="tablinks" onClick={() => this.openCityDetails()}
                                                    name="Details"> Personal Details
                                            </button>
                                            <button className="tablinks" onClick={() => this.openCityKYC()}
                                                    name="KYC"> KYC
                                            </button>
                                        </div>


                                        <div id="payment" className={this.state.PaymentTap}>
                                            <div className="paybox">

                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1">#ID2330114</div>
                                                    <div className="rightbox textlabel1">Paid Amount</div>
                                                </div>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel2">100 Tokens</div>
                                                    <div className="rightbox textlabel3">$25,000</div>
                                                </div>
                                                <hr/>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1"><label>Payment Date:</label> 28
                                                        Nov,2018
                                                    </div>
                                                    <div className="rightbox textlabel1">Pay by: Stripe</div>


                                                </div>
                                            </div>
                                            <div className="paybox">

                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1">#ID2330114</div>
                                                    <div className="rightbox textlabel1">Paid Amount</div>
                                                </div>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel2">100 Tokens</div>
                                                    <div className="rightbox textlabel3">$25,000</div>
                                                </div>
                                                <hr/>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1"><label>Payment Date:</label> 28
                                                        Nov,2018
                                                    </div>
                                                    <div className="rightbox textlabel1">Pay by: Stripe</div>

                                                </div>
                                            </div>
                                            <div className="paybox">

                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1">#ID2330114</div>
                                                    <div className="rightbox textlabel1">Paid Amount</div>
                                                </div>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel2">100 Tokens</div>
                                                    <div className="rightbox textlabel3">$25,000</div>
                                                </div>
                                                <hr/>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1"><label>Payment Date:</label> 28
                                                        Nov,2018
                                                    </div>
                                                    <div className="rightbox textlabel1">Pay by: Stripe</div>


                                                </div>
                                            </div>
                                            <div className="paybox">

                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1">#ID2330114</div>
                                                    <div className="rightbox textlabel1">Paid Amount</div>
                                                </div>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel2">100 Tokens</div>
                                                    <div className="rightbox textlabel3">$25,000</div>
                                                </div>
                                                <hr/>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1"><label>Payment Date:</label> 28
                                                        Nov,2018
                                                    </div>
                                                    <div className="rightbox textlabel1">Pay by: Stripe</div>


                                                </div>
                                            </div>
                                            <div className="paybox">

                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1">#ID2330114</div>
                                                    <div className="rightbox textlabel1">Paid Amount</div>
                                                </div>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel2">100 Tokens</div>
                                                    <div className="rightbox textlabel3">$25,000</div>
                                                </div>
                                                <hr/>
                                                <div className="paymenttable">
                                                    <div className="leftbox textlabel1"><label>Payment Date:</label> 28
                                                        Nov,2018
                                                    </div>
                                                    <div className="rightbox textlabel1">Pay by: Stripe</div>

                                                </div>
                                            </div>
                                        </div>


                                        <div id="token" className={this.state.TransactionsTap}>
                                            <div className="paybox">
                                                <div className=" tokencontent">
                                                    <div className="timebox"><span className="timer ">28</span><label
                                                        className="textlabel1">Nov, 2018 </label> <label
                                                        className="addedcolor"> 09:41 PM</label> <p
                                                        className="view_statement"><a href="#" className="forgetpass">View
                                                        Transaction Settlement</a></p></div>
                                                    <div className=""><label className="addedcolor">Added</label></div>
                                                    <div className="added"><span className="font-40">+ 100</span><p
                                                        className="tokensub">tokens</p></div>
                                                    <div className="view">
                                                        <button className="see_break" data-toggle="collapse" id="btn1"
                                                                data-target="#demo">See Breakup
                                                        </button>
                                                        <div><img src="images/minus.png" data-toggle="collapse" id="img1"
                                                                  data-target="#demo" className="img-responsive minusimg"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="demo" className="collapse align_div">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Transferred </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">145 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Received</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">142 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Transaction Cost </label> <label
                                                            className="addedcolor"> usually ethereum gas cost</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12">
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> From :</label> <label
                                                            className="textlabel1">Devid Warner </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> To :</label> <label
                                                            className="textlabel1">Jason bahenroof </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="paybox">
                                                <div className=" tokencontent">
                                                    <div className="timebox"><span className="timer ">28</span><label
                                                        className="textlabel1">Nov, 2018 </label> <label
                                                        className="addedcolor"> 09:41 PM</label> <p
                                                        className="view_statement"><a href="#" className="forgetpass">View
                                                        Transaction Settlement</a></p></div>
                                                    <div className=""><label className="addedcolor">Deduct</label></div>
                                                    <div className="subtract"><span className="font-40">- 100</span><p
                                                        className="tokensub">tokens</p></div>
                                                    <div className="view">
                                                        <button className="see_break" data-toggle="collapse" id="btn3"
                                                                data-target="#demo1">See Breakup
                                                        </button>
                                                        <div><img src="images/minus.png" data-toggle="collapse" id="img3"
                                                                  data-target="#demo1" className="img-responsive minusimg"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="demo1" className="collapse align_div">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Transferred </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">145 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6  col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Received</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">142 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6  left-txt">
                                                            <label className="textlabel1">Transaction Cost </label> <label
                                                            className="addedcolor"> usually ethereum gas cost</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12">
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> From :</label> <label
                                                            className="textlabel1">Devid Warner </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> To :</label> <label
                                                            className="textlabel1">Jason bahenroof </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="paybox">
                                                <div className=" tokencontent">
                                                    <div className="timebox"><span className="timer ">28</span><label
                                                        className="textlabel1">Nov, 2018 </label> <label
                                                        className="addedcolor"> 09:41 PM</label> <p
                                                        className="view_statement"><a href="#" className="forgetpass">View
                                                        Transaction Settlement</a></p></div>
                                                    <div className=""><label className="addedcolor">Added</label></div>
                                                    <div className="added"><span className="font-40">+ 100</span><p
                                                        className="tokensub">tokens</p></div>
                                                    <div className="view">
                                                        <button className="see_break" data-toggle="collapse" id="btn2"
                                                                data-target="#demo2">See Breakup
                                                        </button>
                                                        <div><img src="images/minus.png" data-toggle="collapse" id="img2"
                                                                  data-target="#demo2" className="img-responsive minusimg"/>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div id="demo2" className="collapse align_div">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Transferred </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">145 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Received</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">142 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Transaction Cost </label> <label
                                                            className="addedcolor"> usually ethereum gas cost</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12">
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> From :</label> <label
                                                            className="textlabel1">Devid Warner </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> To :</label> <label
                                                            className="textlabel1">Jason bahenroof </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="paybox">
                                                <div className=" tokencontent">
                                                    <div className="timebox"><span className="timer ">28</span><label
                                                        className="textlabel1">Nov, 2018 </label> <label
                                                        className="addedcolor"> 09:41 PM</label> <p
                                                        className="view_statement"><a href="#" className="forgetpass">View
                                                        Transaction Settlement</a></p></div>
                                                    <div className=""><label className="addedcolor">Deduct</label></div>
                                                    <div className="subtract"><span className="font-40">- 100</span><p
                                                        className="tokensub">tokens</p></div>
                                                    <div className="view">
                                                        <button className="see_break" data-toggle="collapse" id="btn4"
                                                                data-target="#demo3">See Breakup
                                                        </button>
                                                        <div><img src="images/minus.png" data-toggle="collapse" id="img4"
                                                                  data-target="#demo3" className="img-responsive minusimg"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="demo3" className="collapse align_div">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Transferred </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">145 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Token Received</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">142 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Transaction Cost </label> <label
                                                            className="addedcolor"> usually ethereum gas cost</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="textlabel1">Service Fee </label> <label
                                                            className="addedcolor"> platform fee</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 right-txt">
                                                            <label className="textlabel1">USTX25 </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12">
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> From :</label> <label
                                                            className="textlabel1">Devid Warner </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 left-txt">
                                                            <label className="addedcolor"> To :</label> <label
                                                            className="textlabel1">Jason bahenroof </label>
                                                            <img src="images/copy.png"
                                                                 className="img-responsive copyimg img-right"/>
                                                            <p className="key">:0x3547da9991a0c8b2842e000817c41e74f871232a</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div id="personal" className={this.state.DetailsTap}>
                                            <div className="personal-detaile paybox">
                                                <form name="personalDetaile">
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">First Name</label>
                                                                <input type="text" defaultValue="Daniel"
                                                                       className="personalinput"/>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">Last Name</label>
                                                                <input type="text" defaultValue="Smith" required
                                                                       className="personalinput"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">Phone</label>
                                                                <input type="text" defaultValue="+91 8547589652" required
                                                                       className="personalinput"/>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">E-mail Address</label>
                                                                <input type="text" defaultValue="danielsmith@gmail.com"
                                                                       required className="personalinput"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">Date of Birth
                                                                    (yyyy-mm-dd)</label>
                                                                <input type="text" defaultValue="1988-08-29" required
                                                                       className="personalinput"/>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">SSN</label>
                                                                <input type="text" defaultValue="955112121212" required
                                                                       className="personalinput"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12 col-sm-12">
                                                                <label className="inputlabel">Country of Residence</label>
                                                                <input type="text" defaultValue="United State" required
                                                                       className="personalinput"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <label className="inputlabel">Address line 1</label>
                                                                <input type="text"
                                                                       defaultValue="P.O. Box 942873, Sacramento, CA 94273"
                                                                       required className="personalinput"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <label className="inputlabel">Address line 2</label>
                                                                <input type="text"
                                                                       defaultValue="P.O. Box 942873, Sacramento, CA 94273"
                                                                       required className="personalinput"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-4 col-sm-4">
                                                                <label className="inputlabel">City</label>
                                                                <input type="text" defaultValue="Los Angeles" required
                                                                       className="personalinput"/>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4">
                                                                <label className="inputlabel">State</label>
                                                                <input type="text" defaultValue="Colorado" required
                                                                       className="personalinput"/>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4">
                                                                <label className="inputlabel">Zip Code</label>
                                                                <input type="text" defaultValue="10247" required
                                                                       className="personalinput"/>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <button type="submit" className="change_psd_btn"> Change
                                                                    Password?
                                                                </button>
                                                                <button type="submit" className="edit_profile">Edit
                                                                    Profile
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <div id="kyc" className={this.state.KYCTap}>
                                            <div className={this.state.KYCFormAc}>
                                                <iframe className="iframe_KYC" src="https://test-api.sumsub.com/idensic/sumsub-kyc/#/5ca346780a975a4e3dd387fd" ></iframe>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer/>

                </div>
            );
        }



    }

     openCityPayment=() => {


         this.setState({PaymentTap:"tabcontent active"});
         this.setState({TransactionsTap:"tabcontent hidden"});
         this.setState({DetailsTap:"tabcontent hidden"});
         this.setState({KYCTap:"tabcontent hidden"});


    };

    openCityTransactions=() => {
        this.setState({PaymentTap:"tabcontent hidden"});
        this.setState({TransactionsTap:"tabcontent active"});
        this.setState({DetailsTap:"tabcontent hidden"});
        this.setState({KYCTap:"tabcontent hidden"});

    };
    openCityDetails=() => {
        this.setState({PaymentTap:"tabcontent hidden"});
        this.setState({TransactionsTap:"tabcontent hidden"});
        this.setState({DetailsTap:"tabcontent active"});
        this.setState({KYCTap:"tabcontent hidden"});
    };
    openCityKYC=() => {
        this.setState({PaymentTap:"tabcontent hidden"});
        this.setState({TransactionsTap:"tabcontent hidden"});
        this.setState({DetailsTap:"tabcontent hidden"});
        this.setState({KYCTap:"tabcontent active"});
    };
    BtnNextClick =() =>
    {
        this.setState({KYCFormAc:"kyc-form active"})
    }
    BtnBackClick =() =>
    {
        this.setState({KYCFormAc:"kyc-form"})
    }
    }

export default dashbord;
