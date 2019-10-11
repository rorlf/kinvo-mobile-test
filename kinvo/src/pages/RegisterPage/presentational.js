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
import NewProductPage from '../NewProductPage'

export default function Presentational(props) {
  const { cardItems,onPressCloseButton,transition,navigation,opacity,selectOption,showOption,offset } = props;
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



  renderCardItem = ({ item }) => <CardItem cardItem={item} navigation={navigation} opacity={  opacity.interpolate({
    inputRange: [0, 0.5,1],
    outputRange: [1,0, 0]
})} selectOption={selectOption}/>;

  renderAdvertising = () => <Advertising opacity={opacity.interpolate({
    inputRange: [0, 0.5,1],
    outputRange: [1,0, 0]
})}/>;

  renderLastRegisters = () => <LastRegisters opacity={opacity.interpolate({
    inputRange: [0, 0.5,1],
    outputRange: [1,0, 0]
})}/>;

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
      <View style={{flex:1}}>
            <NewProductPage opacity={  opacity.interpolate({
    inputRange: [0, 0.4,1],
    outputRange: [0,0,1]
})} offset={offset} showOption={showOption}/>
      <Animated.View style={[styles.registerScreen]}
      ref={ref}
      transition={transition}>
        {title}
        
        {registers}
      
       
  
        
      </Animated.View>
     
      
        {closeArea}

      </View>
    );
  };

  const registerScreen = renderRegisterScreen();
  return <View style={styles.container}>{registerScreen}</View>;
}

Presentational.propTypes = {
  cardItems: PropTypes.array.isRequired,
  onPressCloseButton: PropTypes.func.isRequired
};

