import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button
} from 'react-native'

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        usernameD: 'a',
        passwordD: '1',
        visible: true
    }

    masuk = () => {
        if (this.state.username == this.state.usernameD && this.state.password == this.state.passwordD) {
            this.props.navigation.replace('Home')
        } else {
            alert('gagal')
        }
    }
    lihat = () => {
        this.setState({ visible:!this.state.visible })
    }
    render() {
        return (
            <View style={styles.container} >

                <View style={styles.container2}>

                    <Image style={{ width: 70, height: 70, marginTop: '10%', marginBottom: '5%' }}
                        source={require('../image/logo.png')} />

                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>To Do App Challenge</Text>

                    <TextInput style={styles.klmIpt}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='username'
                        placeholderTextColor='#ffffff'
                        selectionColor='#fff'
                        keyboardType='email-address'
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <View style={styles.boxpas}>
                        <TextInput style={styles.pasbox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='password'
                            placeholderTextColor='#fff'
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                        <View style={styles.miru}
                        >
                        <Text onPress={() => this.lihat()}>lihat</Text>
                    </View>
                    </View>
                    <Text style={styles.forget}>forget password?</Text>

                    <TouchableOpacity
                        onPress={() => this.masuk()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            masuk
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.boxnotacount}>
                        <Text style={styles.notacount}>your not have acount?</Text>
                        <Text style={styles.signup}>sign up</Text>
                    </View>
                </View>


            </View>
            // </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2894d2',
        alignItems: "center"
    },
    container2: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000091',
        width: '90%',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 15
    },
    boxpas: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        borderRadius: 15,
        color: 'black',
        marginVertical: 5,
        flexDirection: "row"
    },
    pasbox: {
        height: 50,
        width: '80%',
        padding: 5,
    },
    miru: {
        height: 50,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    klmIpt: {
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        borderRadius: 15,
        color: 'black',
        marginVertical: 5,

    },
    button: {

        width: '90%',
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold'
    },
    forget: {
        fontSize: 12,

        marginLeft: 170
    },
    boxnotacount: {
        width:"70%",
        fontSize: 10,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
    notacount: {
        width:"53%",
        fontSize: 10,
        alignContent:'flex-end'
    },
    signup: {
        width:"17%",
        fontSize: 10,
        fontWeight:'bold'
    },
})