import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import SVGImage from 'react-native-svg-image';

class ListCryptoItem extends Component {

    onRowPress(){
        Actions.cryptoDetail({ crypto: this.props.record });
    }

    render() {
        const { name, symbol, price_usd, percent_change_24h } = this.props.record;
        const { iconStyle, symbolStyle, nameStyle, priceStyle, percentPlusStyle, percentMinusStyle } = styles;
        const icon = `https://festive-hermann-81ae5a.netlify.com/${symbol.toString().toLowerCase()}.svg`;
        // console.log(icon);
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <SVGImage
                            style={iconStyle}
                            source={{ uri: icon}}
                        />
                        {/* <Text style={symbolStyle}> {symbol} </Text> */}
                        <Text style={nameStyle}> {name} </Text>
                        <Text style={priceStyle}> {price_usd} $ </Text>
                        <Text style={percent_change_24h > 0 ? percentPlusStyle : percentMinusStyle}> {percent_change_24h} % </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    iconStyle: {
        width: 40,
        height: 40,
        flex: 1,
    },
    nameStyle: {
        flex: 2,
        fontWeight: '500',
        color: '#000'
    },
    symbolStyle: {
        fontWeight: 'bold',
        flex: 1
    },
    priceStyle: {
        flex: 1.5,
        textAlign: 'right'
    },
    percentPlusStyle: {
        flex: 1,
        color: 'green',
        textAlign: 'right'
    },
    percentMinusStyle: {
        flex: 1,
        color: 'red',
        textAlign: 'right'
    }
});

export default ListCryptoItem;