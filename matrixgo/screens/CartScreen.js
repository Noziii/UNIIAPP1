import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { featured } from '../constants';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            

            {/* Prep/Delivery Time */}
            <View style={[styles.prepTime, { backgroundColor: themeColors.bgColor(0.2) }]}>
                <Image source={require('../assets/images/clock.png')} style={styles.clockIcon} />
                <Text style={styles.prepText}>Prep time: 15-20 minutes</Text>
                <TouchableOpacity>
                    <Text style={[styles.changeText, { color: themeColors.text }]}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Dishes */}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.dishesContainer}
            >
                {restaurant.dishes && restaurant.dishes.map((dish, index) => (
                    <View key={index} style={styles.dishItem}>
                        <Text style={[styles.quantity, { color: themeColors.text }]}>2x</Text>
                        <Image style={styles.dishImage} source={dish.image} />
                        <Text style={styles.dishName}>{dish.name}</Text>
                        <Text style={styles.dishPrice}>R{dish.price}</Text>
                        <TouchableOpacity style={[styles.minusButton, { backgroundColor: themeColors.bgColor(1) }]}>
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.PlusButton, { backgroundColor: themeColors.bgColor(1) }]}>
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Totals */}
            <View style={[styles.totals, { backgroundColor: themeColors.bgColor(0.2) }]}>
                <View style={styles.subtotalRow}>
                    <Text style={styles.subtotalText}>Subtotal</Text>
                    <Text style={styles.subtotalAmount}>R20</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Order Received')}
                    style={[styles.placeOrderButton, { backgroundColor: themeColors.bgColor(1) }]}
                >
                    <Text style={styles.placeOrderText}>
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        // Styles for the header
    },
    // Other styles...

    /* Prep/Delivery Time */

    prepTime:{
        justifyContent: 'space-evenly',
        flex: 'row',
        flexDirection: 'row',
        padding: 20,
    },

    prepText:{
       justifyContent: 'flex-start',
       marginLeft: 20,
       paddingTop: 10,
       fontWeight: '500',
    },

    changeText:{
        justifyContent: 'flex-end',
        marginLeft: 80,
        paddingTop: 15,
        fontWeight: 'bold'
    },

    clockIcon: {
        width: 30,
        height: 30,
        paddingTop: 10,
    },

    /* Totals */
    totals:{
        justifyContent: 'flex-end',
        padding: 30,
        border: 'rounded',
        borderRadius: 10,
        height: '500',
    },

    subtotalRow:{
flexDirection: "row",
justifyContent: 'space-between',
    },

subtotalAmount:{
justifyContent: "flex-end",
fontSize: 20,
fontWeight: 'bold',
alignItems: 'flex-end'
},

subtotalText:{
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    justifyContent: 'flex-start'
},

minusButton:{
    flexDirection: 'row',
    borderRadius: 50,
},

PlusButton:{
    flexDirection: 'row',
    borderRadius: 50,
},

placeOrderButton:{
    width: '30',
    borderRadius: 50,
},

placeOrderText:{
    fontSize: 20,
    paddingTop: 25,
    paddingBottom: 25,
    textAlign: 'center',
    color: 'white',
},

/* Dishes */

dishesContainer:{
    flexDirection: 'column',
    backgroundColor: 'white'
},

quantity:{
    paddingTop: 2,
    fontWeight: 'bold'
},

dishItem:{
justifyContent:'space-evenly',
flexDirection: 'row',
paddingTop: 20,
marginTop: 25,
marginBottom: 5,
backgroundColor: 'white',
borderRadius: 10,
shadowColor: 'lightgray',
shadowOpacity: 50,
elevation: 7,
alignItems: 'center'
},

dishImage:{
    width: 100,
    height: 100,
    borderRadius: 50,
},

dishName:{
justifyContent: 'flex-start',
flex: 'row'
},

dishPrice:{
justifyContent: 'flex-start',
flexDirection:'column',
fontWeight: '700',
paddingTop: 50,
},

});