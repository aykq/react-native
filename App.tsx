import React, { useState } from 'react';
import { Image, Text, View, SafeAreaView, StyleSheet, Modal, Linking, TextInput } from 'react-native';
import CustomButton from './components/customButton'

const HelloWorldApp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.dataContainer}>
                <Text style={styles.text}>merhaba</Text>
                <Text style={styles.subtitle}>bir takım bilgiler</Text>
                <Text>{isimler('burak', 'tuncel', 'fü')}</Text>
                <TextInput style={styles.textinput} placeholder='test'>

                </TextInput>
            </View>
            <View>
                <ClickTracker></ClickTracker>
                <Print></Print>
            </View>
            <View>
                <PrintPopUp></PrintPopUp>
            </View>
        </SafeAreaView>
    );
};

const PrintPopUp = () => {
    const [isVisible, setIsVisible] = useState(false)

    const PrintButtonPress = () => {
        setIsVisible(true)
    }

    return (
        <View>
            <CustomButton title='ekrana yazdir popup' onPress={PrintButtonPress}></CustomButton>

            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Test Yazisi</Text>
                        <CustomButton title='tamam' onPress={() => setIsVisible(false)}></CustomButton>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const ClickTracker = () => {
    const [count, setCount] = useState(0)

    return (
        <View>
            <Text style={styles.clicktracker}>butona {count} kez basildi</Text>
            <CustomButton title='sayac icin tikla' onPress={() => setCount(count + 1)}></CustomButton>
        </View>
    )
}

const Print = () => {
    const [message, setMessage] = useState('')

    const PrintButtonPress = () => {
        setMessage('test yazisi')
    }

    return (
        <View>
            <CustomButton title='ekrana yazdir' onPress={PrintButtonPress}></CustomButton>
            {message ? <Text style={styles.printText}>{message}</Text> : null}
        </View>
    )
}

const isimler = (isim: string, soyisim: string, okul: string) => {
    return isim + " " + soyisim + " " + okul;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'normal',
        fontSize: 30,
    },
    textinput: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15
    },
    dataContainer: {
        /*         alignItems: 'center',
                justifyContent: 'center' */
    },
    clicktracker: {
        marginTop: 10,
        marginBottom: 10
    },
    printText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planı hafif koyu yapmak için
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})

export default HelloWorldApp;