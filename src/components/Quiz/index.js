import React, { Component } from "react";
import { Link } from "react-router-dom";
import "survey-react/survey.css";
import * as Survey from "survey-react";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent = () => {
    this.setState({
      isCompleted: true,
    });
  };

  render() {
    var json = {
      clearInvisibleValues: "onHidden",
          questions: [
            {
              type: "radiogroup",
              name: "Category",
              title: "What kind of food are you in the mood for?",
              choices: [
                "Main", "Snack", "Dessert", "Drink"
              ],
        }, 
        
        
        
        //This is the second step in the survey
        {
              "type": "radiogroup",
              "name": "MainMood",
              "title": "Please check the foods you feel would taste the best right now",
              "visibleIf": "{Category} contains Main",
              choices: [
                "Meats", "Salad", "Grains"
              ],
            } , {
              "type": "radiogroup",
              "name": "SnackMood",
              "title": "Please check the foods you feel would taste the best right now",
              "visibleIf": "{Category} contains Snack",
              choices: [
                "Salty", "Sweet"
              ],
            }, {
              "type": "radiogroup",
              "name": "DessertMood",
              "title": "Please check the foods you feel would taste the best right now",
              "visibleIf": "{Category} contains Dessert",
              choices: [
                "Chocolate", "Fruit", "Baked"
              ],
            }, {
              "type": "radiogroup",
              "name": "DrinkMood",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{Category} contains Drink",
              choices: [
                "Plain", "Smoothie"
              ],
            }, 
            


            //This is the third step in the survey
            {
              "type": "checkbox",
              "name": "MeatMeals",
              "title": "Please check the chocolate desserts you feel would taste the best right now",
              "visibleIf": "{MainMood} contains Meats",
              choices: [
                "Light Meats", "Dark Meats", "Fish"
              ],
            } ,             {
              "type": "checkbox",
              "name": "SaladMeals",
              "title": "Please check the fruit desserts you feel would taste the best right now",
              "visibleIf": "{MainMood} contains Salad",
              choices: [
                "Fruit Salad", "Vegetable Salad"
              ],
            } ,            {
              "type": "checkbox",
              "name": "GrainMeals",
              "title": "Please check the baked desserts you feel would taste the best right now",
              "visibleIf": "{MainMood} contains Grains",
              choices: [
                "Bread", "Pizza", "Cereal"
              ],
            } ,



            {
              "type": "checkbox",
              "name": "SaltySnacks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{SnackMood} contains Salty",
              choices: [
                "Crackers", "Chips"
              ],
            } ,             {
              "type": "checkbox",
              "name": "SweetSnacks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{SnackMood} contains Sweet",
              choices: [
                "Candy", "Baked Goods"
              ],
            } ,




            {
              "type": "checkbox",
              "name": "ChocolateDesserts",
              "title": "Please check the chocolate desserts you feel would taste the best right now",
              "visibleIf": "{DessertMood} contains Chocolate",
              choices: [
                "Brownies", "Pudding", "Chocolate Bar"
              ],
            } ,             {
              "type": "checkbox",
              "name": "FruitDesserts",
              "title": "Please check the fruit desserts you feel would taste the best right now",
              "visibleIf": "{DessertMood} contains Fruit",
              choices: [
                "Fruit Salad", "Fruit Dip", "Fruit pizza"
              ],
            } ,            {
              "type": "checkbox",
              "name": "BakedDesserts",
              "title": "Please check the baked desserts you feel would taste the best right now",
              "visibleIf": "{DessertMood} contains Baked",
              choices: [
                "Brownies", "Cake", "Bars"
              ],
            } ,             
            
            
            
            {
              "type": "checkbox",
              "name": "PlainDrinks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{DrinkMood} contains Plain",
              choices: [
                "Water", "Milk", "Juice"
              ],
            } ,             {
              "type": "checkbox",
              "name": "SmoothieDrinks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{DrinkMood} contains Smoothie",
              choices: [
                "Fruit", "Dessert", "Workout"
              ],
            } ,
      ],
      completedHtml: "Thank you!"
    };

    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;

    var onSurveyCompletion = this.state.isCompleted ? (
    <div>
      <h1>
        <center>
          It looks like you're in the mood for foods related to these categories.
        </center>
      </h1>

      {json.stringify}

      <center>
      See what you have around the house, or search for recipes using our search feature!
        </center>
    </div>
    ) : null;

    return (
      <div className="Quiz">
        <div>
          {surveyRender}
          {onSurveyCompletion}
        </div>
      </div>
    )
}
}
export default Quiz;