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
              isRequired: true,
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
              isRequired: true,
              choices: [
                "Meats", "Salad", "Grains"
              ],
            } , {
              "type": "radiogroup",
              "name": "SnackMood",
              "title": "Please check the foods you feel would taste the best right now",
              "visibleIf": "{Category} contains Snack",
              isRequired: true,
              choices: [
                "Salty", "Sweet"
              ],
            }, {
              "type": "radiogroup",
              "name": "DessertMood",
              "title": "Please check the foods you feel would taste the best right now",
              "visibleIf": "{Category} contains Dessert",
              isRequired: true,
              choices: [
                "Chocolate", "Fruit", "Baked"
              ],
            }, {
              "type": "radiogroup",
              "name": "DrinkMood",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{Category} contains Drink",
              isRequired: true,
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
              isRequired: true,
              choices: [
                "Light Meats", "Red Meats", "Fish"
              ],
            } ,             {
              "type": "checkbox",
              "name": "SaladMeals",
              "title": "Please check the fruit desserts you feel would taste the best right now",
              "visibleIf": "{MainMood} contains Salad",
              isRequired: true,
              choices: [
                "Fruit Salad", "Vegetable Salad"
              ],
            } ,            {
              "type": "checkbox",
              "name": "GrainMeals",
              "title": "Please check the baked desserts you feel would taste the best right now",
              "visibleIf": "{MainMood} contains Grains",
              isRequired: true,
              choices: [
                "Bread", "Pizza", "Cereal"
              ],
            } ,



            {
              "type": "checkbox",
              "name": "SaltySnacks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{SnackMood} contains Salty",
              isRequired: true,
              choices: [
                "Crackers", "Chips"
              ],
            } ,             {
              "type": "checkbox",
              "name": "SweetSnacks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{SnackMood} contains Sweet",
              isRequired: true,
              choices: [
                "Candy", "Baked Goods"
              ],
            } ,




            {
              "type": "checkbox",
              "name": "ChocolateDesserts",
              "title": "Please check the chocolate desserts you feel would taste the best right now",
              "visibleIf": "{DessertMood} contains Chocolate",
              isRequired: true,
              choices: [
                "Brownies", "Pudding", "Chocolate Bar"
              ],
            } ,             {
              "type": "checkbox",
              "name": "FruitDesserts",
              "title": "Please check the fruit desserts you feel would taste the best right now",
              "visibleIf": "{DessertMood} contains Fruit",
              isRequired: true,
              choices: [
                "Fruit Dip", "Fruit pizza"
              ],
            } ,            {
              "type": "checkbox",
              "name": "BakedDesserts",
              "title": "Please check the baked desserts you feel would taste the best right now",
              "visibleIf": "{DessertMood} contains Baked",
              isRequired: true,
              choices: [
                "Cake", "Bars"
              ],
            } ,             
            
            
            
            {
              "type": "checkbox",
              "name": "PlainDrinks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{DrinkMood} contains Plain",
              isRequired: true,
              choices: [
                "Water", "Milk", "Juice"
              ],
            } ,             {
              "type": "checkbox",
              "name": "SmoothieDrinks",
              "title": "Please check the drinks you feel would taste the best right now",
              "visibleIf": "{DrinkMood} contains Smoothie",
              isRequired: true,
              choices: [
                "Fruit", "Dessert", "Workout"
              ],
            } ,

            {
              "type": "imagepicker",
              "name": "Result",
              "title": "Try searching for foods related to these items using our search feature!",
              "visibleIf": "{MeatMeals} notempty or {SaladMeals} notempty or {GrainMeals} notempty or {SaltySnacks} notempty or {SweetSnacks} notempty or {ChocolateDesserts} notempty or {FruitDesserts} notempty or {BakedDesserts} notempty or {PlainDrinks} notempty or {SmoothieDrinks} notempty",
              "choicesVisibleIf": "{MeatMeals} contains {item} or {SaladMeals} contains {item} or {GrainMeals} contains {item} or {SaltySnacks} contains {item} or {SweetSnacks} contains {item} or {ChocolateDesserts} contains {item} or {FruitDesserts} contains {item} or {BakedDesserts} contains {item} or {PlainDrinks} contains {item} or {SmoothieDrinks} contains {item}",
              choices: [
                {
                  "value": "Light Meats",
                  "imageLink": "https://i.imgur.com/OiMC1HO.jpg"
                },
                {
                  "value": "Red Meats",
                  "imageLink": "https://i.imgur.com/DPe9Ar2.jpg"
                },
                {
                  "value": "Fish",
                  "imageLink": "https://i.imgur.com/CPshvTh.jpg"
                },


                {
                  "value": "Fruit Salad",
                  "imageLink": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fruit-salad-horizontal-jpg-1522181219.jpg?crop=1xw:1xh;center,top&resize=980:*"
                },                
                {
                  "value": "Vegetable Salad",
                  "imageLink": "https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-1200x1553.jpg"
                },

                {
                  "value": "Bread",
                  "imageLink": "https://thestayathomechef.com/wp-content/uploads/2019/10/Homemade-Bread-4.jpg"
                },
                {
                  "value": "Pizza",
                  "imageLink": "http://sugardale.mt.stage.env.marcusthomasllc.com/sites/default/files/stuffed%20crust%20pizza.jpg"
                },

                {
                  "value": "Cereal",
                  "imageLink": "https://cdn.vox-cdn.com/thumbor/v3rT22odyB6Bfy_mBlXFfpBzSZs=/0x0:3414x2561/1520x1013/filters:focal(0x0:3414x2561):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/51127681/shutterstock_322906217.0.0.jpg"
                },
                {
                  "value": "Crackers",
                  "imageLink": "https://www.verywellfit.com/thmb/wOpeNe314K6Rtyty2NdU8ppGlAM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crackers-crop-3b8f8bf4a410479682c41e3e6f563f57.jpg"
                },
                {
                  "value": "Chips",
                  "imageLink": "https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/7977_4k.jpg"
                },

                {
                  "value": "Candy",
                  "imageLink": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mixed-halloween-candy-background-royalty-free-image-176869502-1567700779.jpg?resize=980:*"
                },
                {
                  "value": "Baked Goods",
                  "imageLink": "https://imgur.com/X1g5qVU.jpg"
                },

                {
                  "value": "Brownies",
                  "imageLink": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/12/homemade-fudge-brownies.jpg"
                },
                {
                  "value": "Pudding",
                  "imageLink": "https://i.imgur.com/EQ7BTEG.png"
                },
                {
                  "value": "Chocolate Bar",
                  "imageLink": "https://ellaschocolates.com/wp-content/uploads/2014/04/Chocalate-Bar.jpg"
                },

                {
                  "value": "Fruit Dip",
                  "imageLink": "https://www.spendwithpennies.com/wp-content/uploads/2019/08/Fruit-Dip-SpendWithPennies.jpg"
                },
                {
                  "value": "Fruit pizza",
                  "imageLink": "https://i.imgur.com/dOVTASt.png"
                },


                {
                  "value": "Cake",
                  "imageLink": "https://i.imgur.com/jNZev6M.png"
                },
                {
                  "value": "Bars",
                  "imageLink": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/12/homemade-fudge-brownies.jpg"
                },

                {
                  "value": "Water",
                  "imageLink": "https://images.everydayhealth.com/images/healthy-living/the-health-benefits-of-water-722x406.jpg?sfvrsn=45ccd729_0"
                },
                {
                  "value": "Milk",
                  "imageLink": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/living_with_a_milk_allergy_ref_guide/650x350_living_with_a_milk_allergy_ref_guide.jpg?resize=*:350px"
                },
                {
                  "value": "Juice",
                  "imageLink": "https://www.modernhoney.com/wp-content/uploads/2018/09/Healthy-Juice-Cleanse-Recipes-1-1024x660.jpg"
                },

                {
                  "value": "Fruit",
                  "imageLink": "https://www.modernhoney.com/wp-content/uploads/2018/09/Healthy-Juice-Cleanse-Recipes-1-1024x660.jpg"
                },
                {
                  "value": "Dessert",
                  "imageLink": "https://1ta5nwisf6-flywheel.netdna-ssl.com/wp-content/uploads/2018/03/Healthy-Snickers-Smoothie3.jpg"
                },
                {
                  "value": "Workout",
                  "imageLink": "https://www.gimmesomeoven.com/wp-content/uploads/2015/12/Post-Workout-Green-Smoothie-1.jpg"
                },
              ],
            },
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

    var surveyValueChanged = function (sender, options) {
      var el = document.getElementById(options.name);
      if (el) {
          el.value = options.value;
      }
    };

    var onSurveyCompletion = this.state.isCompleted ? (
    <div>
      <h1>
        <center>
          Thank you!
        </center>
      </h1>
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
