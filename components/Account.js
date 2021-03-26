import * as React from 'react'
import { View, Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Colors,
  IconButton,
  Button,
  Appbar,
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
const window = Dimensions.get('window')

const logout = () => {
    this.props.authLogout() // redux nya panggil
    this.setState({}) // state dikosong
}

export default class Account extends React.Component{

    render(){
        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false
        })

        return(
            <SafeAreaView style={styles.container}>
<View 
                    style={{ flexDirection: 'row',  
                    height: 100, 
                    width: '100%', 
                    alignItems: 'center', 
                    paddingTop: 60, 
                    paddingHorizontal: 20, 
                    justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.goBack() }>
                        <IconButton
                        icon="arrow-left"
                        color={Colors.blue500}
                        size={25}
                        onPress={() => console.log('Pressed')}
                      />
                    </TouchableOpacity>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color:"#1976d2", alignItems:'center'}}>
                        Akun
                    </Text>
                     <TouchableOpacity
                        onPress={() => alert('Icon Informasi di tekan')}>
                        <IconButton
                        icon="information-outline"
                        color={Colors.blue500}
                        size={20}
                      />
                    </TouchableOpacity>
                </View>
                <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Ridho Ramidianto</Title>
            <Caption style={styles.caption}>@udahdo</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#0d47a1" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Pekanbaru, Indonesia</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#0d47a1" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+6282167472909</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#0d47a1" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>ramidiantoridho@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>$140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#0d47a1" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card-outline" color="#0d47a1" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#0d47a1" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#0d47a1" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={(logout) => this.props.navigation.navigate('Masuk')}>
          <View style={styles.menuItem}>
            <Icon name="info" color="#0d47a1" size={25}/>
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
      </ScrollView>
    </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});