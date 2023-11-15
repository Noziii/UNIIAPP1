import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Move to delivery screen
      navigation.navigate('Preparing Order');
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/images/7efs.gif')} 
            style={styles.image} 
        />

        <Text style={styles.text}>We got your order!</Text>
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
    height: 320, // Adjust according to your needs
    width: 320, // Adjust according to your needs
  },
  text: {
    color: '#4a4a4a',
    fontWeight: '800',
    fontSize: 18,
  }
});
