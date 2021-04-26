import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function CoinCard() {
  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <View style={styles.cardLeftSide}>
            <Text style={styles.cardName} numberOfLines={2}>
              BITCOIN
            </Text>
          </View>
          <View style={styles.cardLeftSide}>
            <Text style={styles.cardTime} numberOfLines={2}>
              $ 980000
            </Text>
          </View>
        </View>
      </View>
    </View >
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

    elevation: 5
  },
  innerContainer: {
    padding: 40,
    flexDirection: "row"
  },
  tag: {
    color: "#B066A4"
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
    // marginTop: 15,
    borderRadius: 10
  },
  cardBodyTop: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
    marginVertical: 15,
  },
  cardName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardTime: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500"
    // marginRight: 10
  },
  cardAvatar: {
    height: 130,
    width: 100,
    backgroundColor: "gray"
    // borderRadius: 60,
  },
  dateContainer: {
    flexDirection: "row"
  },
  seperator: {
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 8
  }
});
