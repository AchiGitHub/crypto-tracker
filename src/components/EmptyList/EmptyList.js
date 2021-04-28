import React from 'react'
import { StyleSheet, Text } from 'react-native';

const EmptyList = ({ theme }) => {
    return (
        // Flat List Item
        <Text style={!theme ? styles.emptyListStyleDark : styles.emptyListStyleLight}>
            No Coins Found
        </Text>
    );
};

export default EmptyList;

const styles = StyleSheet.create({
    emptyListStyleDark: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    emptyListStyleLight: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
});
