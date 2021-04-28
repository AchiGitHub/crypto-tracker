import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function CoinCard({ data, theme }) {

  let percentageDecrease = false;
  let increaseRate;

  if (data.changePercent24Hr.includes("-")) {
    percentageDecrease = true;
    increaseRate = `${parseFloat(data.changePercent24Hr).toFixed(2)}%`;
  } else {
    increaseRate = `+${parseFloat(data.changePercent24Hr).toFixed(2)}%`;
  }

  return (
    <View style={!theme ? styles.container : styles.containerLight}>
      <View style={!theme ? styles.cardBody : styles.cardBodyLight}>
        <View style={styles.cardBodyTop}>
          <View>
            <Text style={styles.cardName} numberOfLines={2}>
              {data.name}
            </Text>
            <Text style={styles.coinSymbol} numberOfLines={2}>
              {data.symbol}
            </Text>
          </View>
          <View>
            <Text style={!theme ? styles.coinRate : styles.coinRateLight} numberOfLines={2}>
              {formatter.format(parseFloat(data.priceUsd))}
            </Text>
            <Text style={percentageDecrease ? styles.rateOfDecrease : styles.rateOfIncrease} numberOfLines={2}>
              {increaseRate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CoinCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5E6172",
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
    paddingTop: 0,
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,
    elevation: 24
  },
  cardBody: {
    padding: 15,
    backgroundColor: "#5E6172",
    borderRadius: 10
  },
  cardBodyTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: 'center'
  },
  cardName: {
    color: "#EEC36E",
    fontSize: 20,
    fontWeight: "bold"
  },
  coinRate: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },
  coinRateLight: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500"
  },
  cardAvatar: {
    height: 130,
    width: 100,
    backgroundColor: "gray"
  },
  dateContainer: {
    flexDirection: "row"
  },
  seperator: {
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 8
  },
  rateOfIncrease: {
    color: "#5aa897",
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  rateOfDecrease: {
    color: '#ec4646',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  coinSymbol: {
    color: "#cdd0cb",
    fontSize: 16,
    fontWeight: '500'
  },
  containerLight: {
    backgroundColor: "#5E6172",
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10
  },
  cardBodyLight: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10
  }
});

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});