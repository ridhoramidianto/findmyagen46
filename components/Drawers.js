import * as React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { Appbar, Button, IconButton, Colors } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
const window = Dimensions.get('window')


export default class Drawers extends React.Component{

    render(){
        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false
        })

        return(
            <View 
                style={{flex: 1,  
                backgroundColor: '#fff'}}>

                {/* --- TITLE BAR --- */}
                <View 
                    style={{ flexDirection: 'row',  
                    alignItems: 'center', 
                    paddingTop: 60, 
                    paddingHorizontal: 10, 
                    justifyContent: 'space-between' }}>
                    <Text 
                        style={{ fontSize: 30, fontWeight: 'bold', color:'#f46434'}}>
                        
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <IconButton
                        icon="close"
                        color='#f46434'
                        size={30}
                        onPress={() => console.log('Close')}
                      />
                    </TouchableOpacity>
                </View>
                                <View 
                    style={{ flexDirection: 'row',  
                    height: 50, 
                    alignItems: 'center', 
                    paddingTop: 0, 
                    paddingHorizontal: 20, 
                    justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ListDaftar')}>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color:'#f46434'}}>
                        Daftar Pertemuan
                    </Text>
                    </TouchableOpacity>
                </View>
                    <View 
                    style={{ flexDirection: 'row',  
                    height: 50,  
                    alignItems: 'center', 
                    paddingTop: 0, 
                    paddingHorizontal: 20, 
                    justifyContent: 'space-between' }}>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color:'#f46434'}}>
                        Riwayat
                    </Text>
                </View>
                <View 
                    style={{ flexDirection: 'row',  
                    height: 50,  
                    alignItems: 'center', 
                    paddingTop: 0, 
                    paddingHorizontal: 20, 
                    justifyContent: 'space-between' }}>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color:'#f46434'}}>
                        Tentang
                    </Text>
                </View>
                <View 
                    style={{ flexDirection: 'row',  
                    height: 50,  
                    alignItems: 'center', 
                    paddingTop: 0, 
                    paddingHorizontal: 20, 
                    justifyContent: 'space-between' }}>
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color:'#f46434'}}>
                        FAQ
                    </Text>
                </View>

                <ScrollView>

                {/* --- WELCOME SECTION --- */}
                
                <View
                    style={{ paddingLeft: 20, marginVertical: 20 }}
                >
                </View>

                

          

                </ScrollView>


            </View>

        )
    }
}