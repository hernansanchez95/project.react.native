import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import BottomTabs from './BottomTabs';

const DrawerN = createDrawerNavigator();

export default function DrawerNav() {
    return (
            <DrawerN.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <DrawerN.Screen name="Tienda" component={BottomTabs}/>
            </DrawerN.Navigator>
    )
}