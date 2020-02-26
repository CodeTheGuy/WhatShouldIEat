import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';
import GoogleLogin from 'react-google-login';

const App = () => {

  //These are taken from the edamam API
  const APP_ID = "d6555000";
  const APP_KEY = "7cb56f715642c34bb6ba13ef7fbb23a1";

  //Contructors, recipes 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Chicken')
  useEffect(() =>{
    getRecipes();
  }, [query]);
  const [name,setName] = useState("");

  const[email,setEmail] = useState("");

  const [url,setUrl] = useState("");

  const responseGoogle = response => {
      setName(response.profileObj.name);
      setEmail(response.profileObj.email);
      setUrl(response.profileObj.imageUrl);
  };
  
  //Gets recipe information
  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
  }

  //A gate that allows the target search to go through after search has been clicked
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  //Search bar UI, allows the search bar to be clicked to input information
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  //Creates all the front end information by fetching info from the recipe API
  return(
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
    
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  </div>
  )
}

export default App;
