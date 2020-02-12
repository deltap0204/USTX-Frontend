import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
import axios from "axios";
import {Link} from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';

interface props_section {
    history: History
}

class buy extends Component <props_section> {
    state = {
        TokenPrice: 10,
        UserId: "",
        USD: "",
        USTX: "",
        Name: "",
        Email: "",
        Address: "",
        CardName: "",
        CardNum: "",
        EXP: "",
        CVC: "",
        USD_Filled: "",
        USD_Validation: "text-danger pt-5 hidden",
        USTX_Validation: "text-danger pt-5 hidden",
        Name_Validation: "text-danger pt-5 hidden",
        Email_Validation: "text-danger pt-5 hidden",
        Address_Validation: "text-danger pt-5 hidden",
        CardName_Validation: "text-danger pt-5 hidden",
        CardNum_Validation: "text-danger pt-5 hidden",
        EXP_Validation: "text-danger pt-5 hidden",
        CVC_Validation: "text-danger pt-5 hidden",
        Email_Validation_Text: "",
        CardNum_Validation_Text: "",
        CVC_Validation_Text: ""

    };

    componentDidMount(): void {
        axios.post(process.env.REACT_APP_BACKEND_PATH + "admin/get_token_price").then(response => {
            console.log(response)
            if (response.status == 200) {
                this.setState({TokenPrice: response.data.TokenPrice||10});
            } else this.setState({TokenPrice: 10});
        })

        let GetUser = JSON.parse(localStorage.getItem('LoginData5') || '{}');
        ;
        if (GetUser != '{}') {
            this.setState({UserId: GetUser._id});
        }
    }

    render() {
        let GetUser = (localStorage.getItem("LoginData5"));
        if (GetUser == null) {
            window.location.href = "/login";

        } else {
            let User = JSON.parse(GetUser || '{}');
            if (User.sumSubVerified) {
                return (
                    <div className="wrapper">
                        <Header/>

                        <section className="middsection_form">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="buybox center-txt">
                                            <p className="entertxtnew">How many gold tokens you<br/>
                                                want to buy?</p>
                                            <div>
                                                <div className="formgold">
                                                    <div className="col-md-3 col-sm-3">

                                    <span className={`input input--haruki ${this.state.USD_Filled}`}>
                                            <input onChange={this.onUsdchange.bind(this)} value={this.state.USD}
                                                   className="input__field input__field--haruki" name="USD" type="text"
                                                   id="input-1"/>
                                            <label className="input__label input__label--haruki" htmlFor="input-1">
                                                <span
                                                    className="input__label-content input__label-content--haruki">USD</span>
                                            </label>
                                        <h5 className={this.state.USD_Validation}>Field is Required</h5>
                                     </span>

                                                    </div>
                                                    <div className="col-md-3 col-sm-3">
                                                        <p className="aboutpera">You will receive</p>
                                                    </div>
                                                    <div className="col-md-3 col-sm-3">
                                        <span className={`input input--haruki ${this.state.USD_Filled}`}>
                                                <input onChange={this.onUSTXchange.bind(this)} value={this.state.USTX}
                                                       name="ust" className="input__field input__field--haruki"
                                                       type="text" id="input-2"/>
                                                <label className="input__label input__label--haruki" htmlFor="input-2">
                                                    <span
                                                        className="input__label-content input__label-content--haruki">USTX</span>
                                                </label>
                                               <h5 className={this.state.USTX_Validation}>Field is Required</h5>

                                            </span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="row top-head">
                                                        <div className="form-group col-md-6" id="buy--input--name">
                                                            <input onChange={this.changeInput.bind(this)} name="Name"
                                                                   type="text" className="form-control inputtext1"
                                                                   placeholder="Name" required/>
                                                            <h5 className={this.state.Name_Validation}>Field is
                                                                Required</h5>
                                                        </div>
                                                        <div className="form-group col-md-6" id="buy--input--email">
                                                            <input onChange={this.changeInput.bind(this)} name="Email"
                                                                   type="text" className="form-control inputtext1"
                                                                   placeholder="Email" required/>
                                                            <h5 className={this.state.Email_Validation}>{this.state.Email_Validation_Text}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-6" id="buy--input--address">
                                                            <input onChange={this.changeInput.bind(this)} name="Address"
                                                                   type="text" className="form-control inputtext1"
                                                                   placeholder="Wallet Address" required/>
                                                            <h5 className={this.state.Address_Validation}>Field is
                                                                Required</h5>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <a href="https://www.myetherwallet.com/" target="_blank"
                                                               className="forgetpass1">Generate Wallet</a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="middsection_form">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="buybox center-txt pay-card creditBuy">

                                                                    <form>
                                                                        <div className="row top-head">
                                                                            <div className="form-group col-md-12" id="buy--input--card-name">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="CardName" type="text"
                                                                                    className="form-control inputtext1 userbg"
                                                                                    placeholder="Name on Card"
                                                                                    required/>
                                                                                <h5 className={this.state.CardName_Validation}>Field
                                                                                    is Required</h5>
                                                                            </div>
                                                                            <div className="form-group col-md-12" id="buy--input--card-number">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="CardNum" type="text"
                                                                                    className="form-control inputtext1 cardbg"
                                                                                    placeholder="Card Number" required/>
                                                                                <h5 className={this.state.CardNum_Validation}>{this.state.CardNum_Validation_Text}</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="form-group col-md-12" id="buy--input--card-expiry">

                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="EXP" type="text"
                                                                                    className="form-control inputtext1 mmy calbg"
                                                                                    placeholder="MM/YY" required/>
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="CVC" type="text"
                                                                                    className="form-control inputtext1 cvc passwordbg"
                                                                                    placeholder="CVC" required/>
                                                                                <h5 className={this.state.EXP_Validation}>Expire
                                                                                    Date is Required</h5>
                                                                                <h5 className={this.state.CVC_Validation}>{this.state.CVC_Validation_Text}</h5>
                                                                            </div>

                                                                        </div>


                                                                        <input type="button"
                                                                               onMouseDown={() => this.PayHandle()}
                                                                               value="BUY"
                                                                               className="login-btn paybtn" id="buy--button--submit"/>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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

            } else {
                return (
                    <div className="wrapper">
                        <Header/>

                        <section className="middsection_form" id="buy--div--unverified">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="buybox center-txt">
                                            <p className="entertxtnew">Please complete the KYC info to trade USTX. <a
                                                href="/dashboard">Click here to complete KYC</a></p>
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

    }

    PayHandle = () => {
        if (this.state.USD == null || this.state.USD.length == 0) {

            this.setState({USD_Validation: "text-danger pt-5"});


        } else if (this.state.USTX == null || this.state.USTX.length == 0) {

            this.setState({USTX_Validation: "text-danger pt-5"});


        } else if (this.state.Name == null || this.state.Name.length == 0) {

            this.setState({Name_Validation: "text-danger pt-5"});


        } else if (this.state.Email == null || this.state.Email.length == 0) {

            this.setState({Email_Validation: "text-danger pt-5"});
            this.setState({Email_Validation_Text: "Field is Required"});


        } else if (validateEmail(this.state.Email) == false) {
            this.setState({Email_Validation: "text-danger pt-5"});
            this.setState({Email_Validation_Text: "Enter correct Email"});

        } else if (this.state.Address == null || this.state.Address.length == 0) {

            this.setState({Address_Validation: "text-danger pt-5"});


        } else if (this.state.CardName == null || this.state.CardName.length == 0) {

            this.setState({CardName_Validation: "text-danger pt-5"});


        } else if (this.state.CardNum == null || this.state.CardNum.length == 0) {

            this.setState({CardNum_Validation: "text-danger pt-5"});
            this.setState({CardNum_Validation_Text: "Field is Required"});


        } else if (this.state.CardNum.length > 16 || this.state.CardNum.length < 16) {

            this.setState({CardNum_Validation: "text-danger pt-5"});
            this.setState({CardNum_Validation_Text: "Card Number must be 16 digits"});


        } else if (this.state.EXP == null || this.state.EXP.length == 0) {

            this.setState({EXP_Validation: "text-danger pt-5"});


        } else if (this.state.CVC == null || this.state.CVC.length == 0) {

            this.setState({CVC_Validation: "text-danger pt-5"});
            this.setState({CVC_Validation_Text: "Field is Required"});


        } else if (this.state.CVC.length > 3 || this.state.CVC.length < 3) {
            this.setState({CVC_Validation: "text-danger pt-5"});


            this.setState({CVC_Validation_Text: "CVC Number must be 3 digits"});


        } else {
            console.log(this.state);

            //ToDO: Send Buy Info to Server
            axios.post(process.env.REACT_APP_BACKEND_PATH + "api/buy", {
                type: false,    //buy
                UserId: this.state.UserId,
                USD: this.state.USD,
                USTX: (this.state.USTX).toString(),
                Name: this.state.Name,
                Email: this.state.Email,
                Address: this.state.Address,
                CardName: this.state.CardName,
                CardNum: this.state.CardNum,
                EXP: this.state.EXP,
                CVC: this.state.CVC
            })
                .then((response) => {
                    if (response.data.message == "success") {
                        Object(this.props).history.push("/thankyou");
                    }
                    console.log(response);
                })
                .catch(function (err) {
                    console.log("error")
                });
            // window.location.href="/thankyou";
        }

    }

    changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.name == "Name") {
            this.setState({Name: e.target.value});
            if (this.state.Name != null) {

                this.setState({Name_Validation: "text-danger pt-5 hidden"});

            }
        } else if (e.target.name == "Email") {
            this.setState({Email: e.target.value});
            if (this.state.Email != null) {

                this.setState({Email_Validation: "text-danger pt-5 hidden"});

            }
        } else if (e.target.name == "Address") {
            this.setState({Address: e.target.value});
            if (this.state.Address != null) {

                this.setState({Address_Validation: "text-danger pt-5 hidden"});

            }
        } else if (e.target.name == "CardName") {
            this.setState({CardName: e.target.value});
            if (this.state.CardName != null) {

                this.setState({CardName_Validation: "text-danger pt-5 hidden"});

            }
        } else if (e.target.name == "CardNum") {
            this.setState({CardNum: e.target.value});
            if (this.state.CardNum != null) {

                this.setState({CardNum_Validation: "text-danger pt-5 hidden"});

            }
        } else if (e.target.name == "EXP") {
            this.setState({EXP: e.target.value});
            if (this.state.EXP != null) {

                this.setState({EXP_Validation: "text-danger pt-5 hidden"});

            }
        } else if (e.target.name == "CVC") {
            this.setState({CVC: e.target.value});
            if (this.state.CVC != null) {

                this.setState({CVC_Validation: "text-danger pt-5 hidden"});

            }
        }


    }

    onUsdchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(e.target.value as any))
            return;
        if (e.target.value == "")
            this.setState({USD_Filled: ""});
        else
            this.setState({USD_Filled: "input--filled"});
        this.setState({USD: e.target.value});
        if (e.target.value.length > 0) {
            let ustxval = parseFloat(e.target.value) / (this.state.TokenPrice);
            this.setState({USTX: ustxval});

        } else {
            this.setState({USTX: ""});


        }
        if (this.state.USD != null) {

            this.setState({USD_Validation: "text-danger pt-5 hidden"});

        }

    }
    onUSTXchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(e.target.value as any))
            return;
        if (e.target.value == "")
            this.setState({USD_Filled: ""});
        else
            this.setState({USD_Filled: "input--filled"});
        this.setState({USTX: e.target.value});
        if (e.target.value.length > 0) {
            let usdval = parseFloat(e.target.value) * this.state.TokenPrice
            this.setState({USD: usdval});
        } else {
            this.setState({USD: ""});
        }
        if (this.state.USTX != null) {
            this.setState({USTX_Validation: "text-danger pt-5 hidden"});
        }
    }


}


function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default withRouter(Object(buy));
