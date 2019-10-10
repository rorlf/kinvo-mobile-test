import React, { useState, useRef } from 'react';
import {
  Text,  
  FlatList,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

import { Transitioning, Transition } from 'react-native-reanimated'; 

export default function Presentational(props) {
  const { cardItems,onPressCloseButton,transition,navigation,opacity } = props;
  const  {title, color, message,height}  = navigation.state.params
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
    <Animated.View style={{opacity:opacity}}>
    <TouchableOpacity style={[styles.container,{height:height,}]}>
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



    return (
      <Transitioning.View style={styles.registerScreen}
      ref={ref}
      transition={transition}>
        <View>
        {title}
        {card}
        </View>
        
        
        {closeArea}
      </Transitioning.View>
    );
  };

  const registerScreen = renderRegisterScreen();
  return <View style={styles.container1}>{registerScreen}</View>;
}



