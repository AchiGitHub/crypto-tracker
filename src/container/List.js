import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchCoinList } from "../actions";
import CoinCard from "../components/CoinCard/CoinCard";

const List = props => {

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
