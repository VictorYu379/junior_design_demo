import * as React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, View, SafeAreaView, TextInput, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import SelectCountryCode from '../components/SelectCountryCode';

export default function PhoneVerificationScreen({ navigation }) {
    const [phoneNum, setPhoneNum] = React.useState('###');

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <ImageBackground
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain">
                </ImageBackground>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container1_2}>
                        <Text style={{fontSize: 20}}>What's your phone number?</Text>
                            <SafeAreaView style={styles.inputs}>
                                <SelectCountryCode />
                                <TextInput
                                    style={styles.numInput}
                                    onChangeText={text => setPhoneNum(text)}
                                    value={phoneNum}
                                    keyboardType="phone-pad"
                                    maxLength={14}/>
                            </SafeAreaView>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={navigation.goBack}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.next}
                    onPress={() => navigation.navigate('CreditCardVerification')}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flex: 2,
        marginHorizontal: 20
    },
    container1_2: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: "center",
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        flex: 1,
    },
    inputs: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    numInput: {
        flex: 2,
        height: 18,
        textAlign: "center"
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