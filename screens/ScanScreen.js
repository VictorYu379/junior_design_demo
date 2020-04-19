import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default function ScanScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/IDScan.png')}
                style={styles.background}
                resizeMode="contain"/>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={navigation.goBack}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.next}
                    onPress={() => {navigation.navigate('RegistrationFinish')}}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    background: {
        flex: 3,
        marginHorizontal: 20,
        marginTop: 20
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    back: {
        backgroundColor: "red",
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    next: {
        backgroundColor: "blue",
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    }
})