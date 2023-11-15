import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function DishRow({ item }) {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={item.image} 
            />
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.price}>
                         R{item.price}
                    </Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={[styles.iconButton, { backgroundColor: themeColors.bgColor(1) }]}>
                            <Icon.Minus strokeWidth={2} height={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>
                            {2} {/* Assuming quantity is hard-coded here */}
                        </Text>
                        <TouchableOpacity style={[styles.iconButton, { backgroundColor: themeColors.bgColor(1) }]}>
                            <Icon.Plus strokeWidth={2} height={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 12,
        marginHorizontal: 8,
    },
    image: {
        borderRadius: 30,
        height: 10,
        width: 10,
    },
    content: {
        flex: 1,
        marginLeft: 12,
    },
    textContainer: {
        paddingLeft: 12,
    },
    name: {
        fontSize: 20,
    },
    description: {
        color: '#4a4a4a',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
    },
    price: {
        color: '#4a4a4a',
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: 8,
        borderRadius: 50,
    },
    quantity: {
        paddingHorizontal: 12,
    }
});
