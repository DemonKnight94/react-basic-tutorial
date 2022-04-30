import logo from './logo.svg';
import './App.css';
//import Header from './Components/Header'
//import Body,{Body2} from './Components/Body'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import Counter from './Components/Counter'
import ImageSlider  from './Components/ImageSlider';
import SliderData from './Components/SliderData';
class App extends React.Component {
  add(a, b) {
    return a + b;
  }
  render() {
    return (
      <div>
        {/*}
        <div>
          <Header 
          title={"Hello from App"} 
          num={5}
          myArr={[10,' ',2,' ', 3]}
          myFunc={this.add}
          myObj={{
            a:5,
            b:6}}
           />
        </div>
        <div>
          <Body myFunc={this.add} text="Cool" />
          <Body myFunc={this.add} text="Cooler" />
          <Body2 myFunc={this.add} text2="Cool2" />
          <Counter initialCount={100} />
          <Counter initialCount={10} />
          <Counter initialCount={0} />*/}

          <ImageSlider slides={SliderData} />
          
      
      </div>
    )
  
} 
}

//const mapStateToProps = (state) => ({})

//const mapDispatchToProps = {}

//export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;