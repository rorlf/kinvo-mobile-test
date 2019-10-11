import React, { useState, useRef } from 'react';
import {
  Text,  
  FlatList,
  View,
  TouchableOpacity,
  Animated,
  
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

import { Transitioning, Transition } from 'react-native-reanimated'; 

export default function Presentational(props) {
  const { cardItems,onPressCloseButton,transition,navigation,opacity, transY} = props;
  
  const  [title, color, message,height]  =['Novo Produto','#36C4D6','testeee',112]
  const visible = false
  const ref = useRef();
  
  
  




  renderCardName = () => (    
    <Text style={styles.cardName}>{title}</Text>   
);

renderIconCard = () => (
  <View    
  style={[styles.iconCard,{backgroundColor: color}]}
  >
      {/* simulando icone */}
    <Text style={{ color: "white", alignSelf: "center" }}>X</Text>
  </View>
);

renderPlusButton = () => (
    <Text style={styles.plusButton}>+</Text>
);

renderTitleAndIcon = () => {
  const cardName = this.renderCardName();
  const iconCard = this.renderIconCard();

  return (
    <View style={styles.titleAndIconArea}>
      {iconCard}
      {cardName}
    </View>
  );
};

renderTitleAndIconAndPlusButtonCard = () => {
  const titleAndIcon = this.renderTitleAndIcon();
  const plusButton = renderPlusButton();

  return (
    <View
      style={styles.titleAndIconAndPlusButtonArea}
    >
      {titleAndIcon}
      {plusButton}
    </View>
  );
};

renderMessage = () => {
  return (
      <Text style={styles.message}>{message}</Text>
  );
};

renderDivider = () => {
  return (
    <View
      style={styles.divider}
    ></View>
  );
};

renderCard = () => {
  const titleAndIconAndButton = renderTitleAndIconAndPlusButtonCard();
  const messageText = renderMessage();
  const divider = renderDivider();
  if(!visible){
  return (
    <Animated.View style={{opacity: opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1]
  })}}>
    <TouchableOpacity style={[styles.container,{height:height,transform: [{ translateY: transY }]},]}>
      {titleAndIconAndButton}
      {divider}
      {messageText}
    </TouchableOpacity>
    </Animated.View>
  );
}
};










  renderTitleRegister = () => (
    <View style={styles.titleArea}>
      <Text style={styles.titleText}>Cadastro</Text>
    </View>
  );

  renderCloseButton = () => (
    <TouchableOpacity  style={styles.closeButton} onPress={onPressCloseButton}>
        <Text style={styles.closeIcon}>X</Text>
    </TouchableOpacity>
  );

  renderCloseArea = () => {
    const closeButton = renderCloseButton();
    return <View style={styles.closeArea}>{closeButton}</View>;
  };



  renderRegisterScreen = () => {
    const title = renderTitleRegister();
    const closeArea = renderCloseArea();
const card = renderCard();


const newProductsItems = [{
  key: 'Ações',   
  color:'blue'
},
{
  key: 'Debentures',
  color:'green'

},
{
  key: 'Bitcoin', 
  color:'black'

},
{
  key: 'Fundos',
  color:'brown'

}, 
{
  key: 'Renda Prefixada',
  color:'orange'

},
{
  key: 'Renda pos fixada', 
  color:'pink'

},
{
  key: 'Poupança',
  color:'yellow'

}, 
{
  key: 'Previdencia',
  color:'grey'

},   
    

]; 

    return (
      <Animated.View  style={[styles.registerScreen,]}
      ref={ref}
      transition={transition}>
        <View>
        {/* {card} */}
        <Animated.View style={[{justifyContent:'center',alignItems:'center',opacity:opacity.interpolate({
      inputRange: [0, 0.5,1],
      outputRange: [0,0, 1]
  })}]}>
        <FlatList
        style={{width:'100%'}}
        data={newProductsItems}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity
          style={{justifyContent:'flex-start',flexDirection:'row',flex:1,height:30,width:'77%',borderColor:'grey',borderWidth:1,borderRadius:50,margin:15,padding:5,paddingLeft:30}}
            >
              
            <View style={{backgroundColor: item.color,height:'100%',width:3,borderRadius:5,marginRight:10}}>              
            </View>
            <Text style={{}} >{item.key}</Text>

          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
      </Animated.View>
        </View>
        
        
      </Animated.View >
    );
  };

  const registerScreen = renderRegisterScreen();
  return <View style={styles.container1}>{registerScreen}</View>;
}



