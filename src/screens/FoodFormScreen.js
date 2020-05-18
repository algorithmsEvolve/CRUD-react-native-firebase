import React, { Component } from "react";
import FoodForm from "../ui/FoodForm";

export default class FoodFormScreen extends Component {
  state = {
    food: {
      name: "",
      category: "",
      subIngredients: [],
    },
    currentSubIngredient: null,
  };

  componentDidMount() {
    const currentFood = this.props.route.params.food;
    if (currentFood) {
      this.setState((prevState) => ({ food: (prevState.food = currentFood) }));
    }
  }

  onFoodUpdated = (food) => {
    this.props.navigation.popToTop();
  };

  setCurrentSubIngredient = (text) => {
    this.setState((prevState) => ({
      currentSubIngredient: (prevState.currentSubIngredient = text),
    }));
  };

  submitSubIngredients = () => {
    let ingredient = this.state.currentSubIngredient;
    if (ingredient && ingredient.length > 2) {
      this.setState((prevState) => ({
        food: {
          ...prevState.food,
          subIngredients: [...prevState.food.subIngredients, ingredient],
        },
      }));
    }
  };

  render() {
    return (
      <FoodForm
        setSubIngredients={this.setCurrentSubIngredient}
        submitSubIngredients={this.submitSubIngredients}
        food={this.state.food}
        onFoodAdded={this.props.route.params.foodAddedCallback}
        onFoodUpdated={this.onFoodUpdated}
      />
    );
  }
}
