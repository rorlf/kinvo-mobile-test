import Presentational from "./presentational";
import React, { Component } from 'react'
import { Transitioning, Transition } from 'react-native-reanimated';
import { Animated,Easing } from "react-native";


export default class Registers extends Component {

  constructor(props) {
    super(props);  
    cardItems = [{
      title: 'Aplicação',
      color: '#A4D36D',
      message: 'Cadastre uma nova aplicação em um produtos da carteira.'       
    },
    {
      title: 'Retirada',
      color: '#FF9B52',   
      message: 'Cadastre uma nova retira em um produtos da carteira.' 
  },
  {
      title: 'Novo Produto',
      color: '#36C4D6',   
      message: 'Cadastre um novo produtos de qualquer instituição.' 
  },
  {
      title: 'Conectar',
      color: '#A138C7',   
      message: 'Importe seus produtos de uma instituição parceira.'  
  },   

]; 
opacity = new Animated.Value(0)
showOption = false
offset = 0

    this.state = {cardItems,opacity,showOption,offset}
 
  }
  
    

onPressCloseButton = (ref) => {

  const {navigation} = this.props
  return navigation.goBack()
    
}

selectOption = (value)=> {
  this.setState(prevState => ({
    ...prevState,
    offset:value
  }))


  Animated.timing(this.state.opacity, {
    toValue: 1,
    duration: 1200,
    useNativeDriver:true

  }).start(()=> this.secondAnimation())
 


}

secondAnimation = ()=> {
  this.setState(prevState => ({
    ...prevState,
    showOption:true
  }))
  // Animated.timing(this.state.opacity, {
  //   toValue: 1,
  //   duration: 1800,
  //   useNativeDriver:true

  // }).start()
}




    render() {
        const transition = (
            <Transition.Sequence>
              <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
              <Transition.Change />
              <Transition.Together>
                <Transition.In
                  type="slide-bottom"
                  durationMs={400}
                  interpolation="easeOut"
                  propagation="bottom"
                />
                <Transition.In type="fade" durationMs={200} delayMs={200} />
              </Transition.Together>
            </Transition.Sequence>
          );

        const {onPressCloseButton,selectOption} = this
        const {cardItems,opacity,showOption,offset} = this.state
        const {navigation} = this.props
       
        return React.createElement(Presentational, {
            cardItems,            
            onPressCloseButton,
            transition,
            navigation,opacity,selectOption,showOption,offset
        });
    }
}
