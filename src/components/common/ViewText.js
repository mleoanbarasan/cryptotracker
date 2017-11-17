import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewText = (props) => {
    const { viewStyle, titleStyle, valueStyle } = styles;
    return(
        <View style={viewStyle}>
            <Text style={titleStyle}>{props.title}</Text>
            <Text style={[valueStyle, props.style]}>{props.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        flex: 1
    },
    titleStyle: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold'
    },
    valueStyle: {
        flex: 1,
        fontSize: 16
    }
});

export { ViewText };

