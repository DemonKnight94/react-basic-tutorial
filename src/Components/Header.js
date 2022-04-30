
import React, { Component } from 'react'
class Header extends React.Component{
    render(){
      return (
        <header>
          <h1>This is the header</h1>
          <h1 className="App-title">{this.props.title} </h1>
          <div>{this.props.num}</div>
          <div>{this.props.myArr}</div>
          <div>{this.props.myObj.a}</div>
          <div>{this.props.myObj.b}</div>
          <div>{this.props.myFunc(3,5)}</div>
          
        </header>
      )
    }
  }

  export default Header;