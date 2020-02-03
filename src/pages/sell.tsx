import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
import axios from "axios";
import {Link} from "react-router-dom";

import {withRouter} from 'react-router-dom';
import {Debugger} from "inspector";

interface props_section {
    history: History
}

class sell extends Component <props_section> {
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
        USTX_Filled: "",
        TokenAmount: 0,
        TokenAmount_Validation: "text-danger pt-5 hidden",
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
        CVC_Validation_Text: "",
        Sell: {
            BankAccountType: '',
            BankRoutingNumber: '',
            BankName: '',
            BankAccountNumber: '',
            BankType: ''
        },
        Sell_Validation: {
            BankAccountType: 'text-danger pt-5 hidden',
            BankRoutingNumber: 'text-danger pt-5 hidden',
            BankName: 'text-danger pt-5 hidden',
            BankAccountNumber: 'text-danger pt-5 hidden',
            BankType: 'text-danger pt-5 hidden'
        }

    }

    componentDidMount(): void {
        axios.post(process.env.REACT_APP_BACKEND_PATH + "admin/get_token_price").then(response => {
            if (response.status == 200)
                this.setState({TokenPrice: response.data.TokenPrice});
            else
                this.setState({TokenPrice: 10});
        });

        let GetUser = JSON.parse(localStorage.getItem('LoginData5') || '{}');
        ;

        if (GetUser != '{}') {
            this.setState({UserId: GetUser._id});
            axios.post(process.env.REACT_APP_BACKEND_PATH + "api/get_total_token", {
                UserId: GetUser._id,
            })
                .then((response) => {
                    this.setState({TokenAmount: response.data.result});
                });
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
                                        <div className="sellbox center-txt">
                                            <p className="entertxtnew">How many gold tokens you<br/>
                                                want to sell?</p>
                                            <div>
                                                <div className="formgold">
                                                    <div className="col-md-3 col-sm-3">
                                        <span className={`input input--haruki ${this.state.USD_Filled}`}>
                                            <input onChange={this.onUSTXchange.bind(this)} value={this.state.USTX}
                                                   name="ust" className="input__field input__field--haruki" type="text"
                                                   id="input-2"/>
                                            <label className="input__label input__label--haruki" htmlFor="input-2">
                                                <span
                                                    className="input__label-content input__label-content--haruki">USTX</span>
                                            </label>
                                            <h5 className={this.state.TokenAmount_Validation}>You only have <b>{this.state.TokenAmount}</b> USTX</h5>
                                            <h5 className={this.state.USTX_Validation}>Field is Required</h5>
                                            </span>
                                                    </div>
                                                    <div className="col-md-3 col-sm-3">
                                                        <p className="aboutpera">You will receive</p>
                                                    </div>

                                                    <div className="col-md-3 col-sm-3">
                                            <span className={`input input--haruki ${this.state.USD_Filled}`}>
                                                <input onChange={this.onUsdchange.bind(this)} value={this.state.USD}
                                                       className="input__field input__field--haruki" name="USD"
                                                       type="text" id="input-1"/>
                                                <label className="input__label input__label--haruki"
                                                       htmlFor="input-1"><span
                                                    className="input__label-content input__label-content--haruki">USD</span>
                                                </label>
                                                <h5 className={this.state.USD_Validation}>Field is Required</h5>
                                            </span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="row top-head">
                                                        <div className="form-group col-md-6" id="sell--input--name">
                                                            <input onChange={this.changeInput.bind(this)} name="Name"
                                                                   type="text" className="form-control inputtext1"
                                                                   placeholder="Name" required/>
                                                            <h5 className={this.state.Name_Validation}>Field is
                                                                Required</h5>
                                                        </div>
                                                        <div className="form-group col-md-6" id="sell--input--email">
                                                            <input onChange={this.changeInput.bind(this)} name="Email"
                                                                   type="text" className="form-control inputtext1"
                                                                   placeholder="Email" required/>
                                                            <h5 className={this.state.Email_Validation}>{this.state.Email_Validation_Text}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group col-md-6" id="sell--input--wallet-address">
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
                                                                <div className="sellbox center-txt pay-card bankSell">
                                                                    <form>
                                                                        <h3>Bank Info</h3>
                                                                        <div className="row top-head">
                                                                            <div className="form-group col-md-12" id="sell--input--account-type">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="BankAccountType" type="text"
                                                                                    className="form-control inputtext2 "
                                                                                    placeholder="Bank Account Type (Checking/Saving)"
                                                                                    required/>
                                                                                <h5 className={this.state.Sell_Validation.BankAccountType}>Field
                                                                                    is Required</h5>
                                                                            </div>
                                                                            <div className="form-group col-md-12" id="sell--input--routing-number">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="BankRoutingNumber" type="text"
                                                                                    className="form-control inputtext2 "
                                                                                    placeholder="Bank Routing Number"
                                                                                    required/>
                                                                                <h5 className={this.state.Sell_Validation.BankRoutingNumber}>Field
                                                                                    is Required</h5>
                                                                            </div>
                                                                            <div className="form-group col-md-12" id="sell--input--bank-name">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="BankName" type="text"
                                                                                    className="form-control inputtext2 "
                                                                                    placeholder="Bank Name" required/>
                                                                                <h5 className={this.state.Sell_Validation.BankName}>Field
                                                                                    is Required</h5>
                                                                            </div>
                                                                            <div className="form-group col-md-12" id="sell--input--bank-account-number">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="BankAccountNumber" type="text"
                                                                                    className="form-control inputtext2 "
                                                                                    placeholder="Bank Account Number"
                                                                                    required/>
                                                                                <h5 className={this.state.Sell_Validation.BankAccountNumber}>Field
                                                                                    is Required</h5>
                                                                            </div>
                                                                            <div className="form-group col-md-12" id="sell--input--bank-type">
                                                                                <input
                                                                                    onChange={this.changeInput.bind(this)}
                                                                                    name="BankType" type="text"
                                                                                    className="form-control inputtext2 "
                                                                                    placeholder="Bank Type (Personal/Business)"
                                                                                    required/>
                                                                                <h5 className={this.state.Sell_Validation.BankType}>Field
                                                                                    is Required</h5>
                                                                            </div>
                                                                        </div>

                                                                        <input type="button" id="sell--input--submit"
                                                                               onMouseDown={() => this.PayHandle()}
                                                                               value="SELL"
                                                                               className="login-btn paybtn"/>

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

                        <section className="middsection_form" id="sell--div--unverified">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="buybox center-txt">
                                            <p className="entertxtnew">Please verify KYC to buy a token</p>
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


        }
        else if (this.state.USTX == null || this.state.USTX.length == 0) {

            this.setState({USTX_Validation: "text-danger pt-5"});


        }
        else if (this.state.Name == null || this.state.Name.length == 0) {

            this.setState({Name_Validation: "text-danger pt-5"});


        }
        else if (this.state.Email == null || this.state.Email.length == 0) {

            this.setState({Email_Validation: "text-danger pt-5"});
            this.setState({Email_Validation_Text: "Field is Required"});

        }
        else if (validateEmail(this.state.Email) == false) {
            this.setState({Email_Validation: "text-danger pt-5"});
            this.setState({Email_Validation_Text: "Enter correct Email"});

        }
        else if (this.state.Address == null || this.state.Address.length == 0) {

            this.setState({Address_Validation: "text-danger pt-5"});
        }
        else if (this.state.Sell.BankAccountType == null || this.state.Sell.BankAccountType.length == 0) {
            this.setState({Sell_Validation: {...this.state.Sell_Validation, BankAccountType: "text-danger pt-5"}});
        }
        else if (this.state.Sell.BankRoutingNumber == null || this.state.Sell.BankRoutingNumber.length == 0) {
            this.setState({Sell_Validation: {...this.state.Sell_Validation, BankRoutingNumber: "text-danger pt-5"}});
        }
        else if (this.state.Sell.BankName == null || this.state.Sell.BankName.length == 0) {
            this.setState({Sell_Validation: {...this.state.Sell_Validation, BankName: "text-danger pt-5"}});
        }
        else if (this.state.Sell.BankAccountNumber == null || this.state.Sell.BankAccountNumber.length == 0) {
            this.setState({Sell_Validation: {...this.state.Sell_Validation, BankAccountNumber: "text-danger pt-5"}});
        }
        else if (this.state.Sell.BankType == null || this.state.Sell.BankType.length == 0) {
            this.setState({Sell_Validation: {...this.state.Sell_Validation, BankType: "text-danger pt-5"}});
        }
        else {

            //ToDO: Send Sell Info to Server
            axios.post(process.env.REACT_APP_BACKEND_PATH + "api/sell", {
                type: true,    //sell
                UserId: this.state.UserId,
                USD: this.state.USD,
                USTX: (this.state.USTX).toString(),
                Name: this.state.Name,
                Email: this.state.Email,
                Address: this.state.Address,
                Bank: this.state.Sell,
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
        }
        else if (e.target.name == "Email") {
            this.setState({Email: e.target.value});
            if (this.state.Email != null) {

                this.setState({Email_Validation: "text-danger pt-5 hidden"});

            }
        }
        else if (e.target.name == "Address") {
            this.setState({Address: e.target.value});
            if (this.state.Address != null) {

                this.setState({Address_Validation: "text-danger pt-5 hidden"});

            }
        }
        else if (e.target.name == "CardName") {
            this.setState({CardName: e.target.value});
            if (this.state.CardName != null) {

                this.setState({CardName_Validation: "text-danger pt-5 hidden"});

            }
        }
        else if (e.target.name == "CardNum") {
            this.setState({CardNum: e.target.value});
            if (this.state.CardNum != null) {

                this.setState({CardNum_Validation: "text-danger pt-5 hidden"});

            }
        }
        else if (e.target.name == "EXP") {
            this.setState({EXP: e.target.value});
            if (this.state.EXP != null) {

                this.setState({EXP_Validation: "text-danger pt-5 hidden"});

            }
        }
        else if (e.target.name == "CVC") {
            this.setState({CVC: e.target.value});
            if (this.state.CVC != null) {

                this.setState({CVC_Validation: "text-danger pt-5 hidden"});

            }
        }
        else if (e.target.name == "BankAccountType") {
            this.setState({Sell: {...this.state.Sell, BankAccountType: e.target.value}});
            if (this.state.Sell.BankAccountType != null) {

                this.setState({
                    Sell_Validation: {
                        ...this.state.Sell_Validation,
                        BankAccountType: "text-danger pt-5 hidden"
                    }
                });

            }
        }
        else if (e.target.name == "BankRoutingNumber") {
            this.setState({Sell: {...this.state.Sell, BankRoutingNumber: e.target.value}});
            if (this.state.Sell.BankAccountType != null) {

                this.setState({
                    Sell_Validation: {
                        ...this.state.Sell_Validation,
                        BankRoutingNumber: "text-danger pt-5 hidden"
                    }
                });

            }
        }
        else if (e.target.name == "BankName") {
            this.setState({Sell: {...this.state.Sell, BankName: e.target.value}});
            if (this.state.Sell.BankName != null) {

                this.setState({Sell_Validation: {...this.state.Sell_Validation, BankName: "text-danger pt-5 hidden"}});

            }
        }
        else if (e.target.name == "BankAccountNumber") {
            this.setState({Sell: {...this.state.Sell, BankAccountNumber: e.target.value}});
            if (this.state.Sell.BankAccountNumber != null) {

                this.setState({
                    Sell_Validation: {
                        ...this.state.Sell_Validation,
                        BankAccountNumber: "text-danger pt-5 hidden"
                    }
                });

            }
        }
        else if (e.target.name == "BankType") {
            this.setState({Sell: {...this.state.Sell, BankType: e.target.value}});
            if (this.state.Sell.BankType != null) {

                this.setState({Sell_Validation: {...this.state.Sell_Validation, BankType: "text-danger pt-5 hidden"}});

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
            let ustxval = parseFloat(e.target.value) / this.state.TokenPrice;
            this.setState({
                USTX: ustxval
            });
        }
        else {
            this.setState({USTX: ""});
        }
        if (this.state.USD != null) {
            this.setState({USD_Validation: "text-danger pt-5 hidden"});
        }
    };
    onUSTXchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(e.target.value as any))
            return;
        if (e.target.value == "")
            this.setState({USD_Filled: ""});
        else
            this.setState({USD_Filled: "input--filled"});

        this.setState({USTX: e.target.value});

        if (parseFloat(e.target.value) > this.state.TokenAmount) {
            this.setState({TokenAmount_Validation: "text-danger pt-5"});
        } else {
            this.setState({TokenAmount_Validation: "text-danger pt-5 hidden"});
        }

        if (e.target.value.length > 0) {
            let usdval = parseFloat(e.target.value) * this.state.TokenPrice;
            this.setState({
                USD: usdval
            });
        }
        else {
            this.setState({
                USD: ""
            });

        }
        if (this.state.USTX != null) {
            this.setState({USTX_Validation: "text-danger pt-5 hidden"});
        }

    };


}


function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default withRouter(Object(sell));
