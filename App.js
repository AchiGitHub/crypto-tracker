/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import thunk from 'redux-thunk';
import List from './src/container/List';

// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware = applyMiddleware(thunk);

// Create store
let store = createStore(reducers, middleware);

const App = (props) => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Coins</Text>
          </View>
          <List />
        </SafeAreaView>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#575972',
    flex: 1
  },
  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff'
  }
});

export default App;
