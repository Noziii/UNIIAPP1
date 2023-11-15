import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { themeColors } from '../theme';
import RestaurantCard from './restaurantCard';

export default function FeaturedRow({ title, description, restaurants }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={[styles.seeAll, {color: themeColors.text}]}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard
                        item={restaurant}
                        key={index}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // Add container styles here
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        // Add more title styles here
    },
    description: {
        color: '#6b7280', // Example color, adjust as needed
        fontSize: 12,
        // Add more description styles here
    },
    seeAll: {
        fontWeight: '600',
        // Add more see all styles here
    },
    scrollView: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    // Add other styles as needed
});
