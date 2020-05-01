import React, {Component} from 'react'
import { View, Text, Button } from 'react-native';

class Register extends Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Register Screen</Text>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}

export default Register