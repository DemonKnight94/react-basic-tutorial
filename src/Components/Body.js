
import React, { Component }  from 'react';

function Body(props) 
{
      return (
          
        <div>
          <h1>This is the Body</h1>
          <div>{props.text}</div>
          <div>{props.myFunc(4,3)}</div>
        </div>
          
      )
    }
   

  export default Body;

  export function Body2(props){
      return(
          <div>
          <h1>Body2</h1>
          <h1>{props.text2}</h1>
          </div>
          )
  }