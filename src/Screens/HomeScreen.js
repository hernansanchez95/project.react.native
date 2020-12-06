import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home</Text>
            <Button
                onPress={() => { navigation.navigate("Carrito") }}
                style={styles.shoppingCartButton} >
                <AntDesign name="shoppingcart" size={30} color="#F2DEDE" />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    shoppingCartButton: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#AB6F6F',
        position: 'absolute',
        top: 630,
        right: 15,
    },
    shoppingcart: {
        zIndex: 2,
    }
})
