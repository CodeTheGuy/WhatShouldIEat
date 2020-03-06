import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Quiz extends Component{

  render(){
    return (
    <div className="Quiz">
      <h2>
        <center>The Quiz</center>
      </h2>

      <b1>
        <center>
        Answer a few questions, and we'll determine what kind of food you're in the mood for!{" "}
        </center>
      </b1>

      <center>
        <Link to='/quiz'>
          <button className="begin" type="button" >
             Begin
          </button>
        </Link>
      </center>

    </div>
    );
  };
}

export default Quiz;