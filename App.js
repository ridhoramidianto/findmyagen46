 import * as React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import Drawers from './components/Drawers';
import Account from './components/Account';
import Buat from './components/Buat';
import Berhasil from './components/Berhasil';
import ListDaftar from './components/ListDaftar';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Masuk" component={LoginScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="Drawers" component={Drawers} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Buat" component={Buat} />
            <Stack.Screen name="Berhasil" component={Berhasil} />
            <Stack.Screen name="ListDaftar" component={ListDaftar}
            screenOptions={{
            headerShown: false,
            headerVisible: false
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF'
  }
})