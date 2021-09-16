import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import SafeViewAndroid from "../components/SafeViewAndroid";

const HomeScreen = () => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
