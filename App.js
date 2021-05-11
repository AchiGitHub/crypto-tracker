/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Switch, Platform } from 'react-native';
import thunk from 'redux-thunk';
import { AdMobBanner, PublisherBanner } from 'react-native-admob';

import List from './src/container/List';

// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware = applyMiddleware(thunk);

// Create store
let store = createStore(reducers, middleware);

const App = (props) => {

  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark(previousState => !previousState);

  return (
    <Provider store={store}>
      {Platform.OS === "ios" && <StatusBar barStyle={!isDark ? "light-content" : "dark-content"} />}
      <SafeAreaView style={!isDark ? styles.container : styles.containerLight}>
        <View style={styles.header}>
          <Text style={!isDark ? styles.headerText : styles.headerTextLight}>Coins</Text>
          <View style={styles.themeToggle}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDark ? "#f4f3f4" : "#5E6172"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isDark}
            />
          </View>
        </View>
        <List theme={isDark} />
        <View style={styles.adSlot}>
          <AdMobBanner
            adSize="mediumBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" //test ad id
            // adUnitID="ca-app-pub-8167817804987450/7911429163"  //production id
            testDeviceID={[PublisherBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
            onAppEvent={event => console.log(event.name, event.info)}
          />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191721',
    flex: 1
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    // fontFamily: 'Roboto'
  },
  themeToggle: {
    position: 'absolute',
    top: 0,
    right: 15
  },
  headerTextLight: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    // fontFamily: 'Roboto'
  },
  containerLight: {
    backgroundColor: '#fff',
    flex: 1
  },
  adSlot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});

export default App;
