import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
  {
    id: "1",
    name: "The Wing Republic",
    rating: "4.2  (1,3k)",
    type: "Bar",
    distance: "6 De Beer St, Braamfontein",
    image: require("./images/Wingrepublic.jpg"),
    website: "https://thewingrepublic.co.za/",
  },
  {
    id: "2",
    name: "The Playground",
    rating: "4.0  (1,2k)",
    type: "Market",
    distance: "73 Juta St, Braamfontein",
    image: require("./images/ThePlayground.jpg"),
    website: "https://www.theplayground.co.za/",
  },

  {
    id: "3",
    name: "Saigon Suzy",
    rating: "4.3  (1,5k)",
    type: "Vietnamese restaurant",
    distance: "144 Jan Smuts  Ave, Parkwood",
    image: require("./images/Suzy.jpg"),
    website: "https://saigonsuzy.co.za/",
  },

  {
    id: "4",
    name: "Uncle Faouzi",
    rating: "4.0 (1,1k)",
    type: "Fast food restaurant",
    distance: "73 Juta St, Braamfontein",
    image: require("./images/Uncle.jpg"),
    website: "https://unclefaouzi.co.za/",
  },

  {
    id: "5",
    name: "Sumo Nightclub",
    rating: "4.0 (1k)",
    type: "Night club",
    distance: "160 Jan Smuts Ave, Rosebank",
    image: require("./images/Sumo.jpg"),
    website: "https://sumoclub.co.za/",
  },
];

const iconData = [
  { id: "1", icon: "pizza", label: "Pizza", bgColor: "lightblue" },
  { id: "2", icon: "wine", label: "Wine", bgColor: "lightgreen" },
  { id: "3", icon: "beer", label: "Beer", bgColor: "lightcoral" },
  { id: "4", icon: "fast-food", label: "Burgers", bgColor: "lightsalmon" },
  { id: "5", icon: "ice-cream", label: "Desert", bgColor: "lightcyan" },
  {
    id: "6",
    icon: "ios-musical-notes",
    label: "Groove",
    bgColor: "lightyellow",
  },
];

class Card extends Component {
  handleCardPress = () => {
    const { item } = this.props;
    if (item.website) {
      Linking.openURL(item.website);
    }
  };
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.handleCardPress} style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart" size={20} color="red" />
        </TouchableOpacity>
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>
            {item.rating} <Icon name="star" size={15} color="orange" />
          </Text>
          <Text> {item.type}</Text>
          <Text>
            <Icon name="location" size={15} color="grey" />
            {item.distance}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class IconCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={[styles.iconCard, { backgroundColor: item.bgColor }]}>
        <Text style={styles.iconLabel}>{item.label}</Text>
        <Icon name={item.icon} size={30} color="black" />
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {iconData.map((item) => (
              <IconCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card item={item} />}
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
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  cardImage: {
    width: "100%",
    height: 150,
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
    backgroundColor: "#eeeeee",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  iconContainer: {
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 20,
    backgroundColor: "#e7e7e7",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
  },
  iconCard: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 5,
    borderRadius: 10,
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
  iconLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default App;
