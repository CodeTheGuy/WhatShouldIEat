import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";

const SignIn = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [url, setUrl] = useState("");

  const responseGoogle = response => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  return (
    <div>
      <center>
        <h1>Sign in with a Google Account</h1>
        <h3>Welcome {name}</h3>
        <h5>Email: {email}</h5>
        <image src={url} alt={name} />
        <GoogleLogin
          clientId="421424544018-v6q46o2c5s4kbk4cuenj6fmnea2bsnpk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </center>
    </div>
  );
};
export default SignIn;
