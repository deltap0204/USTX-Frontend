import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from 'axios';


class Header extends Component {
    state = {
        tokenAmount: "",
        Name: "",
        headerMsg: "",
        loginBTNStatus:"login_btn",
        nameBTNStatus:"login_btn",
        logOutBTNStatus:"",

    }
    componentWillMount(): void {
        let GetUser=(localStorage.getItem("LoginData5"));
        if (GetUser !="undefined" && GetUser != null)
        {
            let userInf=JSON.parse(GetUser || "null");
            this.setState({tokenAmount: userInf.tokenAmount});
            this.setState({Name: "Hi "+ userInf.firstName});
            this.setState({loginBTNStatus:"login_btn hidden"});

            axios.post(process.env.REACT_APP_BACKEND_PATH + "api/get_total_token",{
                UserId: userInf._id,
            })
            .then((response) => {
              this.setState({headerMsg: response.data.result + " USTX"});
            });
        }
        else
        {
            this.setState({nameBTNStatus:"login_btn hidden"});
            this.setState({logOutBTNStatus:"hidden"});
            this.setState({headerMsg:"1 Gold Taken /$1 USD  Market Cap: 1000k"});
        }

    }

    render() {
    return (
	 <section className="header_box_inner">
<header>
    <nav id="nav" className="nav">
        <button className="menu">
          <em className="hamburger"></em>
        </button>
        <div className="brand">
          <Link to="/"><img src="./img/logo-white.png" className="img-responsive non-sticky" /></Link>
          <Link to="/"> <img src="./img/logo-black.png" className="img-responsive stickylo" /></Link>
        </div>
         <a href="#" className="gold_taken_btn_header">{this.state.headerMsg}</a>
       <ul className="navbar pull-right">
          <li>
            <Link to="/buy">Buy</Link>
          </li>
          <li>
              <Link to="/sell">Sell</Link>
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
           <Link to="/login" className={this.state.loginBTNStatus}>Login</Link>
       </li>

           <li>
               <Link to="/dashboard" className={this.state.nameBTNStatus}>{this.state.Name}</Link>
           </li>
           <li className={this.state.logOutBTNStatus}>
              <img onClick={()=>this.LogOutBtn()} src="./img/logout.png" className=""/>
           </li>

        </ul>
      </nav>

    
</header>
</section>
	);
  }
    LogOutBtn=()=>
    {
        window.localStorage.removeItem("LoginData5");

window.location.href="/";
    }
}

 export default Header;
