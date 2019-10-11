import Presentational from "./presentational";
import React, { Component } from 'react'
import { Transitioning, Transition } from 'react-native-reanimated';
import { Animated,Easing } from "react-native";


export default class CardItem extends Component {

  constructor(props) {
    super(props);  
    transY = new Animated.Value(0)
    

    this.state = {transY,animating:false} 
  } 
  

  upAnimation = async(offset,height)=> {  
    this.setState(prevState => ({ ...prevState, animating: true }));
   

    await Animated.sequence([
        Animated.timing(this.state.transY, {
            toValue: 20,
            duration: 300,
            useNativeDriver:true
          }),   
        Animated.timing(this.state.transY, {
            toValue: offset,
            duration: 900,
            useNativeDriver:true

          }),          
               
      ]).start(()=>{   navigation = this.props.navigation
        navigation.navigate('NewProduct',{
            title:this.props.cardItem.title, 
            color:this.props.cardItem.color, 
            message:this.props.cardItem.message,
            height: height,
          })});     
   
  }
  onPress = (ref)=>{

    // alert(JSON.stringify(ref))
    ref.current._component.measure( (fx, fy, width, height, px, py) => {

        console.log('Component width is: ' + width)
        console.log('Component height is: ' + height)
        console.log('X offset to frame: ' + fx)
        // alert('Y offset to frame: ' + fy)
        console.log('X offset to page: ' + px)
        // alert('Y offset to page: ' + py)
        let offset 

        Platform.select({
            ios: offset = -1*(py-65-(height/2)),
            android: offset = -1*(py-75),
            // tamanho mais margem
          })
      this.upAnimation(offset,height)
    this.props.selectOption(offset)


    })
    // ref.current.animateNextTransition();
    // color = '#B129E1'
    // this.setState({color})
    // setTimeout(()=>{navigation = this.props.navigation
    //     navigation.navigate('NewProduct')},2000)
    
  }
  render() {

   const onPress = this.onPress
   const {transY} = this.state

   let opacidade
   if(this.state.animating==false){
    opacidade = this.props.opacity}
   else{
    opacidade = 1}

    return React.createElement(Presentational, {
        ...this.props,
        onPress,
        transY,
        opacidade,
    });
}
}
