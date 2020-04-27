import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoriesScreen = (props) => {
  // console.log(props);
  return (
      <View styles={styles.screen}>
        <Text> Categories Screen </Text>
        <Button title={'Go to Meals'} onPress={() => {
          // props.navigation.navigate({routeName: 'CategoryMeals'});
          props.navigation.navigate( 'CategoryMeals');
        }}/>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
