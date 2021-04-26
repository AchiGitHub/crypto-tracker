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
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
        <SafeAreaView style={styles.container}>
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
  }
});

export default App;
