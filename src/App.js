import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  
  /*const hStyle = { color: 'red'};
  const hStyle2 = { color: 'blue'};
  var hStyle3 = { color: 'green'};*/

  const [name,setName] = useState("");

  const[email,setEmail] = useState("");

  const [url,setUrl] = useState("");

  const responseGoogle = response => {
      setName(response.profileObj.name);
      setEmail(response.profileObj.email);
      setUrl(response.profileObj.imageUrl);
  };

  return (
      <div className = "App">
          <h1>Login with Google</h1>
          <h2>Welcome: {name}</h2>
          <h2>Email: {email}</h2>
          <image src = {url} alt = {name}/>
          <GoogleLogin
          clientId="421424544018-v6q46o2c5s4kbk4cuenj6fmnea2bsnpk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
          
      </div>
  )
  /*
  return (
    <div className="App">
      <h1 style = { hStyle3 }>Hello World</h1>
      <p>Hello World</p>
      <button type="button" onclick="hStyle3 = {color:orange};">Click Here</button>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
      Hello World<img src={logo} className="App-logo" alt="logo" />
        <p>
          Caption <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINK
        </a>
        <p>
          Caption <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINK
        </a>
        <h1 style = { hStyle2 }>Hello World</h1>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </header>
      <h1 style = { hStyle }>Hello World</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );*/
}

export default App;
