import * as React from 'react'
import { View, Dimensions, Image, SafeAreaView, StyleSheet, TextInput, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker'
import {
  Colors,
  IconButton,
  Button,
  Appbar,
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
const window = Dimensions.get('window')


export default class Berhasil extends React.Component{
 constructor(props){
    super(props)
  }

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
                        onPress={()=> this.props.navigation.navigate('MainScreen') }>
                        <IconButton
                        icon="arrow-left"
                        color={Colors.blue500}
                        size={25}
                        onPress={() => console.log('Pressed')}
                      />
                    </TouchableOpacity>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color:"#1976d2", alignItems:'center'}}>
                        Berhasil
                    </Text>
                     <TouchableOpacity
                        onPress={() => alert('Info dipencet')}>
                        <IconButton
                        icon="information-outline"
                        color={Colors.blue500}
                        size={20}
                        onPress={() => console.log('Pressed')}
                      />
                    </TouchableOpacity>
                </View>

         <Image
          style={{ width:"100%", height: 300 }}
          source={require('../assets/berhasil.png')}
          resizeMode="contain"
        />


      <View style={styles.userInfoSection2}>
        <View>
        <Text style={{textAlign:'center'}}>
        <Title>Selamat! Pertemuan anda berhasil dibuat.</Title>
        {"\n"}
        </Text>
        </View>
        <View style={{alignItems:'center'}}>
        </View>
        <View style={{alignContent:'stretch'}}>
        <Text  style={{textAlign:'center'}}>Untuk melihat pertemuan, klik tombol Daftar Pertemuan</Text>
         <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('ListDaftar') }
            style={{ backgroundColor: '#0d47a1', padding: 10, width:'auto', borderRadius: 30, marginHorizontal: 2, marginTop:'10%' }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Daftar Pertemuan</Text>
          </TouchableOpacity>     
        </View>
      </View>

    </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection2: {
    paddingHorizontal: 30,
    marginBottom: 25,
    textAlign: "center"
  },
});