import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { ActivityIndicator, Drawer, Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const DrawerContent = (props) => {
    const [loading, setLoading] = useState(false);
    const Navigation = useNavigation();

    const handleLogout = async () => {
        try {
                setLoading(true);
                const jwt = await AsyncStorage.getItem("jwt")
                await AsyncStorage.removeItem(jwt);
                Navigation.reset({
                    index:0,
                    routes: [{ name: "Login"}],
                });
        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setLoading(false);
        }
    }
    return (
        <DrawerContentScrollView {...props}>
            <Drawer.Section >
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="profile" size={size} color={color} />
                    )}
                    label="Mi perfil"
                    onPress={() => { 
                        props.navigation.push('Perfil'); 
                        props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign
                            name="star"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Favoritos"
                    onPress={() => { 
                        props.navigation.push('Favoritos');
                        props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign
                            name="setting"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Configuración"
                    onPress={() => { 
                        props.navigation.push('Configuración') 
                        props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}
                />
                { loading ? (<ActivityIndicator animating={true} color="#11305D"/>) :
               (<DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign
                            name="logout"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Cerrar sesión"
                    onPress={ handleLogout }
                />)
                }
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}

export { DrawerContent };