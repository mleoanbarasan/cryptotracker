import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: 10,
        height: 60,
        backgroundColor: '#2873f1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});

export { Header };
