import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function CartIcon() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Cart')}
                style={[styles.button, { backgroundColor: themeColors.bgColor(1) }]}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.quantity}>
                        3
                    </Text>
                    <Text style={styles.text}>
                        View Cart
                    </Text>
                    <Text style={styles.price}>
                        R{23}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        position: 'relative',
        bottom: -600,
        width: '100%',
        Index: 20,
        alignItems: 'center',
    },
    button: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 25,
        padding: 12,
        paddingVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 25,
    },
    quantity: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
    },
    text: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
    },
    price: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
    }
});
