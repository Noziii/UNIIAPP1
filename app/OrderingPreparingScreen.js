import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

class OrderPreparingScreen extends Component {
  componentDidMount() {
    const navigation = useNavigation();
    setTimeout(() => {
      // Move to the delivery screen
      navigation.navigate("Delivery");
    }, 5000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/images/cooking-min.gif")}
          style={{ height: 80, width: 80 }}
        />
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          Preparing Order...
        </Text>
      </View>
    );
  }
}

export default OrderPreparingScreen;
