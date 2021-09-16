import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SafeViewAndroid from "../components/SafeViewAndroid";
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea, tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Image 
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    // get image from local
                    source={require('../assets/image/uber.png')}
                    // get image from URI
                    // source={{
                    //     uri: "https://links.papareact.com/gzs"
                    // }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
