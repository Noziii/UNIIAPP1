import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation} from '@react-navigation/native';

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant',{item})}>
            <View style={styles.card}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.row}>
                        <Image source={require('../assets/images/fullStar.png')} style={styles.starIcon} />
                        <Text style={styles.reviewText}>
                            <Text style={styles.stars}>{item.stars}</Text>
                            <Text style={styles.reviewCount}> ({item.reviews} reviews)</Text>
                        </Text>
                    </View>
                    <View style={styles.addressRow}>
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text style={styles.address}>Nearby . {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        marginRight: 24,
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: themeColors.bgColor(0.2),
        shadowRadius: 7,
        shadowOpacity: 1,
        elevation: 3,
    },
    image: {
        height: 144, // Adjust as needed
        width: 256, // Adjust as needed
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    content: {
        padding: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    starIcon: {
        height: 16,
        width: 16,
    },
    reviewText: {
        fontSize: 12,
        marginLeft: 4,
    },
    stars: {
        color: '#38b000',
    },
    reviewCount: {
        color: '#4a4a4a',
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    address: {
        color: 'black',
        fontSize: 12,
        marginLeft: 4,
    },
    // Add other styles as needed
});
