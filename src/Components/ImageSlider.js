import React, { Component } from 'react'

import SliderData from './SliderData';

const ImageSlider =()=>{
 

 const [current,setCurrent]=useState(0);
 const length=slides.length;


 handleNext=()=>{
    console.log(state)
    this.setState({
      i:this.state.i-1
   },
    ()=>{
      console.log(state);
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

 

   return (
     <div>
       
          <div>
          <button OnClick={this.handlePrev}>Previous</button>
          <button OnClick={this.handleNext}>Next</button>
          </div>
        {
      SliderData.map((slider,index)=>{
           return <img src={slider.image} alt="pin image" />

      })
        }
</div>
)
      }




export default ImageSlider;