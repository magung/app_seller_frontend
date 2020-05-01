import React, {Component} from 'react'
import Axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, AsyncStorage, Image, ActivityIndicator, Button } from 'react-native';

class Login extends Component {
    state = {
        email : '',
        password : '',
        loggedIn : false
      }

      handleSubmit = async (email, password) => {
        if(!email){
            Alert.alert('Alert', 'Email is required')
        } else if(!password){
            Alert.alert('Alert', 'Password is required')
        } else {
          this.setState({loggedIn : true})
          const data = {
            email : email,
            password : password
          }
          let url = "http://10.0.2.2:3000"
          await Axios.post(`${url}/user/login`, data)
          // await this.props.dispatch(login(data))
              .then(async res => {
                    // console.log(res)
                    if(res.data.status == 200) {
                      let user = {
                        user_id : res.data.data.user_id
                      }
                      let setdata = [
                        ["user_data", JSON.stringify(user)],
                        ["token", res.data.token]
                      ]
                      await AsyncStorage.multiSet(setdata, (err) => {
                        this.setState({loggedIn : false})
                        Alert.alert('Success', 'Success to login')
                        this.props.navigation.navigate('Main')
                      })
    
                    } else {
                      this.setState({loggedIn : false})
                      Alert.alert('Warning', 'Email or Password is wrong')
                    }
    
              })
              .catch(function (error) {
                this.setState({loggedIn : false})
                  Alert.alert('Failed Login', 'Server Not Found',
                  [
                    {text: 'OK'},
                  ],
                  {cancelable: false},)
              })
        }
      }
    
      isLoading = () => {
        return (
          <ActivityIndicator size="large" color="#51A2DA" />
        )
      }
    
      textLogin = () => {
        return (
          <Text >Login</Text>
        )
      }
      
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <KeyboardAvoidingView  behavior="padding" enabled>
                    <View>
                        <Text>Email</Text>
                        <TextInput
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="enter your email"
                            keyboardType="email-address"
                            onChangeText={(email) => this.setState({email})}
                            onSubmitEditing={()=> this.password.focus()}
                        />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput 
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="enter your password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            ref={(input) => this.password = input}
                        />
                    </View>
                    <TouchableOpacity type='submit'  onPress={() => this.handleSubmit(this.state.email, this.state.password)} >
                        {this.state.loggedIn ? this.isLoading() : this.textLogin()}
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <Button
                    title="Register"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
                
            </View>
        )
    }
}

export default Login