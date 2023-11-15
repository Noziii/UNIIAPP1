import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import CampusEvents from "./CampusEvents";
import Res from "./Res";
import LocalHotspots from "./LocalHotspots";
import RestaurantScreen from "./RestaurantScreen";
import MatrixGo from "./MatrixGo";
import CartScreen from "./CartScreen";
import OrderPreparingScreen from "./OrderingPreparingScreen";
import DeliveryScreen from "./DeliveryScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CampusEvents" component={CampusEvents} />
      <Stack.Screen name="Res" component={Res} />
      <Stack.Screen name="LocalHotspots" component={LocalHotspots} />
      <Stack.Screen name="MatrixGO" component={MatrixGo} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Cart"
        options={{ presentation: "modal" }}
        component={CartScreen}
      />
      <Stack.Screen
        name="OrderPreparing"
        options={{ presentation: "fullScreenModal" }}
        component={OrderPreparingScreen}
      />
      <Stack.Screen
        name="Delivery"
        options={{ presentation: "fullScreenModal" }}
        component={DeliveryScreen}
      />
    </Stack.Navigator>
  );
};

export default App;
