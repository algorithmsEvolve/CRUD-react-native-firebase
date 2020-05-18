import React from "react";
import { Button } from "react-native";

//screens
import FoodListScreen from "./src/screens/FoodListScreen";
import FoodFormScreen from "./src/screens/FoodFormScreen";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";
import LoginScreen from "./src/screens/LoginScreen";

//react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//api
import { signout } from "./src/api/FoodsApi";

//declare navigation
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FoodList"
            component={FoodListScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  title="Log Out"
                  onPress={() =>
                    signout(() => {
                      navigation.navigate("Auth");
                    })
                  }
                />
              ),
            })}
          />
          <Stack.Screen name="Auth" component={LoginScreen} />
          <Stack.Screen
            name="FoodForm"
            component={FoodFormScreen}
            options={{ title: "Input Food" }}
          />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={({ navigation, props }) => ({
              title: "Food Details",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
