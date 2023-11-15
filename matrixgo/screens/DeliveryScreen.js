import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

export default function DeliveryScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/images/prep.gif')} 
            style={styles.image} 
        />

        <Text style={styles.heading}>Preparing Order...</Text>

        <View style={styles.card}>
            <View style={styles.estimatedTimeContainer}>
                <Text style={styles.estimatedTimeText}>
                    Hang in there, we're making your oder now!
                </Text>
                
                <Text style={styles.estimatedTime}>
                    Estimated prep time: 15-20 Minutes
                </Text>
            </View>
  
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 320,
    width: 320,
  },
  heading: {
    color: '#4a4a4a',
    fontWeight: '800',
    fontSize: 18,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: -48,
    width: '100%',
    position: 'relative',
  },
  estimatedTimeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  estimatedTimeText: {
    fontSize: 25,
    color: '#4a4a4a',
    fontWeight: '600',
    textAlign: 'center'
  },

  estimatedTime: {
    paddingTop:15,
    fontSize: 18,
    color: '#4a4a4a',
    fontWeight: '400',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    top: -20,
  },
});
