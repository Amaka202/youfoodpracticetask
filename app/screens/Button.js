import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomeButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        backgroundColor: "#016738",
        borderRadius: 10,
        paddingVertical: 13,
        marginTop: 10
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    }
});

export default CustomeButton;
