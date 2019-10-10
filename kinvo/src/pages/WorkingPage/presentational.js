import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import ProductType from '../../common/enums/ProductType'

export default function Presentational() {
  
  renderMaintenance = () => {
    return (
      <View style={styles.maintenanceContainerStyle}>
        <Text style={styles.textStyle}> {JSON.stringify(ProductType.get('Fundo'))} </Text>

        <Icon name="worker" color="#0DD1E2" size={50} />
        <ActivityIndicator />
      </View>
    );
  };

  const maintenance = renderMaintenance();

  return <View style={styles.container}>{maintenance}</View>;
}
