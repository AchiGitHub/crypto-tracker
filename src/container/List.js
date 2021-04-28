import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { fetchCoinList } from "../actions";
import CoinCard from "../components/CoinCard/CoinCard";

const List = props => {

    const [number, onSearchChange] = React.useState(null);

    useEffect(() => {
        props.fetchCoinList();
    }, []);

    const _renderItem = ({ item }) => {
        return <CoinCard data={item} theme={props.theme} />
    };

    const _onRefresh = () => {
        props.fetchCoinList();
    }

    return (
        <>
            <TextInput
                style={props.theme ? styles.inputLight : styles.inputDark}
                onChangeText={onSearchChange}
                placeholder="Search"
                placeholderTextColor={props.theme ? "#000" : "#fff"}
            />
            <FlatList
                data={props.coinData}
                renderItem={_renderItem}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={() => _onRefresh()}
                refreshing={props.loading}
            />
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinList: () => {
            dispatch(fetchCoinList());
        }
    };
};

const mapStateToProps = state => {
    return {
        coinData: state.coinData,
        loading: state.loading
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

const styles = StyleSheet.create({
    inputDark: {
        marginTop: 0,
        margin: 12,
        borderBottomWidth: 0.2,
        borderBottomColor: "#fff",
        color: '#fff'
    },
    inputLight: {
        marginTop: 0,
        margin: 12,
        borderBottomWidth: 0.2,
        borderBottomColor: "#000"
    },
});