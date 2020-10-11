import React, {Component} from 'react';
import {
  Image,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import CreateStatus from '../components/CreateStatus';
import Status from '../components/Status';
import {styles} from '../styles/styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#212227" />
        <View style={styles.headerBar}>
          <Image
            source={require('../assets/icons/searching-magnifying-glass.png')}
            style={styles.icon}
          />
          <TextInput
            placeholderTextColor="#4b4d5a"
            placeholder="Search"
            style={styles.input}
          />
        </View>
        <ScrollView style={styles.pageContainer}>
          <CreateStatus />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <ActivityIndicator color="grey" size="large" />
        </ScrollView>
      </View>
    );
  }
}
