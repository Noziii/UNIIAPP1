import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";

class CampusEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      events: {
        "2023-11-01": [{ name: "WITS Freshers", time: "10:00 AM" }],
        "2023-11-20": [{ name: "De-Stress Zone", time: "2:00 PM" }],
        "2023-11-15": [{ name: "SANB (Blood Drive)", time: "11:30 AM" }],
        "2023-11-16": [{ name: "Checkers giveaway", time: "3:30 PM" }],
      },
    };
  }

  handleDayPress = (date) => {
    const selectedEvents = this.state.events[date.dateString];
    this.setState({ selectedDate: date, selectedEvents });
  };

  render() {
    const markedDates = {};
    Object.keys(this.state.events).forEach((date) => {
      markedDates[date] = { marked: true, dotColor: "#75a9f9" };
    });

    return (
      <ScrollView style={styles.container}>
        <Calendar
          onDayPress={(day) => this.handleDayPress(day)}
          markedDates={{
            ...markedDates,
            [this.state.selectedDate?.dateString]: {
              selected: true,
              selectedColor: "orange",
            },
          }}
          theme={{
            calendarBackground: "white",
            selectedDayBackgroundColor: "orange",
          }}
          style={{
            borderRadius: 3,
            height: 380,
            margin: 3,
          }}
        />
        {this.state.selectedDate && (
          <View style={styles.eventContainer}>
            <Text style={styles.selectedDate}>
              {this.state.selectedDate.dateString}
            </Text>
            <Text style={styles.eventText}>Events:</Text>
            {this.state.selectedEvents &&
              this.state.selectedEvents.map((event, index) => (
                <View key={index} style={styles.eventCard}>
                  <Text style={styles.eventName}>{event.name}</Text>
                  <Text style={styles.eventTime}>{event.time}</Text>
                </View>
              ))}
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75a9f9",
    borderRadius: 8,
  },
  eventContainer: {
    backgroundColor: "white",
    padding: 16,
    margin: 13,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventCard: {
    marginBottom: 8,
  },
  eventName: {
    fontSize: 16,
  },
  eventTime: {
    fontSize: 14,
    color: "gray",
  },
});

export default CampusEvents;
