import React, {Component} from 'react'
import { View, Text, Button, AsyncStorage} from 'react-native';

class Home extends Component {
    removeItem = async () => {
        let keys = ['token', 'user_data']
        await AsyncStorage.multiRemove(keys, (err) => {
            this.props.navigation.navigate('Auth')
        })
    }
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="logout"
                    onPress={() => this.removeItem()}
                />
            </View>
        )
    }
}

export default Home