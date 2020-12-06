import React, { useEffect, useState } from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Details from '../Screens/Details';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './DrawerNav';
import Favs from '../Screens/Favs';
import Header from '../Components/Header';
import ShoppingCart from '../Screens/ShoppingCart';
import Login from '../Screens/Login';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function StackNav() {
  const [loading, setLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState('Login');

  useEffect(() => {
    const getToken = async () => {
      const jwt = await AsyncStorage.getItem("jwt");
      if(jwt){
        setInitialRouteName("Home");
      }
      setLoading(false);
    };
    getToken();
  }, [])

  if(loading) return (
    <SafeAreaView>
      <ActivityIndicator animating={true} color="#11305D"/>
    </SafeAreaView>
  )
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}
        headerMode="screen"
        screenOptions={{
          header: ({ scene, previous, navigation }) => (
            <Header scene={scene} previous={previous} navigation={navigation} />
          ),
        }}
        >
        <Stack.Screen name="Login" component={Login} options={{headerTitle:'Login'}}/>
        <Stack.Screen name="Home" component={DrawerNav} options={{headerTitle:'Home'}} />
        <Stack.Screen name="Detalles" component={Details} options={{headerTitle:'Detalles'}}/>
        <Stack.Screen name="Perfil" component={Profile} options={{headerTitle:'Perfil'}}/>
        <Stack.Screen name="Configuración" component={Settings} options={{headerTitle:'Configuración'}}/>
        <Stack.Screen name="Favoritos" component={Favs} options={{headerTitle:'Favoritos'}}/>
        <Stack.Screen name="Carrito" component={ShoppingCart} options={{headerTitle:'Carrito'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
