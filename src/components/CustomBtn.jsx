import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomBtn = ({ btnTitle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnTxt}>{btnTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomBtn;

const styles = StyleSheet.create({
    btn: {
        width: 340,
        borderRadius: 5,
        backgroundColor: '#0779f1ff',
    },

    btnTxt: {
        fontSize: 18,
        color: "#fff",
        paddingVertical: 9,
        fontSize: 18,
        textAlign: "center"
    }
})