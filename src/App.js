import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import StackNav from './Navigation/StackNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <PaperProvider>
          <StackNav/>
        </PaperProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);