import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import ListCryptoCurrency from './components/ListCryptoCurrency';
import ViewCryptoDetail from './components/ViewCryptoDetail';

const RouterComponent = () => {
    const { headerStyle, headerNavBarStyle } = styles;
    return (
        <Router titleStyle={headerStyle} navigationBarStyle={headerNavBarStyle}>
            <Scene key="root">
                <Scene key="listCrypto" component={ListCryptoCurrency} title="Crypto Currency Tracker" initial/>
                <Scene key="cryptoDetail" component={ViewCryptoDetail} title="Crypto Detail" />
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        color: '#fff'
    },
    headerNavBarStyle: {
        backgroundColor: '#2873f1'
    }
});

export default RouterComponent;
