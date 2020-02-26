import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*import GoogleLogin from 'react-google-login';

function App1(){

    const [name,setNme] = useState("");

    const[email,setEmail] = useState("");

    const [url,setUrl] = useState("");

    const responseGoogle = response => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };

    return (
        <div className = "App1">
            <h1>Login with Google</h1>
            <h2>Welcome: [name]</h2>
            <h2>Email: [email]</h2>
            <image src = {url} alt = {name}/>
            <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
