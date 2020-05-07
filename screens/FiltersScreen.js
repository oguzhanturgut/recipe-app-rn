import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {Menu} from 'react-native-paper';

const FiltersScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text> Filters Screen </Text>
    </View>
  )
}

FiltersScreen.navigationOptions = navData =>  {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title={Menu} iconName={'ios-menu'} onPress={() => {
        navData.navigation.toggleDrawer()
      }} />
    </HeaderButtons>)
  }

};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default FiltersScreen;
