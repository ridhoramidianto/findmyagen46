import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class HomeScreen extends React.Component {

    render(){

        this.props.navigation.setOptions({ 
            headerBackTitle: '',
            headerShown: false ,
        })

        return(
          <View style={styles.fll}>
          <ScrollView style={{textAlign: 'center'}}>
            <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200, marginTop: '20%' }}
          source={require('../assets/a.png')}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: '20%'}} >Selamat Datang!</Text>
        <Text style={{ fontSize: 16, color: 'gray', marginHorizontal: 20 }} >
        Terima Kasih! sudah menjadi nasabah setia BNI. Nikmati kemudahan dari gengaman anda.
        </Text>
       

        <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('Masuk') }
            style={{ backgroundColor: '#f46434', padding: 10, width:150, borderRadius: 30, marginHorizontal: 2 }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Lanjutkan</Text>
          </TouchableOpacity>     
        </View>

        <Text style={{ fontSize: 16, marginTop: 10 }}>Temukan kami</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
          </View>
          <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
          </View>
          <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
          </View>
        </View>

      </View>
      </ScrollView>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 50,
    },
    fll: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})

