import * as React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Appbar, Button, IconButton, Colors, FAB } from 'react-native-paper';
import Navigasi from './Navigasi';
const window = Dimensions.get('window');
import firebase from '../API/firebase';

export default class MainScreen extends React.Component {
   constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

 signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('LoginScreen')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      displayEmail: firebase.auth().currentUser.displayEmail
    }
    this.props.navigation.setOptions({
      headerBackTitle: '',
      headerShown: false,
    });


    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {/* --- TITLE BAR --- */}
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            backgroundColor: '#FFF',
            width: '100%',
            alignItems: 'center',
            paddingTop: 60,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Drawers')}>
            <IconButton
              icon="menu"
              color="#f46434"
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f46434' }}>
            BNI
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Account')}>
            <IconButton
              icon="account"
              color="#f46434"
              size={20}
              onPress={() => console.log('Account')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* --- WELCOME SECTION --- */}
          <View>
            <Image
              style={{
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                width: window.width,
                height: window.height / 2.5,
              }}
              source={require('../assets/background4.png')}
            />

            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: window.height / 2.5,
                width: window.width,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
                backgroundColor: '#00000050',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#FFF',
                }}>
                Welcome : {this.state.displayName}
              </Text>
              <Text
                style={{
                  fontSize: 21,
                  color: '#FFF',
                  fontWeight: 'bold',
                }}>
              </Text>
            </View>
          </View>
          <View style={{ paddingLeft: 20, marginVertical: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Lokasi Agent:
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ marginTop: 10 }}>
              <View>
                <Image
                  style={{ height: 100, width: 120, borderRadius: 5 }}
                  source={{
                    uri:
                      'https://blogs.forbes.com/alexcapri/files/2018/09/Singapore.jpg?w=200&h=200',
                  }}
                />
                <Text
                  style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>
                  Lorem Ipsim
                </Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Image
                  style={{ height: 100, width: 120, borderRadius: 5 }}
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                  }}
                />
                <Text
                  style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>
                  Lorem Ipsum 2
                </Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Image
                  style={{ height: 100, width: 120, borderRadius: 5 }}
                  source={{
                    uri:
                      'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/new-york-hotel-pennsylvania/media/hotelpenn-homepage-01-mobileheader-5cc091eb8cc0a.jpg',
                  }}
                />
                <Text
                  style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>
                  Lorem Ipsum 3
                </Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Image
                  style={{ height: 100, width: 120, borderRadius: 5 }}
                  source={{
                    uri: 'https://static.toiimg.com/photo/63985223.cms',
                  }}
                />
                <Text
                  style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>
                  Bali boleh lah
                </Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Image
                  style={{ height: 100, width: 120, borderRadius: 5 }}
                  source={{
                    uri: 'https://static.toiimg.com/photo/65339195.cms',
                  }}
                />
                <Text
                  style={{ marginTop: 5, fontSize: 13, fontWeight: 'bold' }}>
                  Lorem Ipsum
                </Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: '#f46434',
              height: 100,
              margin: 20,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#FFF' }}>Today's offer</Text>
            <TouchableOpacity
              style={{
                paddingVertical: 7,
                paddingHorizontal: 13,
                backgroundColor: '#FFF',
                borderRadius: 30,
                marginTop: 5,
              }}>
              <Text>Check it out</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#f46434',
              height: 300,
              margin: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 200,
                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              source={{
                uri: 'https://media.nomadicmatt.com/europeresourcepage9.jpg',
              }}
            />
            <Text style={{ color: '#FFF', fontSize: 16, marginTop: 20 }}>
              Cari Agen46
              {this.state.displayEmail}
            </Text>
            <Text
              style={{
                color: '#FFF',
                backgroundColor: 'darkorange',
                fontSize: 17,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              Paris
            </Text>
          </View>
        </ScrollView>
        <FAB
          style={styles.fab}
          medium
          color="#f46434"
          backgroundColor="#f46434"
          icon="plus"
          label="Buat Agent"
          onPress={() => this.props.navigation.navigate('Buat')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
  },
});
