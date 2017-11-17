import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ children, onPressed }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPressed}>
            <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#2873f1',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2873f1',
        marginLeft: 5,
        marginRight: 5

    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export { Button };