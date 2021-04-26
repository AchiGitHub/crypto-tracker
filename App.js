/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import services from './services';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import thunk from 'redux-thunk';
import Topics from './components/TestView';

// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware =  applyMiddleware(thunk)

// Create enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware)

// Create store
let store = createStore(reducers, enhancer);

const Home = () => <Text style={styles.header}>Home</Text>;

const About = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link
              to="/about"
              underlayColor="#f0f4f7"
              style={styles.navItem}
            >
              <Text>About</Text>
            </Link>
            <Link
              to="/topics"
              underlayColor="#f0f4f7"
              style={styles.navItem}
            >
              <Text>Topics</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </View>
      </NativeRouter>
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
