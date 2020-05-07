import React from 'react';
import {Platform, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen',
  },
};

const MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen,
      },
      CategoryMeals: {
        screen: CategoryMealScreen,
      },
      MealDetail: MealDetailScreen,
    },
    defaultStackNavOptions,
);

const FavNavigator = createStackNavigator(
    {
      Favorites: FavoritesScreen,
      MealDetail: MealDetailScreen,
    },
    defaultStackNavOptions,
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
            <Ionicons name="ios-restaurant" size={25}
                      color={tabInfo.tintColor}/>
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ?
          <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> :
          'Meals',
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: Platform.OS === 'android' ?
          <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> :
          'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
          activeColor: 'white',
          shifting: true,
          barStyle: {
            backgroundColor: Colors.primaryColor,
          },
        })
        : createBottomTabNavigator(tabScreenConfig, {
          tabBarOptions: {
            labelStyle: {
              fontFamily: 'open-sans',
            },
            activeTintColor: Colors.accentColor,
          },
        });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
}, {
  // navigationOptions:{
  //   drawerLabel : 'Filters!!!'
  // },
  defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator, navigationOptions: {
      drawerLabel: 'Meals',
    },
  },
  Filters: FiltersNavigator,
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold',
    },
  },
});

export default createAppContainer(MainNavigator);
