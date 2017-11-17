import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Header, Spinner } from './common';
import { fetchCrypto } from '../actions';
import ListCryptoItem from './ListCryptoItem';

class ListCryptoCurrency extends Component {

    componentWillMount() {
        this.props.fetchCrypto();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.createDataSource(newProps);
    }

    createDataSource({ data }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(data);
    }

    renderRow(record) {
        return <ListCryptoItem record={record}/>
    }

    renderList() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    render() {
        //console.log(this.props.data);
        return (
            <View style={styles.container}>
                {/* <Header title="Crypto Currency Tracker" /> */}
                {this.renderList()}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

const mapStateToProps = (state) => {
    const { loading, error, data } = state.crypto;
    
    // const data = _.map(state.crypto.data, (val, id) => {
    //     console.log(data);
    //     return { ...val, id };
    // });
    
    return { loading, error, data };
};

export default connect(mapStateToProps, {fetchCrypto})(ListCryptoCurrency);

