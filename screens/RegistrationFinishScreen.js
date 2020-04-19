import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

export default function RegistrationFinishScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/finish.png')}
                style={styles.background}
                resizeMode="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    background: {
        flex: 1,
        height: 650,
        marginHorizontal: 40
    }
})