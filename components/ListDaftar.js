import React, { useState, useCallback, useEffect } from 'react';
import Axios from 'axios';
import { View, Dimensions, Image, SafeAreaView, StyleSheet, TextInput, Text, Alert, RefreshControl } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker'
import {
  Colors,
  IconButton,
  Button,
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import {  TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
const window = Dimensions.get('window')


export default function ListDaftar(){
const [refreshing, setRefreshing] = useState(false);
const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results);
      setRefreshing(false);
    });
  }, []);

        return(
            <SafeAreaView style={styles.container}>

         <Image
          style={{ width:"100%", height: 100 }}
          source={require('../assets/list.png')}
          resizeMode="contain"
        />


 <SafeAreaView
      options={{headerShown: false}}
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} options={{headerShown: false}}/>
      }
    >
      {users.map((user) => (
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => {
            Alert.alert(
              `Berikan si : ${user.name.first} ${user.name.last}`,
              `Rating : ${user.phone}`
            );
          }}
        >
          <Image
            style={styles.userImage}
            source={{ uri: user.picture?.large }}
          />
          <View style={styles.userCardRight}>
            <Text
              style={{ fontSize: 18, fontWeight: '500', color: '#000' }}
            >{`${user.name.first} ${user.name.last}`}</Text>
            <Text style={{ color: '#000' }}>{`${user?.phone}`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>

    </SafeAreaView>

        )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1},
  userCard: {
    backgroundColor: '#fff',
    color:'#000',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
});