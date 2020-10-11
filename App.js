import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Register from './src/screen/Register';

export default class App extends Component {
  render() {
    return <Home />;
  }
}

const styles = StyleSheet.create({});
