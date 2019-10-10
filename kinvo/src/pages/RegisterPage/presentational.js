import React, { useState, useRef } from 'react';
import {
  Text,  
  FlatList,
  View,
  TouchableOpacity,
  
} from "react-native";
import PropTypes from "prop-types";
import { Animated,Easing } from "react-native";



import styles from "./styles";
import CardItem from "./components/CardItem";
import Advertising from "./components/Advertising";
import LastRegisters from "./components/LastRegisters"; 
import { Transitioning, Transition } from 'react-native-reanimated'; 

export default function Presentational(props) {
  const { cardItems,onPressCloseButton,transition,navigation,opacity,fadeOut } = props;
  const ref = useRef();

  renderRegisters = () => {
  keyExtractor = item => item.title;

    return (
      <FlatList
        data={cardItems}
        renderItem={renderCardItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderAdvertising}
        ListFooterComponent={renderLastRegisters}
      />
    );
  };



  renderCardItem = ({ item }) => <CardItem cardItem={item} navigation={navigation} opacity={opacity} fadeOut={fadeOut}/>;

  renderAdvertising = () => <Advertising opacity={opacity}/>;

  renderLastRegisters = () => <LastRegisters opacity={opacity}/>;

  renderTitleRegister = () => (
    <View style={styles.titleArea}>
      <Text style={styles.titleText}>Cadastro</Text>
    </View>
  );

  renderCloseButton = () => (
    <TouchableOpacity  style={styles.closeButton} onPress={()=>onPressCloseButton(ref)}>
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
    const registers = renderRegisters();

    return (
      <Animated.View style={[styles.registerScreen]}
      ref={ref}
      transition={transition}>
        {title}
        {registers}
        {closeArea}
        
      </Animated.View>
    );
  };

  const registerScreen = renderRegisterScreen();
  return <View style={styles.container}>{registerScreen}</View>;
}

Presentational.propTypes = {
  cardItems: PropTypes.array.isRequired,
  onPressCloseButton: PropTypes.func.isRequired
};

