import React,{ useState, useRef }  from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Transitioning, Transition } from 'react-native-reanimated'; 
import { Animated,Easing } from "react-native";




export default function Presentational(props) {
  const { title, color, message } = props.cardItem;
  const {visible,onPress,transY,opacidade} = props
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
      <TouchableOpacity onPress={()=> onPress(ref)}>
        {titleAndIconAndButton}
        {divider}
        {messageText}
      </TouchableOpacity>
    );
  }
  };



  const card = renderCard();

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="slide-left" durationMs={4000} interpolation="easeIn" />
      <Transition.Change />
      <Transition.Together>
        <Transition.In
          type="slide-left"
          durationMs={40000}
          interpolation="easeOut"
          propagation="bottom"
        />
        <Transition.In type="slide-left" durationMs={20000} delayMs={200} />
      </Transition.Together>
    </Transition.Sequence>
  );

  return <Animated.View 
  ref={ref}
      transition={transition}
      style={[styles.container,{transform: [{ translateY: transY }],opacity:opacidade}]}
      
      >{card}
      
      </Animated.View>;
}

Presentational.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    message: PropTypes.string,  
  };
  
  Presentational.defaultProps = {
    title: '',
    color: '',
    message: '', 
  };