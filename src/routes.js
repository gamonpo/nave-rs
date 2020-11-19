import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NewNaver from './pages/NewNaver';
import EditNaver from './pages/EditNaver';

function Sair({ navigation }) {
  return <>{navigation.navigate('Login')}</>;
}

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NewNaver" component={NewNaver} />
        <Stack.Screen name="EditNaver" component={EditNaver} />
        <Stack.Screen name="Sair" component={Sair} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
