import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  Scroll,
  Alert,
  ActivityIndicator
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import firebase from '../API/firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    this.setState = this.state.displayEmail
    this.setState = displayEmail.errMsg('Email tidak ditemukan')
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
      set.Alert = this.state(props.navigate)
    } else {
      this.setState({
        isLoading: false,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('MainScreen')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
      if(this.state.isLoading){
      return(
      <View style={styles.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E"/>
      </View>
      )
    }   
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ fontSize: 25, marginTop: 20 }}>Silahkan Masuk </Text>
          <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>
            Masuk untuk melanjutkan
          </Text>

          <Animatable.View ref={this.validateInput}>
             <TextInput
          style={{
                  marginTop: 40,
                  borderBottomColor: '#ddd',
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                }}
          placeholder="Email"
          onPress={Keyboard.dismiss}
          maxLength={15}
          minLength={8}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
           />

            <TextInput
              style={{
                marginTop: 40,
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                paddingBottom: 20,
              }}
              placeholder="Password"
              maxLength={15}
              minLength={8}
              secureTextEntry={true}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
            />
            <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>
              {this.state.errMsg}
            </Text>
          </Animatable.View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <TouchableOpacity
              onPress={() => this.userLogin()}
              onSubmitEditing={Keyboard.dismiss}
              style={{
                width: 200,
                backgroundColor: '#f46434',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                marginTop: 30,
              }}>
              <Text
                style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 20 }}>Belum punya akun ?</Text>

            <View style={{ flexDirection: 'row', marginTop: 60 }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                  backgroundColor: '#3f51b5',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>
                  f
                </Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                  backgroundColor: '#f44336',
                  marginHorizontal: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>
                  G
                </Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                  backgroundColor: '#1565c0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>
                  in
                </Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
});

const Verify = () => {
  const [text, setText] = React.useState('');

  const onChangeText = (text) => setText(text);

  const hasErrors = () => {
    return !text.includes("`~!@#$%^&*()?\|)");
  };
};
