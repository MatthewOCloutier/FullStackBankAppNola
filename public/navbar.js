// import React, { useState } from "react";


function NavBar(){
  const { session, setSession }= React.useContext(UserContext);
const [logged, setLogged] = React.useState(false);
  

  return(

    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>      
                
        </ul>
        <ul className="nav justify-content-end">
        <div className="btn-group">
  <button type="button" className="btn btn-black dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Logout</a>
  </div>
</div>
        </ul>


      </div> 
     
    </nav>

  ) ;
}