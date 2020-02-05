import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

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
  )
}

export default App;
