import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

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
    {
      // mode: "modal",
      // initialRouteName: "Categories",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      },
    },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return (
            <Ionicons
                name="ios-restaurant"
                size={25}
                color={tabInfo.tintColor}
            />
        );
      },
      tabBarColor:Colors.primaryColor
    },
  },
  Favorites: {
    screen: FavoritesScreen, navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return (
            <Ionicons
                name="ios-star"
                size={25}
                color={tabInfo.tintColor}
            />
        );
      },
      tabBarColor:Colors.accentColor
    },
  },
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor:'white',
      shifting:true,
      barStyle:{
        backgroundColor: Colors.primaryColor
      },
      // swipeEnabled:true
    }) :
    createBottomTabNavigator(
        tabScreenConfig,
        {
          tabBarOptions: {
            activeTintColor: Colors.accentColor,
          },
          // swipeEnabled:true
        },
    );

export default createAppContainer(MealsFavTabNavigator);
