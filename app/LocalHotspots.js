import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
  {
    id: "1",
    name: "Restaurant 1",
    distance: "2 miles",
    rating: "4.5",
    type: "Italian",
    image: require("./images/Kitcheners.jpg"),
  },
  {
    id: "2",
    name: "Restaurant 2",
    distance: "3 miles",
    rating: "4.0",
    type: "Mexican",
    image: require("./images/ThePlayground.jpg"),
  },
  // Add more data as needed
];

const iconData = [
  { id: "1", icon: "pizza" },
  { id: "2", icon: "wine" },
  { id: "3", icon: "beer" },
  { id: "4", icon: "fast-food" },
  // Add more icons as needed
];

class Card extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart" size={20} color="red" />
        </TouchableOpacity>
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>{item.distance}</Text>
          <Text>Rating: {item.rating}</Text>
          <Text>Type: {item.type}</Text>
        </View>
      </View>
    );
  }
}

class IconCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.iconCard}>
        <Icon name={item.icon} size={30} color="black" />
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={iconData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <IconCard item={item} />}
            horizontal
          />
        </ScrollView>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card item={item} />}
          vertical
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  cardDetails: {
    padding: 10,
    backgroundColor: "white",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  iconCard: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
});

export default App;
