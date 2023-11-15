import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { categories } from '../constants';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                {categories.map((category, index) => {
                    let isActive = category._id === activeCategory;
                    return (
                        <View key={index} style={styles.categoryContainer}>
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category._id)}
                                style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
                            >
                                <Image 
                                    style={styles.image}
                                    source={category.image} 
                                />
                            </TouchableOpacity>
                            <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>
                                {category.name}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    scrollView: {
        paddingHorizontal: 15,
    },
    categoryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24,
    },
    button: {
        padding: 4,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    activeButton: {
        backgroundColor: 'gray', // Adjust the color as needed
    },
    inactiveButton: {
        backgroundColor: 'lightgray', // Adjust the color as needed
    },
    image: {
        width: 45,
        height: 45,
    },
    text: {
        fontSize: 12,
        marginTop: 4,
    },
    activeText: {
        fontWeight: 'bold',
        color: 'gray', // Adjust the color as needed
    },
    inactiveText: {
        color: 'black', // Adjust the color as needed
    }
});
