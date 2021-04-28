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
import { NativeRouter } from 'react-router-native';
import thunk from 'redux-thunk';
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
      <NativeRouter>
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
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto'
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
    fontFamily: 'Roboto'
  },
  containerLight: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default App;
