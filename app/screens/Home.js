import React from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Button from './Button'
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements'

function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.titleText}>
                    Signup on
                </Text>
                <Text style={styles.goldText}>
                    YouFood Gigger
                </Text>
            </View>
            <View style={styles.formSection}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Swedish Personal Number</Text>
                    <View style={styles.iconInput}>
                        <TextInput >
                            **********
                            </TextInput>
                        <Icon
                            style={styles.iconStyle}
                            name='send'
                            color='#C3C3C4'
                            size={15}
                        />
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input}>
                        johnkelly@gmail.com
                    </TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput style={styles.input}>
                        +6372818293
                    </TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Role</Text>
                    <View style={styles.select}>
                        <Picker itemStyle={{ height: 40, fontSize: 16 }}>
                            <Picker.Item label="Store Parker" value="storeParker" />
                            <Picker.Item label="buyer" value="Buyer" />
                        </Picker>
                    </View>
                </View>
                <View>
                    <Button title="Signup" />
                </View>
            </View>
            <View >
                <Text style={styles.footerText}>Already registered?
                    <Text style={{ color: '#FF9F1C' }}> Login</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00160C',
        height: '100%',
        flex: 1,
        paddingTop: 30
    },
    iconInput: {
        backgroundColor: '#F2F3F5',
        borderRadius: 10,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 40

    },
    iconStyle: {
        alignSelf: 'center',
        color: 'red'
    },
    topSection: {
        marginHorizontal: 60
    },
    titleText: {
        fontSize: 35,
        fontWeight: '700',
        color: 'white',
        alignSelf: 'flex-start'
    },
    goldText: {
        fontSize: 35,
        fontWeight: '700',
        color: '#FF9E1B'
    },
    formSection: {
        backgroundColor: 'white',
        paddingTop: 40,
        paddingBottom: 40,
        paddingRight: 20,
        paddingLeft: 20,
        marginVertical: 25,
        marginHorizontal: 20,
        borderRadius: 15
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#F2F3F5',
        borderRadius: 10,
        paddingLeft: 15,
    },
    label: {
        color: '#8F92A1',
        marginBottom: 15
    },
    btnStyle: {
        borderRadius: 10
    },
    footerText: {
        textAlign: 'center',
        color: 'white'
    },
    select: {
        backgroundColor: '#F2F3F5',
        borderRadius: 10,
        fontSize: 10,
        height: 42
    }
})

export default Home;
