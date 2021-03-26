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


export default class Buat extends React.Component{
 constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
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
                        Tambahkan Agent46
                    </Text>
                     <TouchableOpacity
                        onPress={() => alert('Info button di pencet')}>
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
          source={require('../assets/buat.png')}
          resizeMode="contain"
        />


      <View style={styles.userInfoSection}>
        <View style={{alignContent:'center', alignItems:'center'}}>
        <Text>
        <Title>Masukkan data Agen46</Title>
        {"\n"}
        </Text>
        </View>
        <View style={{alignItems:'center'}}>
        </View>
        <View style={{alignItems:'center', alignContent:'stretch'}}>
         <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('Berhasil') }
            style={{ backgroundColor: '#0d47a1', padding: 10, width:150, borderRadius: 30, marginHorizontal: 2, marginTop:'10%' }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Buat</Text>
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
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
});