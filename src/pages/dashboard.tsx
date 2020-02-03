import React, {Component, ComponentLifecycle} from 'react';
import ReactDOM, {render} from "react-dom";

import Header from './header';
import Footer from './Footer';
import axios from 'axios';
import {Link} from "react-router-dom";
import {element} from "prop-types";
import {type} from "os";

let paymentItems: [] | undefined;

class dashboard extends React.Component <any, any> {
    constructor(props: any) {
        super(props);

        let User = JSON.parse(localStorage.getItem('LoginData5') || '{}');
        console.log(User);
        this.state = {
            ReadMoreBtnShow: true,
            LoadedPaymentsCount: 0,
            Transactions: [],
            PaymentTap: "tabcontent ",
            DetailsTap: "tabcontent hidden",
            KYCTap: "tabcontent hidden",
            ChangePass: "loginbox hidden",
            KYCFormAc: " kyc-form",
            tab1_clicked: true,
            tab2_clicked: false,
            tab3_clicked: false,
            change_pass_clicked: false,

            userId: User._id,
            firstName: User.firstName,
            lastName: User.lastName,
            mobileNo: User.mobileNo,
            Email: User.email,
            DOB: User.DOB,
            SSN: User.SSN,
            address: User.address,
            sumSubVerified: User.sumSubVerified,
            FNameValidation: "text-danger pt-3 hidden",
            LNameValidation: "text-danger pt-3 hidden",
            MobileValidation: "text-danger pt-3 hidden",
            DOBValidation: "text-danger pt-3 hidden",
            SSNValidation: "text-danger pt-3 hidden",
            CountryValidation: "text-danger pt-3 hidden",
            AddressLine1Validation: "text-danger pt-3 hidden",
            AddressLine2Validation: "text-danger pt-3 hidden",
            StateValidation: "text-danger pt-3 hidden",
            CityValidation: "text-danger pt-3 hidden",
            ZipCodeValidation: "text-danger pt-3 hidden",

            UpdateButtonVisible: "edit_profile hidden",

            update_old_password: "",
            update_password: "",
            update_confirm_pass: "",
            Password_unmatch: "text-danger pt-5 hidden",
            Password_short: "text-danger pt-5 hidden",
            Password_required: "text-danger pt-5 hidden",
            Old_Password_incorrect: "text-danger pt-5 hidden"
        }
    }

    componentDidMount(): void {
        this.onReadMore();
        this.loadSumSubScript();
        if (!this.state.sumSubVerified){
            this.setState({tab2_clicked:true});
            this.openCityKYC();
        }

    }

    render() {

        {
            let paymentItems_C;
            return (
                <div className="wrapper" id="page-dashboard">
                    <Header/>
                    <section className="middsection_form dashboard-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className=" center-txt">
                                        <div className="tab">
                                            <button
                                                className={`tablinks ${((this.state.tab1_clicked) ? "active" : "")}`}
                                                onClick={() => this.openCityPayment()}
                                                name="Payment" id="defaultOpen">Tokens Transactions
                                            </button>
                                            <button
                                                className={`tablinks ${((this.state.tab2_clicked) ? "active" : "")}`}
                                                onClick={() => this.openCityDetails()}
                                                name="Details"> Personal Details
                                            </button>

                                            <button
                                                className={`tablinks ${((this.state.tab3_clicked) ? "active" : "")}`}
                                                onClick={() => this.openCityKYC()}
                                                name="KYC"> KYC
                                            </button>
                                        </div>

                                        <div id="payment" className={this.state.PaymentTap}>
                                            {this.state.Transactions}
                                            <input type="button" value="Read More ..." className={"login-btn"}
                                                   disabled={!this.state.ReadMoreBtnShow}
                                                   onClick={() => this.onReadMore()}/>
                                        </div>
                                        <div id="personal" className={this.state.DetailsTap}>
                                            <div className="personal-detaile paybox">
                                                <form name="personalDetaile">
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">First Name</label>
                                                                <input type="text" defaultValue={this.state.firstName}
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="FirstName"/>
                                                                <h5 className={this.state.FNameValidation}>First Name is
                                                                    Required</h5>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">Last Name</label>
                                                                <input type="text" defaultValue={this.state.lastName}
                                                                       required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="LastName"/>
                                                                <h5 className={this.state.LNameValidation}>Last Name is
                                                                    Required</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12 col-sm-12">
                                                                <label className="inputlabel">Phone</label>
                                                                <input type="text" defaultValue={this.state.mobileNo}
                                                                       required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="mobileNo"/>
                                                                <h5 className={this.state.MobileValidation}>Mobile
                                                                    Number is Required</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">Date of Birth
                                                                    (yyyy-mm-dd)</label>
                                                                <input type="text" defaultValue={this.state.DOB}
                                                                       required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="DOB"/>
                                                                <h5 className={this.state.DOBValidation}>Date of
                                                                    Birthday is Required</h5>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="inputlabel">SSN</label>
                                                                <input type="text" defaultValue={this.state.SSN}
                                                                       required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="SSN"/>
                                                                <h5 className={this.state.SSNValidation}>SSN is
                                                                    Required</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12 col-sm-12">
                                                                <label className="inputlabel">Country of
                                                                    Residence</label>
                                                                <input type="text"
                                                                       defaultValue={this.state.address.country}
                                                                       required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="Country"/>
                                                                <h5 className={this.state.CountryValidation}>Country is
                                                                    Required</h5>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <label className="inputlabel">Address line 1</label>
                                                                <input type="text"
                                                                       defaultValue={this.state.address.AddressLine1}
                                                                       required className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="AddressLine1"/>
                                                                <h5 className={this.state.AddressLine1Validation}>AddressLine
                                                                    is Required</h5>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <label className="inputlabel">Address line 2</label>
                                                                <input type="text"
                                                                       defaultValue={this.state.address.AddressLine2}
                                                                       required className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="AddressLine2"/>
                                                                <h5 className={this.state.AddressLine2Validation}>AddressLine
                                                                    is Required</h5>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-4 col-sm-4">
                                                                <label className="inputlabel">City</label>
                                                                <input type="text"
                                                                       defaultValue={this.state.address.city} required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="City"/>
                                                                <h5 className={this.state.CityValidation}>City is
                                                                    Required</h5>

                                                            </div>
                                                            <div className="col-md-4 col-sm-4">
                                                                <label className="inputlabel">State</label>
                                                                <input type="text"
                                                                       defaultValue={this.state.address.state} required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="State"/>
                                                                <h5 className={this.state.StateValidation}>State is
                                                                    Required</h5>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4">
                                                                <label className="inputlabel">Zip Code</label>
                                                                <input type="text"
                                                                       defaultValue={this.state.address.zipCode}
                                                                       required
                                                                       className="personalinput"
                                                                       onChange={this.OnChangeHold.bind(this)}
                                                                       name="ZipCode"/>
                                                                <h5 className={this.state.ZipCodeValidation}>ZipCode is
                                                                    Required</h5>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <button type="button" className="change_psd_btn"
                                                                        onClick={() => this.onChangePass()}> Change
                                                                    Password?
                                                                </button>
                                                                <button type="button"
                                                                        className={this.state.UpdateButtonVisible}
                                                                        onClick={() => this.onUpdateProfile()}> Update
                                                                    Profile
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <div id="kyc" className={this.state.KYCTap}>
                                            {!this.state.sumSubVerified ?
                                                <div className={this.state.KYCFormAc} id="idensic">
                                                </div> : <p>'You are already KYC verified'</p>
                                            }
                                        </div>


                                        <div id="change_password" className={this.state.ChangePass}>
                                            <div className="paybox">
                                                <form className="login " name="login">
                                                    <div className="form-group ">
                                                        <input type="password" onChange={this.OnChangeHold.bind(this)}
                                                               name="update_old_password"
                                                               className=" form-control inputtext passwordbg "
                                                               placeholder="Old Password" required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" onChange={this.OnChangeHold.bind(this)}
                                                               name="update_new_password"
                                                               className=" form-control inputtext passwordbg"
                                                               placeholder="New Password" required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" onChange={this.OnChangeHold.bind(this)}
                                                               name="update_confirm_pass"
                                                               className=" form-control inputtext passwordbg"
                                                               placeholder="Confirmation Password" required/>
                                                    </div>
                                                    <h5 className={this.state.Password_unmatch}>Passwords are not
                                                        match.</h5>
                                                    <h5 className={this.state.Password_short}>Password should have at
                                                        least 8 letters.</h5>
                                                    <h5 className={this.state.Password_required}>Passwords are
                                                        required.</h5>
                                                    <h5 className={this.state.Old_Password_incorrect}>Old Password is
                                                        incorrect.</h5>


                                                    <div className="row">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <button type="button" className="change_psd_btn"
                                                                        onClick={this.onChange}> Change
                                                                </button>
                                                                <button type="button" className="change_psd_btn"
                                                                        onClick={() => this.openCityDetails()}> Back
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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

    loadSumSubScript() {
        console.log(process.env);
        const script = document.createElement("script");
        script.src = `${process.env.REACT_APP_SUM_SUB_URL}/idensic/static/sumsub-kyc.js`;
        script.async = true;

        document.body.appendChild(script);
    }

    createSumSubToken = () => {
        axios.post(process.env.REACT_APP_BACKEND_PATH + "admin/sumsubtoken").then(response => {
            console.log(response);
            this.setState({sumSubToken: response.data.payload});
            //@ts-ignore
            const idensic: any = window['idensic'];

            idensic.init(
                '#idensic',
                {
                    // provide your clientId (can be seen in the demo)
                    "clientId": process.env.REACT_APP_SUM_SUM_CLIENT_ID,
                    // maybe some additional parameters, see the Demo to see which ones, e.g.
                    "externalUserId": this.state.userId
                },
                // function for the WebSDK callbacks
                function (messageType: any, payload: any) {
                    // e.g. just logging the incoming messages
                    console.log('[IDENSIC DEMO] Idensic message:', messageType, payload);
                }
            )
        });
    };

    onReadMore = () => {

        axios.post(process.env.REACT_APP_BACKEND_PATH + "api/get_payment_database", {
            UserId: this.state.userId,
            LoadedCount: this.state.LoadedPaymentsCount
        })
            .then((response) => {
                let paymentDatabase = response.data.payments;
                if (response.data.payments.length < 6) {
                    this.setState({
                        ReadMoreBtnShow: false,
                        LoadedPaymentsCount: this.state.LoadedPaymentsCount + response.data.payments.length
                    });
                }
                else {
                    this.setState({
                        LoadedPaymentsCount: this.state.LoadedPaymentsCount + 5
                    });
                    paymentDatabase.pop();
                    console.log(paymentDatabase.length);
                }
                //console.log("rawdata", paymentDatabase);
                paymentItems = ((paymentDatabase).map((item: any) => {
                    return (
                        <div className="paybox">
                            <div className="paymenttable">
                                <a className="leftbox textlabel1"
                                   href={`https://ropsten.etherscan.io/tx/${item.Unique_ID}`}
                                   target="_blank">#ID {Object(item).Unique_ID.substring(0, 14)}...</a>
                                <div className="rightbox textlabel1">Paid Amount</div>
                            </div>
                            <div className="paymenttable">
                                <div className="leftbox textlabel2"
                                     style={{color: (Boolean(item.type) ? "#ce1126" : "")}}>{(item.type ? "-" : "")}{parseFloat(item.USTX).toLocaleString()} Tokens
                                </div>
                                <div className="rightbox textlabel3">${parseFloat(item.USD).toLocaleString()}</div>
                            </div>
                            <hr/>
                            <div className="paymenttable">
                                <div className="leftbox textlabel1"><label>Payment
                                    Date:</label>{(new Date(item.createdAt)).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: '2-digit'
                                })}
                                </div>
                            </div>
                        </div>
                    );
                }));
                this.setState({
                    Transactions: [this.state.Transactions, paymentItems]
                });
                //console.log("Database:",paymentItems);
                //console.log(">>>>:",this.state.Transactions);
            })
            .catch(function (err) {
                console.log(err)
            });
    };
    onUpdateProfile = () => {
        /*
    if (this.state.firstName.length == 0 || this.state.firstName == null)
        this.setState({FNameValidation : "text-danger pt-3"});
    else if (this.state.lastName.length == 0 || this.state.lastName == null)
        this.setState({LNameValidation : "text-danger pt-3"});
    else if (this.state.mobileNo.length == 0 || this.state.mobileNo == null)
        this.setState({MobileValidation : "text-danger pt-3"});
    else if (this.state.email.length == 0 || this.state.email == null)
        this.setState({EmailValidation : "text-danger pt-3"});
    else if (this.state.DOB.length == 0 || this.state.DOB == null)
        this.setState({DOBValidation : "text-danger pt-3"});
    else if (this.state.SSN.length == 0 || this.state.SSN == null)
        this.setState({SSNValidation : "text-danger pt-3"});
    else if (this.state.address.country.length == 0 || this.state.address.country == null)
        this.setState({CountryValidation : "text-danger pt-3"});
    else if (this.state.address.AddressLine1.length == 0 || this.state.address.AddressLine1 == null)
        this.setState({AddressLine1Validation : "text-danger pt-3"});
    else if (this.state.address.AddressLine2.length == 0 || this.state.address.AddressLine2 == null)
        this.setState({AddressLine2Validation : "text-danger pt-3"});
    else if (this.state.address.city.length == 0 || this.state.address.city == null)
        this.setState({CityValidation : "text-danger pt-3"});
    else if (this.state.address.state.length == 0 || this.state.address.state  == null)
        this.setState({StateValidation : "text-danger pt-3"});
    else if (this.state.address.zipCode.length == 0 || this.state.address.zipCode == null)
        this.setState({ZipCodeValidation : "text-danger pt-3"});
    else {
        */
        axios.post(process.env.REACT_APP_BACKEND_PATH + "api/update_profile", {
            userId: this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileNo: this.state.mobileNo,
            email: this.state.email,
            DOB: this.state.DOB,
            SSN: this.state.SSN,
            address: this.state.address
        })
            .then((response) => {

                let updatedUser = response.data.result;
                console.log(updatedUser);
                console.log(localStorage.setItem('LoginData5', JSON.stringify(updatedUser)));
                this.setState({UpdateButtonVisible: "edit_profile hidden"});
            })
            .catch(function (err) {
                console.log("error")
            });
        //}

    };
    onChangePass = () => {

        this.setState({PaymentTap: "tabcontent hidden"});
        this.setState({DetailsTap: "tabcontent hidden"});
        this.setState({KYCTap: "tabcontent hidden"});
        this.setState({ChangePass: "tabcontent active"});
        this.setState({tab1_clicked: false});
        this.setState({tab2_clicked: true});
        this.setState({tab3_clicked: false});
        this.setState({change_pass_clicked: true});

        this.setState({update_old_pass: ""});
        this.setState({update_pass: ""});
        this.setState({update_confirm_pass: ""});
    };
    onChange = () => {

        if (!this.state.update_old_password || !this.state.update_password || !this.state.update_confirm_pass) {
            this.setState({Password_required: "text-danger pt-5"});
        }
        else if (this.state.update_old_password.length < 8 || this.state.update_password.length < 8 || this.state.update_password.length < 8) {
            this.setState({Password_short: "text-danger pt-5"});
        }
        else if (this.state.update_password != this.state.update_confirm_pass) {
            this.setState({Password_unmatch: "text-danger pt-5"});
        }
        else {
            axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/change_pass', {
                email: this.state.email,
                old_pass: this.state.update_old_password,
                new_pass: this.state.update_password
            })
                .then((response) => {
                    console.log(response);
                    if (response.status == 200) {
                        this.openCityDetails();
                    }
                    else if (response.status == 208) {
                        this.setState({Old_Password_incorrect: "text-danger pt-3"});
                    }
                    else if (response.status == 204)
                        location.href = "/";

                })
                .catch(function (err) {
                    console.log(err)

                });
        }
    };
    openCityPayment = () => {


        this.setState({PaymentTap: "tabcontent active"});
        this.setState({DetailsTap: "tabcontent hidden"});
        this.setState({KYCTap: "tabcontent hidden"});
        this.setState({ChangePass: "tabcontent hidden"});


        this.setState({tab1_clicked: true});
        this.setState({tab2_clicked: false});
        this.setState({tab3_clicked: false});
        this.setState({change_pass_clicked: false});
    };

    openCityDetails = () => {
        this.setState({PaymentTap: "tabcontent hidden"});
        this.setState({DetailsTap: "tabcontent active"});
        this.setState({KYCTap: "tabcontent hidden"});
        this.setState({ChangePass: "tabcontent hidden"});
        this.setState({tab1_clicked: false});
        this.setState({tab2_clicked: true});
        this.setState({tab3_clicked: false});
        this.setState({change_pass_clicked: false});
    };
    openCityKYC = () => {
        this.setState({PaymentTap: "tabcontent hidden"});
        this.setState({DetailsTap: "tabcontent hidden"});
        this.setState({KYCTap: "tabcontent active"});
        this.setState({ChangePass: "tabcontent hidden"});
        this.setState({tab1_clicked: false});
        this.setState({tab2_clicked: false});
        this.setState({tab3_clicked: true});
        this.setState({change_pass_clicked: false});
        this.createSumSubToken();
    };

    OnChangeHold = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState({UpdateButtonVisible: "edit_profile"});

        if (e.target.name == "FirstName") {
            this.setState({firstName: e.target.value});
            if (this.state.firstName != null) {

                this.setState({FNameValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "LastName") {
            this.setState({lastName: e.target.value});
            if (this.state.lastName != null) {

                this.setState({LNameValidation: "text-danger pt-3 hidden"});

            }


        }
        else if (e.target.name == "mobileNo") {
            this.setState({mobileNo: e.target.value});
            if (this.state.mobileNo != null) {

                this.setState({MobileValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "DOB") {
            this.setState({DOB: e.target.value});
            if (this.state.DOB != null) {

                this.setState({DOBValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "SSN") {
            this.setState({SSN: e.target.value});
            if (this.state.SSN != null) {

                this.setState({SSNValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "Country") {

            let jasper = this.state.address;
            jasper.country = e.target.value;
            this.setState({jasper});

            if (this.state.address.country != null) {

                this.setState({CountryValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "AddressLine1") {

            let address = this.state.address;
            address.AddressLine1 = e.target.value;
            this.setState({address});

            if (this.state.address.AddressLine1 != null) {

                this.setState({AddressLine1Validation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "AddressLine2") {

            let address = this.state.address;
            address.AddressLine2 = e.target.value;
            this.setState({address});

        }
        else if (e.target.name == "City") {


            let address = this.state.address;
            address.city = e.target.value;
            this.setState({address});

            if (this.state.address.city != null) {

                this.setState({CityValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "State") {


            let address = this.state.address;
            address.state = e.target.value;
            this.setState({address});

            if (this.state.address.state != null) {

                this.setState({StateValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "ZipCode") {


            let address = this.state.address;
            address.zipCode = e.target.value;
            this.setState({address});

            if (this.state.address.zipCode != null) {

                this.setState({ZipCodeValidation: "text-danger pt-3 hidden"});

            }

        }
        else if (e.target.name == "update_old_password") {
            this.setState({Password_required: "text-danger pt-3 hidden"});
            this.setState({Password_short: "text-danger pt-3 hidden"});
            this.setState({Password_unmatch: "text-danger pt-3 hidden"});
            this.setState({Old_Password_incorrect: "text-danger pt-3 hidden"});
            this.setState({update_old_password: e.target.value});
        }
        else if (e.target.name == "update_new_password") {
            this.setState({Password_required: "text-danger pt-3 hidden"});
            this.setState({Password_short: "text-danger pt-3 hidden"});
            this.setState({Password_unmatch: "text-danger pt-3 hidden"});
            this.setState({Old_Password_incorrect: "text-danger pt-3 hidden"});
            this.setState({update_password: e.target.value});
        }
        else if (e.target.name == "update_confirm_pass") {
            this.setState({Password_required: "text-danger pt-3 hidden"});
            this.setState({Password_short: "text-danger pt-3 hidden"});
            this.setState({Password_unmatch: "text-danger pt-3 hidden"});
            this.setState({Old_Password_incorrect: "text-danger pt-3 hidden"});
            this.setState({update_confirm_pass: e.target.value});
        }
    }
    BtnNextClick = () => {
        this.setState({KYCFormAc: "kyc-form active"})
    }
    BtnBackClick = () => {
        this.setState({KYCFormAc: "kyc-form"})
    }
}


export default dashboard;
