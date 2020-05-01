// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CheckAuth from './src/screen/CheckAuth'
import Login from './src/screen/Login'
import Register from './src/screen/Register'
import Home from './src/screen/Home'

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return(
    <MainStack.Navigator>
      <MainStack.Screen 
          name="Home" 
          component={Home}
          options={{
            
          }} />
    </MainStack.Navigator>
  )
}


function AuthStackScreen() {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown : false
          }} />
      <AuthStack.Screen 
          name="Register"
          component={Register}
          options={{
            headerShown : false
          }} />
    </AuthStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="CheckAuth"
          component={CheckAuth}
          options={{headerShown:false}}
        />
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{headerShown:false}}
        />
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown:false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;