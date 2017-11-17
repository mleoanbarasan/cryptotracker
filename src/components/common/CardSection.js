import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children, style }) => {
    return (
        <View style={[styles.viewStyle, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});

export { CardSection };