import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native-web'
import { auth } from '../../../../firebase'

const loginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auths
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavoir="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}>
                    <Text style={styles.button}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { handleSignUp }}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.button}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    input: {

    },
    buttonContainer: {

    },
    button: {

    },
    buttonOutline: {

    },
    inputContainer: {

    }
})
