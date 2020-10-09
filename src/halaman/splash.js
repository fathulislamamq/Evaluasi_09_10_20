import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    ActivityIndikator
} from 'react-native'
const image = { require: '../ima' }
class Splash extends React.Component {
    render() {
        setTimeout(() => {
            this.props.navigation.replace('Login')
        }, 5000);
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#2894d2',
                alignItems: "center",
                justifyContent:'center'
            }}>
                <Text style={{
fontWeight:'bold',
       fontSize: 20,
       fontWeight:'bold',
       justifyContent:'center',
       alignItems:'center'
       
    }} >WELCOME</Text>

            </View>
        )
    }
}

export default Splash
