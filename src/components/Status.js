/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const Status = () => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image
            source={require('../assets/icons/round-account-button-with-user-inside.png')}
            style={styles.profileImage}
          />
          <View style={{marginLeft: 8}}>
            <Text style={styles.statusName}>Muhammad Rizqi</Text>
            <Text style={styles.textWhite}>1 jam yang lalu</Text>
          </View>
        </View>
        <Text style={[styles.textWhite, {marginVertical: 8}]}>
          Suscipit dolorem at natus similique corporis temporibus accusamus.
          Optio asperiores corporis rerum vel minima nobis. Iure voluptate
          eveniet impedit saepe dolorem. Perferendis nesciunt fugiat amet
          officiis nobis maxime doloremque nesciunt rerum. Quibusdam quia veniam
          dolor fugiat rerum nesciunt nobis autem.
        </Text>
        <View style={styles.statusButtonGroup}>
          <TouchableOpacity styles={{flex: 1}}>
            <Image
              source={require('../assets/icons/favorite-heart-outline-button.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity styles={{flex: 1}}>
            <Image
              source={require('../assets/icons/add-comment-button.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity styles={{flex: 1}}>
            <Image
              source={require('../assets/icons/forward-arrow.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Status;
