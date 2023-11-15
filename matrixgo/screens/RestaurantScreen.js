import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';

export default function RestaurantScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    
    return (
        <View>
            <CartIcon />
            <StatusBar barStyle="light-content" />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.image} />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.restaurantName}>{item.name}</Text>
                        {/* Additional Details */}
                    </View>
                </View>
                <View style={styles.menuContainer}>
                    <Text style={styles.menuTitle}>Menu</Text>
                    {/* Dishes */}
                    {
                    item && item.dishes && item.dishes.map((dish, index) => 
                    <DishRow item={{ ...dish }} key={dish.id || index} />
                     )
                     }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    // Define your styles here
    imageContainer: {
        // styles for image container
    },
    image: {
        // styles for image
    },
    goBackButton: {
        // styles for go back button
    },
    infoContainer: {
        // styles for info container
    },
    textContainer: {
        // styles for text container
    },
    restaurantName: {
        // styles for restaurant name
    },
    menuContainer: {
        // styles for menu container
        fontSize: '14',
        backgroundColor: 'lightgray'
    },
    menuTitle: {
        // styles for menu title
        fontSize: 30,
        fontWeight: '600',

    },
    // ... other styles
});
