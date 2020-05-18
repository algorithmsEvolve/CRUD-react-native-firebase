import React from "react";
import { View, TextInput, Button, FlatList, SafeAreaView } from "react-native";
import { ListItem, Divider } from "react-native-elements";

import { styles } from "../../config/styles";

import { addFood, getFoods } from "../../src/api/FoodsApi";
import ActionButton from "react-native-action-button";
export default class FoodListScreen extends React.Component {
  state = {
    foodList: [],
    selectedIndex: 0,
  };

  onFoodAdded = (food) => {
    this.setState((prevState) => ({
      foodList: [...prevState.foodList, food],
    }));
    this.props.navigation.popToTop();
  };

  onFoodDeleted = () => {
    console.log(this.state.selectedIndex);
    var newFoodList = [...this.state.foodList];
    newFoodList.splice(this.state.selectedIndex, 1);
    this.setState((prevState) => ({
      foodList: (prevState.foodList = newFoodList),
    }));

    this.props.navigation.popToTop();
  };

  onFoodsReceived = (foodList) => {
    this.setState((prevState) => ({
      foodList: (prevState.foodList = foodList),
    }));
  };

  componentDidMount() {
    getFoods(this.onFoodsReceived);
  }

  render() {
    return (
      <SafeAreaView style={styles.containerFLS}>
        <FlatList
          data={this.state.foodList}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListItem
                title={item.name}
                subTitle={item.color}
                onPress={() => {
                  this.setState((prevState) => ({
                    selectedIndex: (prevState.selectedIndex = index),
                  }));
                  this.props.navigation.navigate("FoodDetail", {
                    food: item,
                    foodDeletedCallback: this.onFoodDeleted,
                  });
                }}
              />
            );
          }}
        />
        <ActionButton
          buttonColor="blue"
          onPress={() =>
            this.props.navigation.navigate("FoodForm", {
              foodAddedCallback: this.onFoodAdded,
            })
          }
        />
      </SafeAreaView>
    );
  }
}
