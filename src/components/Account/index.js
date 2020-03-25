import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const Account = () => {
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
        <h1>Account Information</h1>
        <h3>Welcome {name}</h3>
        <h3>Email: {email}</h3>
        <image src={url} alt={name} />
      </center>
    </div>
  );
};
export default Account;
