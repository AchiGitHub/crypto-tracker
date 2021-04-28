import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { fetchCoinList, searchCoinList } from "../actions";
import CoinCard from "../components/CoinCard/CoinCard";
import EmptyList from "../components/EmptyList/EmptyList";

const List = props => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        props.fetchCoinList();
    }, []);

    const _renderItem = ({ item }) => {
        return <CoinCard data={item} theme={props.theme} />
    };

    const _onRefresh = () => {
        props.fetchCoinList();
    }

    const onSearchChange = (value) => {
        props.searchCoins(value)
    }

    return (
        <>
            <TextInput
                style={props.theme ? styles.inputLight : styles.inputDark}
                value={search}
                onChangeText={(e) => { onSearchChange(e), setSearch(e) }}
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
                ListEmptyComponent={props.loading ? "" : <EmptyList theme={props.theme} />}
            />
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinList: () => {
            dispatch(fetchCoinList());
        },
        searchCoins: (query) => {
            dispatch(searchCoinList(query))
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
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
        borderBottomWidth: 0.2,
        borderBottomColor: "#fff",
        color: '#fff',
        fontSize: 18
    },
    inputLight: {
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
        borderBottomWidth: 0.2,
        borderBottomColor: "#000",
        fontSize: 18
    },
});