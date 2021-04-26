import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchCoinList } from "../actions";
import CoinCard from "../components/CoinCard/CoinCard";

const List = props => {
    return (
        <CoinCard />
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
        coinData: state.coinData
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
