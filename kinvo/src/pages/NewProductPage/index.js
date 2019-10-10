import React, { Component } from "react";
import Presentational from "./presentational";
import { Animated,Easing } from "react-native";



export default class Products extends Component {
  constructor(props) {
    super(props);

    opacity = new Animated.Value(1.1)
   

    this.state = {cardItems,opacity}

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
