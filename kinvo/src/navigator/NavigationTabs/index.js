import React from "react";

import { createBottomTabNavigator } from "react-navigation";
import { Image } from "react-native";
import CarteiraTabs from "../CarteiraTabs";
import Working from "../../pages/WorkingPage";
import styles from "./styles";

const ContainerRoutes = createBottomTabNavigator(
  {
    Resumo: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require("../../imagens/resumo.png")} />
      }
    },
    Carteira: {
      screen: CarteiraTabs,
      navigationOptions: {
        tabBarLabel: <Image source={require("../../imagens/carteira.png")} />
      }
    },
    Plus: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require("../../imagens/plus.png")} />
      }
    },
    Premium: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require("../../imagens/premium.png")} />
      }
    },
    Conta: {
      screen: Working,
      navigationOptions: {
        tabBarLabel: <Image source={require("../../imagens/conta.png")} />
      }
    }
  },
  {
    initialRouteName: "Carteira",
    tabBarOptions: {
      style: styles.tabBarStyle
    }
  }
);

export default ContainerRoutes;