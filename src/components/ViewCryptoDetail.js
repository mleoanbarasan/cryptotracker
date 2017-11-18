import React, { Component } from 'react';
import { Text, StyleSheet, Linking, ScrollView } from 'react-native';
import SVGImage from 'react-native-svg-image';
import { Card, CardSection, ViewText, Button } from './common';

class ViewCryptoDetail extends Component {
    render() {
        const { name,
            symbol,
            rank,
            price_usd,
            price_btc,
            market_cap_usd,
            available_supply,
            total_supply,
            max_supply,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d
        } = this.props.crypto;
        
        const explorerLink = `https://chainz.cryptoid.info/${symbol.toString().toLowerCase()}/`;
        const icon = `https://festive-hermann-81ae5a.netlify.com/${symbol.toString().toLowerCase()}.svg`;

        const { viewStyle, percentPlusStyle, percentMinusStyle, iconStyle } = styles;
        return (
            <ScrollView style={viewStyle}>
                <Card>
                    <CardSection style={{ justifyContent: 'center' }}>
                        <SVGImage
                            style={iconStyle}
                            source={{ uri: icon}}
                        />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Name" value={name} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Symbol" value={symbol} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Rank" value={rank} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Price in USD" value={`${price_usd} $`} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Price in BTC" value={`${price_btc} BTC`} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Market Cap" value={`${market_cap_usd} $`} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Available Supply" value={`${available_supply} ${symbol}`} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Total Supply" value={`${total_supply} ${symbol}`} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Max Supply" value={`${max_supply ? max_supply : 0} ${symbol}`} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Last 1 hr" value={percent_change_1h} style={percent_change_1h > 0 ? percentPlusStyle : percentMinusStyle} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Last 24 hrs" value={percent_change_24h} style={percent_change_24h > 0 ? percentPlusStyle : percentMinusStyle} />
                    </CardSection>
                    <CardSection>
                        <ViewText title="Last 7 days" value={percent_change_7d} style={percent_change_7d > 0 ? percentPlusStyle : percentMinusStyle} />
                    </CardSection>

                    <CardSection>
                        <Button onPressed={() => Linking.openURL(explorerLink)}> View Explorer </Button>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    percentPlusStyle: {
        flex: 1,
        color: 'green'
    },
    percentMinusStyle: {
        flex: 1,
        color: 'red'
    },
    iconStyle: {
        width: 75,
        height: 75,
        flex: 1,
        alignSelf: 'center'
    }
})

export default ViewCryptoDetail;