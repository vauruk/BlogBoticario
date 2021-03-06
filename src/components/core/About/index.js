/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import vander from '../../../assets/foto.jpg'
//import { I18n } from '@aws-amplify/core'
import VersionNumber from 'react-native-version-number'
import theme, { styles } from '../Theme'
import { Text, Linking } from 'react-native'
import { Button } from 'native-base';


const About: () => React$Node = () => {

    goToURL = () => {
        Linking.openURL('https://www.linkedin.com/in/vauruk/');
    }

    goToGitHub = () => {
        Linking.openURL('https://github.com/vauruk');
    }

    console.log('VersionNumber', VersionNumber)
    return (
        <View style={[stylesLocal.container]}>
            <ScrollView>
                <View style={{
                    //marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={vander}
                        resizeMode="cover"
                        style={{
                            flex: 1,
                            height: 400,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            //margin: 5,
                        }} />
                </View>
                <Text style={{ marginTop: 5 }}></Text>

                <Button transparent block tyle={{
                }}
                    onPress={() => goToURL()} >
                    <Text style={[stylesLocal.instructions, { textDecorationLine: "underline", color: 'blue' }]}>Linkedin</Text>
                </Button>
                <Button transparent block tyle={{
                }}
                    onPress={() => goToGitHub()} >
                    <Text style={[stylesLocal.instructions, { textDecorationLine: "underline", color: 'blue' }]}>GitHub</Text>
                </Button>
                <Text style={stylesLocal.instructions}>Vanderson Vauruk</Text>
                <Text style={stylesLocal.instructions}>vauruk@gmail.com</Text>
                <Text style={stylesLocal.instructions}>Version: {VersionNumber.appVersion}</Text>
                <Text style={stylesLocal.instructions}>Build Version: {VersionNumber.buildVersion}</Text>
                <Text style={stylesLocal.instructions}>Powered By Vanderson Vauruk</Text>
            </ScrollView>
        </View>
    );
}

export default About;

const stylesLocal = StyleSheet.create({
    container: {
        //flex: 1,
        //  justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffffff',
    },
    textAbout: {
        fontSize: theme.TEXT_18,
        color: theme.PRIMARY_COLOR,
        padding: 20,
        textAlign: "justify"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: theme.TEXT_18
    },
});
