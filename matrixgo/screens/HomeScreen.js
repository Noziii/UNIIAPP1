import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import {featured}from "../constants";
import FeaturedRow from '../components/featuredRow';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />

            {/* Search bar */}
            <View style={styles.searchBar}>
                <View style={styles.searchInput}>
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput 
                        placeholder='Search' 
                        style={styles.textInput} 
                    />
                    <View style={styles.location}>
                        <Icon.MapPin height="10" width="10" stroke="gray" />
                        <Text style={styles.locationText}>WITS</Text>
                    </View>
                </View>
            </View>

            {/* Main content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                <View style={styles.featured}>
                {
            [featured, featured, featured].map ((item, index)=>{
                return(
                    
                <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
                />
                )
            })
        }
                 </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBar: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingBottom: 8,
        alignItems: 'center',
    },
    searchInput: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 12,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#d1d5db',
    },
    textInput: {
        marginLeft: 8,
        flex: 1,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 2,
        paddingLeft: 8,
        borderColor: '#d1d5db',
    },
    locationText: {
        color: '#4b5563',
    },
    scrollView: {
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    featured: {
        marginTop: 20,
        backgroundColor: 'white',
    },
});
