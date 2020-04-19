import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'
import Emoji from 'react-native-emoji';

export default function SelectCountryCode() {
    const [country, setCountry] = React.useState(null);
    const countrySelected = (country) => {
        if (country === null) {
            return (
                <Text>Select Country</Text>
            );
        } else {
            return (
                <Emoji name={country.flag} style={{fontSize: 50}} />
            );
        }
    };

    return (
        <View style={styles.container}>
            <CountryPicker
                style={styles.countryPicker}
                withCallingCode={true}
                withEmoji={true}
                withFlag={true}
                withCountryNameButton={true}
                onSelect= {(country) => {
                    setCountry(country);
                }}
                placeholder={countrySelected(country)}
            />
            <Text style={styles.callingCode}>
                {country !== null && '+' + country.callingCode}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    countryPicker: {
        flex: 2,
    },
    callingCode: {
        flex: 1,
        height: 18,
        textAlign: 'center',
    }
})