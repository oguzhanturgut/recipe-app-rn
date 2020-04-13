import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryMealScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text> Category Meal Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default CategoryMealScreen;
