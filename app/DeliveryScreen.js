import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

class DeliveryScreen extends Component {
  render() {
    const navigation = useNavigation();
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

        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            marginTop: -12,
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: "gray", fontWeight: "bold" }}>
              Estimated prep time
            </Text>
            <Text style={{ fontSize: 30, color: "gray", fontWeight: "bold" }}>
              15-20 Minutes
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginRight: 3,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ backgroundColor: "white", padding: 8, borderRadius: 50 }}
            >
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default DeliveryScreen;
