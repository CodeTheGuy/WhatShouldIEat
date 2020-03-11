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
          clientId="421424544018-7o6ke0n80kdkf9cagaqt162lq624dh6r.apps.googleusercontent.com"
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
