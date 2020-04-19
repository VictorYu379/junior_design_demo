import * as React from 'react';
import { ImageBackground, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, Text } from "react-native";
import { CreditCardInput} from "react-native-credit-card-input";

export default function CreditCardVerificationScreen({ navigation }) {
    const _onChange = form => console.log(form);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <ImageBackground
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain">
                    </ImageBackground>
                    <CreditCardInput onChange={_onChange} style={styles.creditCard} />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        style={styles.back}
                        onPress={navigation.goBack}>
                        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.next}
                        onPress={() => navigation.navigate('Scan')}>
                        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
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
    creditCard: {
        flex: 1,
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