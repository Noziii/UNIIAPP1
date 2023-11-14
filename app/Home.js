import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require("./images/homeback.jpg")}
      style={styles.background}
    >
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("Res")}
        >
          <Icon name="home" size={25} color="black" alignItems="center" />
          <Text style={styles.buttonText}>Accommodation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("CampusEvents")}
        >
          <Icon name="calendar" size={25} color="black" />
          <Text style={styles.buttonText}>Campus Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("LocalHotspots")}
        >
          <Icon name="wine" size={25} color="black" alignItems="center" />
          <Text style={styles.buttonText}>Local Hotspots</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("MatrixGo")}
        >
          <Icon name="pizza" size={25} color="black" alignItems="center" />
          <Text style={styles.buttonText}>Matrix Go</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("WitsMap")}
        >
          <Icon name="location" size={25} color="black" alignItems="center" />
          <Text style={styles.buttonText}>WITS Map</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  button: {
    backgroundColor: "white",
    padding: 25,
    margin: 10,
    marginTop: 25,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  buttonText: {
    color: "black",
    marginLeft: 50,
    fontWeight: "bold",
  },
});

export default Home;
