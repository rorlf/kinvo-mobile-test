import React from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList ,Animated} from "react-native";
import styles from "./styles";
import LastRegisterItem from "./components/lastRegisterItem";

export default function Presentational(props) {
  const { dataApi,opacity } = props;
 
  

  renderLastRegistersText = () => (
    <Text style={styles.lastRegistersText}>
      Últimos cadastros
    </Text>
  );
  renderLastRegisters = () => {
    return(
       <FlatList
      data={dataApi}
      renderItem={renderLastRegisterItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={renderLastRegistersText}
    />)
   
  };

  renderLastRegisterItem = ({ item }) => (
    <LastRegisterItem lastRegisterItem={item} />
  );


 

  renderContent = () => {
    const IsEmptyLastRegisters= dataApi.length === 0
    if(IsEmptyLastRegisters)
    return null

    return renderLastRegisters();
  };

  const content = renderContent();

  return (
    <Animated.View
      style={[{opacity:opacity },styles.container]}
    >
      {content}
    </Animated.View>
  );
}
Presentational.propTypes = {
  dataApi: PropTypes.array,
};

Presentational.defaultProps = {
  dataApi: []
};
