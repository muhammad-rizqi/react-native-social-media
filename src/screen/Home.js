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
          <Status
            profileImage={{uri: 'https://picsum.photos/200/200'}}
            status="Consectetur vitae voluptatem voluptas beatae ut sit."
          />
          <Status
            profileImage={{uri: 'https://picsum.photos/200/200'}}
            status="Soluta ad rerum a quae architecto. Fugiat ex doloremque. Nulla alias soluta alias id autem. Ratione eum doloremque numquam pariatur possimus doloribus at."
          />
          <Status
            profileImage={{uri: 'https://picsum.photos/200/200'}}
            status="Dolorum adipisci in veniam officia est at voluptatem. Laudantium sunt eos iusto. Tenetur velit provident non ipsum modi tempora voluptas. Omnis delectus ut."
          />
          <Status
            profileImage={{uri: 'https://picsum.photos/200/200'}}
            status="Et aut voluptatibus similique voluptatem ab deserunt. Sapiente quasi quia. Accusantium rerum enim hic quia eligendi."
          />
          <ActivityIndicator color="grey" size="large" />
        </ScrollView>
      </View>
    );
  }
}
