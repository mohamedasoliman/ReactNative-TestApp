// react
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import components
import Home from './src/components/Home';
import AlbumList from './src/components/AlbumList';
import Album from './src/components/Album';

// main app
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={Home} />
        <Stack.Screen name="User's Albums" component={AlbumList} />
        <Stack.Screen name="Album" component={Album} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});