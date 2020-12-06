import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Notifications from '../Screens/Notifications';
import Messages from '../Screens/Messages';
import HomeScreen from '../Screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tienda"
      backBehavior="initialRoute"
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={styles.tab}
    >
      <Tab.Screen
        name="Tienda"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name='shop'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={Notifications}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name="Mensajes"
        component={Messages}
        options={{
          tabBarIcon: 'message-text-outline',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#6DC7EB",
  }
})
// #11305D