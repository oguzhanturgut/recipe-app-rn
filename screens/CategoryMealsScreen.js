import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
      <View styles={styles.screen}>
        <Text> Category Meal Screen </Text>
        <Text>{selectedCategory.title}</Text>
        <Button title={'Go to Meal Details'} onPress={() => {
          props.navigation.navigate({routeName:'MealDetail'});
        }}/>
        <Button title={'Go Back'} onPress={()=>{
          props.navigation.goBack();
          // props.navigation.pop();
        }} />
      </View>
  );
};

CategoryMealScreen.navigationOptions = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
