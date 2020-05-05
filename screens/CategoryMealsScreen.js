import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = (props) => {
  const renderMealItem = itemData => {
    return <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail', params: {
              mealId: itemData.item.id,
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
    />;
  };

  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return (
      <View styles={styles.screen}>
        <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id}
                  renderItem={renderMealItem} style={{width: '100%'}}/>
      </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
