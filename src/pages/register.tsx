import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './Footer';
import axios from "axios";

class register extends Component {
    state = {
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        DOB: "",
        SSN: "",
        usCity: false,
        emailchk: false,
        termchk: false,

        address: {
            country: "us",
            AddressLine1: "",
            AddressLine2: "",
            city: "",
            state: "",
            zipCode: ""
        },
        FNameValidation: "text-danger pt-3 hidden",
        LNameValidation: "text-danger pt-3 hidden",
        MobileValidation: "text-danger pt-3 hidden",
        EmailValidation: "text-danger pt-3 hidden",
        Email2Validation: "text-danger pt-3 hidden",
        DOBValidation: "text-danger pt-3 hidden",
        SSNValidation: "text-danger pt-3 hidden",
        cityvalidation: "text-danger pt-3 hidden",
        ZIPCODEValidation: "text-danger pt-3 hidden",
        AddressLine1Validation: "text-danger pt-3 hidden",
        StateValidation: "text-danger pt-3 hidden",
        CountryValidation: "text-danger pt-3 hidden",
        AgreeEmail: "text-danger pt-3 hidden",
        AgreeTerms: "text-danger pt-3 hidden",
        existEmailVal: "manadetory_txt hidden",
        BackendValidation: "text-danger pt-3 hidden",
        BackendMessage: "",
        statesDis: false,

        countryList: [
            {
                code: "",
                name: ""
            }
        ],
        stateList: [
            {
                region: "",
                country: "",
            }
        ],
        cityList: [
            {
                city: "",
                region: "",

                country: "",
                latitude: "",
                longitude: ""
            }
        ]


    }

    componentDidMount() {

        this.getStatesData(this.state.address.country);
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <section className="middsection_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="loginbox registerbox">
                                    <h1>Register</h1>

                                    <p className="manadetory_txt">*All Field are mandatory</p>
                                    <p className={this.state.existEmailVal}> Email Exist in System</p>
                                    <form className="register" name="register">
                                        <div className="row">
                                            <div className="form-group" >
                                                <div className="col-md-6" id="register--input--first-name">
                                                    <label htmlFor="FirstName">First Name</label>
                                                    <input onChange={this.OnChangeHold.bind(this)} type="text"
                                                           className="form-control inputtext1" placeholder="First Name"
                                                           name="FirstName" id="FirstName" required/>
                                                    <h5 className={this.state.FNameValidation}>First Name is
                                                        Required</h5>
                                                </div>
                                                <div className="col-md-6" id="register--input--last-name">
                                                    <label htmlFor="LastName">Last Name</label>
                                                    <input onChange={this.OnChangeHold.bind(this)} type="text"
                                                           className="form-control inputtext1" placeholder="Last Name"
                                                           name="LastName" id="LastName" required/>
                                                    <h5 className={this.state.LNameValidation}>Last Name is
                                                        Required</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-md-6" id="register--input--mobile">
                                                    <label htmlFor="Mobile">Mobile</label>
                                                    <input onChange={this.OnChangeHold.bind(this)} type="text"
                                                           className="form-control inputtext1" placeholder="Mobile No."
                                                           name="Mobile" id="Mobile" required/>
                                                    <h5 className={this.state.MobileValidation}>Mobile No is
                                                        Required</h5>
                                                </div>
                                                <div className="col-md-6" id="register--input--email">
                                                    <label htmlFor="Email">Email</label>
                                                    <input onChange={this.OnChangeHold.bind(this)} type="text"
                                                           className="form-control inputtext1"
                                                           placeholder="Email address" name="Email" id="Email"
                                                           required/>
                                                    <h5 className={this.state.EmailValidation}>Email is Required</h5>
                                                    <h5 className={this.state.Email2Validation}>Enter Correct Email</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-md-6" id="register--input--dob">
                                                    <label htmlFor="DOB">Date of Birth</label>
                                                    <input onChange={this.OnChangeHold.bind(this)} type="date"
                                                           className="form-control inputtext1"
                                                           placeholder="Date of Birth (yyyy-mm-dd)" name="DOB" id="DOB"
                                                           required/>
                                                    <h5 className={this.state.DOBValidation}>DOB Name is Required</h5>
                                                </div>
                                                <div className="col-md-6" id="register--input--ssn">
                                                    <label htmlFor="SSN">SSN</label>
                                                    <input onChange={this.OnChangeHold.bind(this)} type="text"
                                                           className="form-control inputtext1" placeholder="SSN"
                                                           name="SSN" id="SSN" required/>
                                                    <h5 className={this.state.SSNValidation}>SSN is Required</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group" id="register--input--uscity">
                                                <div className="col-md-12 left-txt">
                                                    <input onChange={this.OnChangeHold.bind(this)}
                                                           checked={this.state.usCity} name="ChkUS" type="checkbox" id="ChkUS"
                                                           className="left-txt" required/> <label className="check_txt">am
                                                    US citizen, US permanent resident, or a holder of a US SSN.</label>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-md-12" id="register--input--address-line-1">
                                                    <label htmlFor="Aline1">Address line 1</label>
                                                    <input type="text" onChange={this.OnChangeHold.bind(this)}
                                                           name="Aline1" className="form-control inputtext1"
                                                           placeholder="Address Line 1" id="Aline1" required/>
                                                    <h5 className={this.state.AddressLine1Validation}>Address Line 1 is
                                                        Required</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-md-12" id="register--input--address-line-2">
                                                    <label htmlFor="Aline2">Address line 2</label>
                                                    <input type="text" onChange={this.OnChangeHold.bind(this)}
                                                           name="Aline2" className="form-control inputtext1" value={''}
                                                           placeholder="Address Line 2" id="Aline2" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-md-4" id="register--input--states">
                                                    <label htmlFor="State">State</label>
                                                    <select onChange={this.onSelectChangeHold.bind(this)}
                                                            className="form-control inputtext1 selectlist"
                                                            name="selectState" disabled={this.state.statesDis}
                                                            placeholder="State" id="State" autoComplete="address-level1" required>
                                                        <option value="0">Select State</option>
                                                        {this.state.stateList.map(state => (
                                                            <option key={state.region}
                                                                    value={state.country}>{state.region}</option>


                                                        ))}
                                                    </select>
                                                    <h5 className={this.state.StateValidation}>State is Required</h5>

                                                </div>
                                                <div className="col-md-4" id="register--input--city">
                                                    <label htmlFor="city">City</label>
                                                    <input type="text" onChange={this.OnChangeHold.bind(this)}
                                                           className="form-control inputtext1" name="cityinput"
                                                           placeholder="city" id="city" required/>
                                                    <h5 className={this.state.cityvalidation}>City is Required</h5>
                                                </div>
                                                <div className="col-md-4" id="register--input--zip">
                                                    <label htmlFor="zip">Zip code</label>
                                                    <input type="text" onChange={this.OnChangeHold.bind(this)}
                                                           className="form-control inputtext1" name="zipCode"
                                                           placeholder="ZIP Code" id="zip" required/>
                                                    <h5 className={this.state.ZIPCODEValidation}>ZIP Code is
                                                        Required</h5>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-md-12 left-txt" id="register--input--agree">
                                                    <input onChange={this.OnChangeHold.bind(this)}
                                                           checked={this.state.emailchk} type="checkbox"
                                                           name="emailCHCK" className="left-txt" required/> <label
                                                    className="check_txt">I aagree to receive marketing message over
                                                    email</label>
                                                    <h5 className={this.state.AgreeEmail}> Required</h5>

                                                </div>
                                                <div className="col-md-12 left-txt" id="register--input--terms">
                                                    <input onChange={this.OnChangeHold.bind(this)} name="termCHCK"
                                                           type="checkbox" checked={this.state.termchk}
                                                           className="left-txt" required/> <label className="check_txt">I
                                                    agree to the <a href="forget_password.html" className="forgetpass">Terms
                                                        and Conditions</a></label>
                                                    <h5 className={this.state.AgreeTerms}> Required</h5>

                                                </div>

                                            </div>
                                        </div>


                                        <button type="button" className="login-btn"
                                                onClick={() => this.registerHandle()} id="register--button-submit"> Register Now
                                        </button>
                                        <h5 className={this.state.BackendValidation}>{this.state.BackendMessage}</h5>
                                        <p className="check_txt">Already Member? <a href="login.html"
                                                                                    className="forgetpass">Log In</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Footer/>
            </div>
        );
    }

    ex = "0";
    registerHandle = () => {

        if (this.state.firstName == null || this.state.firstName.length == 0) {
            this.setState({FNameValidation: "text-danger pt-3"});
        } else if (this.state.lastName == null || this.state.lastName.length == 0) {
            this.setState({LNameValidation: "text-danger pt-3"});

        } else if (this.state.mobileNo == null || this.state.mobileNo.length == 0) {
            this.setState({MobileValidation: "text-danger pt-3"});

        } else if (this.state.email == null || this.state.email.length == 0) {
            this.setState({EmailValidation: "text-danger pt-3"});

        } else if (validateEmail(this.state.email) == false) {
            this.setState({Email2Validation: "text-danger pt-3"});

        } else if (this.state.DOB == null || this.state.DOB.length == 0) {
            this.setState({DOBValidation: "text-danger pt-3"});

        } else if (this.state.SSN == null || this.state.SSN.length == 0) {
            this.setState({SSNValidation: "text-danger pt-3"});

        } else if (this.state.address.AddressLine1 == null || this.state.address.AddressLine1.length == 0) {
            this.setState({AddressLine1Validation: "text-danger pt-3"});

        } else if (this.state.address.city == null || this.state.address.city.length == 0) {
            this.setState({cityvalidation: "text-danger pt-3"});

        } else if (this.state.address.zipCode == null || this.state.address.zipCode.length == 0) {
            this.setState({ZIPCODEValidation: "text-danger pt-3"});

        } else if (this.state.emailchk == false) {
            this.setState({AgreeEmail: "text-danger pt-3"});

        } else if (this.state.termchk == false) {
            this.setState({AgreeTerms: "text-danger pt-3"});

        } else {
            const REGISTER_COMPONENT = this;
            axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/signup', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mobileNo: this.state.mobileNo,
                email: this.state.email,
                DOB: this.state.DOB,
                SSN: this.state.SSN,
                usCity: this.state.usCity,
                address: {
                    country: this.state.address.country,
                    AddressLine1: this.state.address.AddressLine1,
                    AddressLine2: this.state.address.AddressLine2,
                    city: this.state.address.city,
                    state: this.state.address.state,
                    zipCode: this.state.address.zipCode
                },
                password: "",
                Active: false,
                confirmation_tokken: ""


            })
                .then(function (response) {

                    if (response.data.LoginData !== null && response.data.message != "Mailexists") {
                        window.localStorage.setItem("emailRegister", response.data.LoginData.email);
                        window.localStorage.setItem("LoginData", String(JSON.stringify(Object(response.data.LoginData))));
                        window.location.href = "/confirm";
                    }
                    if (response.data.message == "Mailexists") {
                        REGISTER_COMPONENT.setState({
                            BackendValidation: 'text-danger pt-3',
                            BackendMessage: response.data.message
                        });

                    }
                })
                .catch(function (err) {
                    REGISTER_COMPONENT.setState({
                        BackendValidation: 'text-danger pt-3',
                        BackendMessage: err.response.data.error.errmsg
                    });

                });

            //this.setState({existEmailVal:"manadetory_txt "});

        }


    }
    onEmailExist = () => {
        this.setState({existEmailVal: "manadetory_txt "});

    }
    OnChangeHold = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name == "FirstName") {
            this.setState({firstName: e.target.value});
            if (this.state.firstName != null) {

                this.setState({FNameValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "LastName") {
            this.setState({lastName: e.target.value});
            if (this.state.lastName != null) {

                this.setState({LNameValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "Mobile") {
            this.setState({mobileNo: e.target.value});
            if (this.state.mobileNo != null) {

                this.setState({MobileValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "Email") {
            this.setState({email: e.target.value});
            if (this.state.email != null) {

                this.setState({EmailValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "DOB") {
            this.setState({DOB: e.target.value});
            if (this.state.DOB != null) {

                this.setState({DOBValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "SSN") {
            this.setState({SSN: e.target.value});
            if (this.state.SSN != null) {

                this.setState({SSNValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "zipCode") {

            let jasper = this.state.address;
            jasper.zipCode = e.target.value;
            this.setState({jasper});

            if (this.state.address.zipCode != null) {

                this.setState({ZIPCODEValidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "cityinput") {


            let address = this.state.address;
            address.city = e.target.value;
            this.setState({address});

            if (this.state.address.city != null) {

                this.setState({cityvalidation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "Aline1") {

            let address = this.state.address;
            address.AddressLine1 = e.target.value;
            this.setState({address});

            if (this.state.address.AddressLine1 != null) {

                this.setState({AddressLine1Validation: "text-danger pt-3 hidden"});

            }

        } else if (e.target.name == "Aline2") {

            let address = this.state.address;
            address.AddressLine2 = e.target.value;
            this.setState({address});

        } else if (e.target.name == "ChkUS") {
            this.setState({usCity: e.target.checked});


        } else if (e.target.name == "emailCHCK") {
            this.setState({emailchk: e.target.checked});


        } else if (e.target.name == "termCHCK") {
            this.setState({termchk: e.target.checked});


        }


    }

    getStatesData = (country: string) => {
        let address = this.state.address;
        address.country = country;
        this.setState({address});

        let val = country;
        axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/GetStates', {
            codecode: country
        })
            .then((response) => {
                console.log(response);
                if (response.data.statesData.length > 0) {
                    this.setState({
                        statesDis: false
                    });
                    this.setState({stateList: response.data.statesData});

                } else {
                    this.setState({
                        stateList: [
                            {
                                region: "",
                                country: ""
                            }
                        ]
                    });
                    this.setState({
                        statesDis: true
                    });

                }

            })
            .catch(function (err) {

                    console.log("error")
                }
            );
    }


    onSelectChangeHold = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.name == "selectCountry") {
            if (e.target.value != "0") {
                let address = this.state.address;
                address.country = e.target.value;
                this.setState({address});

                if (this.state.address.country != null) {

                    this.setState({CountryValidation: "text-danger pt-3 hidden"});

                }
                let val = e.target.value;
                axios.post(process.env.REACT_APP_BACKEND_PATH + 'api/GetStates', {
                    codecode: e.target.value
                })
                    .then((response) => {
                        console.log(response);
                        if (response.data.statesData.length > 0) {
                            this.setState({
                                statesDis: false
                            });
                            this.setState({stateList: response.data.statesData});

                        } else {
                            this.setState({
                                stateList: [
                                    {
                                        region: "",
                                        country: ""
                                    }
                                ]
                            });
                            this.setState({
                                statesDis: true
                            });

                        }

                    })
                    .catch(function (err) {

                            console.log("error")
                        }
                    );
            } else {
                let address = this.state.address;
                address.country = "";
                this.setState({address});

                if (this.state.address.country != null) {

                    this.setState({CountryValidation: "text-danger pt-3 "});

                }
            }

        } else if (e.target.name == "selectState") {
            let address = this.state.address;
            address.state = e.target.value;
            this.setState({address});

            if (this.state.address.state != null) {

                this.setState({StateValidation: "text-danger pt-3 hidden"});

            }
            let val2 = e.target.value;
            let region = e.target.options[e.target.selectedIndex].text;
            console.log(val2);
            console.log(region);


        }


    }

}


function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default register;
