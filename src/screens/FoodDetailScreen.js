import React from "react";
import { View, Alert, Text, FlatList, SafeAreaView } from "react-native";
import { getFoods, signout } from "../api/FoodsApi";
import { Icon, Divider } from "react-native-elements";
import ActionButton from "react-native-action-button";
import { deleteFood } from "../api/FoodsApi";

//config
import { styles } from "../../config/styles";

export default class FoodDetailScreen extends React.Component {
  render() {
    const food = this.props.route.params.food;

    const onFoodDeleted = this.props.route.params.foodDeletedCallback;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            reverse
            name="ios-create"
            type="ionicon"
            onPress={() =>
              this.props.navigation.navigate("FoodForm", { food: food })
            }
          />
          <Icon
            reverse
            name="ios-trash"
            type="ionicon"
            color="#CA300E"
            onPress={() =>
              Alert.alert(
                "Delete?",
                "Cannot be undone",
                [
                  { text: "Cancel" },
                  {
                    text: "OK",
                    onPress: () => {
                      deleteFood(food, onFoodDeleted);
                    },
                  },
                ],
                { cancellable: false }
              )
            }
          />
        </View>
        <Text style={styles.headerText}>{food.name}</Text>
        <Text style={styles.categoryText}>Category: {food.category}</Text>

        <Text style={styles.ingredientText}>Ingredients</Text>
        {food.subIngredients === undefined ||
        food.subIngredients.length == 0 ? (
          <Text>None</Text>
        ) : (
          <FlatList
            data={food.subIngredients}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.ingredientItemText}>{item}</Text>
            )}
          />
        )}
      </View>
    );
  }
}
