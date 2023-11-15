import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import CampusEvents from "./CampusEvents";
import Res from "./Res";
import LocalHotspots from "./LocalHotspots";
import HomeScreen from "../matrixgo/screens/HomeScreen";
import RestaurantScreen from "../matrixgo/screens/RestaurantScreen";
import CartScreen from "../matrixgo/screens/CartScreen";
import OrderPreparingScreen from "../matrixgo/screens/OrderPreparingScreen";
import DeliveryScreen from "../matrixgo/screens/DeliveryScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CampusEvents" component={CampusEvents} />
      <Stack.Screen name="Res" component={Res} />
      <Stack.Screen name="LocalHotspots" component={LocalHotspots} />
      <Stack.Screen name="MatrixGo" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
              <Stack.Screen name="Order Received" options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen} />
              <Stack.Screen name="Preparing Order" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
    </Stack.Navigator>
  );
};

export default App;
