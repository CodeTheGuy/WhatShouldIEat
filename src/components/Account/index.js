import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Account = () => {
  const [name, setName] = useState(localStorage.getItem("name"));

  const [email, setEmail] = useState(localStorage.getItem("email"));

  const [url, setUrl] = useState(localStorage.getItem("url"));

  var signedIn = (localStorage.getItem("SignedIn") == "T");
  
  const responseGoogle = response => {
    console.log(response);
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("email", response.profileObj.email);
    localStorage.setItem("url", response.profileObj.url);
    localStorage.setItem("SignedIn", "T");
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  const logout = response =>{
    console.log(response);
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("url", "");
    localStorage.setItem("SignedIn", "F");
    setName("");
    setEmail("");
    setUrl("");
  };
  
  function print()
  {
    if(signedIn)
    {
      return (
        <div>
      <center>
        <h1>Account Information</h1>
        <h3>Welcome, {name}</h3>
        <h5>Email: {email}</h5>
        <image src={url} alt={name} />
        <h7>  </h7>
        <GoogleLogout
        clientId="421424544018-v6q46o2c5s4kbk4cuenj6fmnea2bsnpk.apps.googleusercontent.com"
        buttonText="Log Out"
        onLogoutSuccess={logout}
        isSignedIn = {false}
        >
        </GoogleLogout>
      </center>
    </div>
      );
    }
    return (
      <div>
      <center>
        <h1>Please Sign In with a Google Account</h1>
        <GoogleLogin
          clientId="421424544018-v6q46o2c5s4kbk4cuenj6fmnea2bsnpk.apps.googleusercontent.com"
          buttonText="Log In"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </center>
    </div>
    );
  }

  return (
    print()
  );
};
export default Account;
