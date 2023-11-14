import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { featured } from "./constants";
import { themeColors } from "./theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

class CartScreen extends Component {
  render() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/*back button*/}
        <View
          style={{
            position: "relative",
            paddingVertical: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: themeColors.bgColor(1),
              position: "absolute",
              borderRadius: 999,
              padding: 4,
              top: 5,
              left: 8,
              zIndex: 10,
            }}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
          <View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
            >
              Your cart
            </Text>
            <Text style={{ textAlign: "center", color: "gray" }}>
              {restaurant.name}
            </Text>
          </View>
        </View>
        {/*prep/delivery time*/}
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.2),
            flexDirection: "row",
            padding: 16,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/images/pizzaIcon.png")}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text style={{ flex: 1, paddingLeft: 16 }}>
            Prep time: 15-20 minutes
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: themeColors.text }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>

        {/*dishes*/}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          style={{ backgroundColor: "white", paddingTop: 10 }}
        >
          {restaurant.dishes.map((dish, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  marginBottom: 6,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}
              >
                <Text style={{ fontWeight: "bold", color: themeColors.text }}>
                  2x
                </Text>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 35 }}
                  source={dish.image}
                />
                <Text style={{ flex: 1, fontWeight: "bold", color: "#47525E" }}>
                  {dish.name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  R{dish.price}
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 8,
                    borderRadius: 999,
                    backgroundColor: themeColors.bgColor(1),
                  }}
                >
                  <Icon.Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke="white"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        {/*totals*/}
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.2),
            padding: 16,
            paddingHorizontal: 24,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray" }}>Subtotal</Text>
            <Text style={{ color: "gray", fontWeight: "bold" }}>R20</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderPreparing")}
              style={{
                backgroundColor: themeColors.bgColor(1),
                padding: 12,
                borderRadius: 999,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CartScreen;
