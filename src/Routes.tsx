import React from "react";
import {Route, Switch} from "react-router-dom";

import about from "./pages/about";
import confirm_mail from "./pages/confirm_mail";

import buy from "./pages/buy";
import sell from "./pages/sell";
import contact from "./pages/contact_us";
import dashboard from "./pages/dashboard";
import forget_password from "./pages/forget_password";
import genrate_wallet from "./pages/genrate_wallet";
import HomePage from "./pages/HomePage";
import login from "./pages/login";
import pay_with_ach from "./pages/pay_with_ach";
import pay_with_creditcard from "./pages/pay_with_creditcard";
import pay_with_swift from "./pages/pay_with_swift";
import purchase_amount from "./pages/purchase_amount";
import register from "./pages/register";
import thankyou from "./pages/thankyou";
import wallet from "./pages/wallet-info";
import {object} from "prop-types";
import re_password from "./pages/re_password";
import reset_pass_success from "./pages/reset_pass_success";
import register_success from "./pages/register_success";
import {BrowserRouter} from "react-router-dom";
import Footer from "./pages/Footer";

class Routes extends React.Component {


    render() {

        return (
            <div>
                <Switch >
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={about}/>
                    <Route exact path="/confirm" component={confirm_mail}/>
                    <Route exact path="/buy" component={buy}/>
                    <Route exact path="/sell" component={sell}/>
                    <Route exact path="/contact" component={contact}/>
                    <Route exact path="/dashboard" component={dashboard}/>
                    <Route path="/forget_password" component={forget_password}/>
                    <Route path="/genrate_wallet" component={genrate_wallet}/>
                    <Route path="/login" component={login}/>
                    <Route path="/pay_with_ach" component={pay_with_ach}/>
                    <Route path="/pay_with_creditcard" component={pay_with_creditcard}/>
                    <Route path="/pay_with_swift" component={pay_with_swift}/>
                    <Route path="/purchase_amount" component={purchase_amount}/>
                    <Route path="/register" component={register}/>
                    <Route path="/thankyou" component={thankyou}/>
                    <Route path="/wallet" component={wallet}/>
                    <Route path="/signup_verify/:name" component={login}/>
                    <Route path="/confirm/:reset_Token" component={confirm_mail}/>
                    <Route path="/new_pass/:reset_pass_token" component={re_password}/>
                    <Route path="/reset_pass_success" component={reset_pass_success}/>
                    <Route path="/register_success" component={register_success}/>
                    <Route
                        render={function () {
                            return <h1>Not Found</h1>;
                        }}/>
                </Switch>
            </div>

        );
    }

}

export default Routes;
