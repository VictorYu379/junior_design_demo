import * as React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, View, Text } from "react-native";

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/splash.png')}
                style={styles.bgImage}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.register}
                        onPress={() => navigation.navigate('PhoneVerification')}>
                        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.login}>
                        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        flexDirection: "column-reverse",
    },
    buttonContainer: {
        alignItems: 'flex-end',
        flexDirection: "column",
        justifyContent: 'space-around',
        height: 150,
        alignItems: 'stretch',
        marginHorizontal: 16,
        marginBottom: 50,
    },
    register: {
        backgroundColor: "blue",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        backgroundColor: "red",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
});