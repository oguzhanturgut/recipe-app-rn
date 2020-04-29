import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text> Category Meal Screen </Text>
      <Button
        title={"Go to Meal Details"}
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title={"Go Back"}
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
