import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = ({ fontSize, color }) => {
    return (
        <View>
            <Text style={[styles.heading, { fontSize, color }]}>VibeShare</Text>
        </View>
    )
}

export default Logo;

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontFamily: "cursive"
    }
})