import React, { Component } from "react";
import Presentational from "./presentational";
import { Animated,Easing } from "react-native";



export default class Products extends Component {
  constructor(props) {
    super(props);
    transY = new Animated.Value(0)

    this.state = {cardItems,transY}

  }

 

  componentDidMount() {

  }

 
  onPressCloseButton = () => {
    const {navigation} = this.props
    return navigation.goBack()
}


  

  render() {

    const {onPressCloseButton} = this
    
    
    return React.createElement(Presentational, {
      ...this.state,
      ...this.props,
      onPressCloseButton,
      
     
    });
  }
}
