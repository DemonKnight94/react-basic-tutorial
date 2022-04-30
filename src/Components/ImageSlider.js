import React, { Component, createContext } from 'react'



import { connect } from 'react-redux'
 
export class ImageSlider extends Component {
  //const length=slides.length;
  

   state={
        
    images:[
    "https://i.pinimg.com/originals/ae/c4/58/aec45882f94d106be3eac10efc4c293b.gif",
    "https://i.pinimg.com/originals/9d/f6/4e/9df64e1f65f9e34bcdb45ad5a62e61bf.gif",
    "https://i.pinimg.com/originals/ec/95/06/ec9506a6b1de4b3755ed6de9974607ac.gif",
    "https://i.pinimg.com/originals/96/1a/fd/961afdd9a8354f46590b85a9477d63e5.gif"
    ],i:0


}
  
                
 handleNext=()=>{
  console.log(this.state)
  this.setState({
    i:this.state.i+1
 },
  ()=>{
    console.log(this.state);
  });
}

handlePrev=()=>{
 console.log(this.state)
 this.setState({
    i:this.state.i-1
 },
 ()=>{
   console.log(this.state);
 });
}

render()
{
return (
       <div>
      
  <div>
          <img style={{
            height:300,
            width:300}}
            src={this.state.images[this.state.i]} />
          <button onClick={this.handlePrev}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
  </div>
        

      </div>

       
     )
   }
  }
 
 
 
 







export default ImageSlider;