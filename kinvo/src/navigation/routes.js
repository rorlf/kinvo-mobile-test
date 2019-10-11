import WalletTabs from "./WalletTabs";
import NavigationTabs from "./NavigationTabs";
import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { createStackNavigator, createSwitchNavigator} from "react-navigation";
import { Animated,Easing } from "react-native";

import {createStackNavigator} from 'react-navigation-stack';

import Working from "../pages/WorkingPage";
import RegisterPage from "../pages/RegisterPage";
import NewProductPage from "../pages/NewProductPage";

import { Transition } from 'react-native-reanimated';

const Pages = createBottomTabNavigator(
  {
    Summary: {
      screen: Working,
    
    },
    Wallet: {
      screen: WalletTabs,
   
    },
   
    Premium: {
      screen: Working,
     
    },
    Account: {
      screen: Working,
     
    }
  },
  {
    initialRouteName: "Wallet",  
    tabBarComponent: NavigationTabs,
  
   
  }
);


const Routes = createStackNavigator(
    { 
    Register: {
        screen: RegisterPage,      
      },
      Main: {
        screen: Pages,     
      },
      // NewProduct: {
      //   screen: NewProductPage,     
      // },
    

    },{
      initialRouteName: "Main",  
      headerMode:'none',
      backBehavior:'history',
      transitionConfig : () => ({
        transitionSpec: {
          duration: 0,
          timing: Animated.timing,
          easing: Easing.step0,
        },
      }),  
    }
)





export default Routes;
