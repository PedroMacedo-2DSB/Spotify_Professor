import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function App(){
    return (
        <View style={styles.container}>
            <Image
                //Caminho da imagem
                source={require('./assets/spotify-logo.png')}
                style={styles.logo}
                resizeMode="contain"
                acessible
                accessibilityLabel = "Spotify"
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', //Cor preta
        alignItems: 'center',
        justifyContent:'center'
    },

    logo:{
        width: 100,
        height: 100,
    },
});