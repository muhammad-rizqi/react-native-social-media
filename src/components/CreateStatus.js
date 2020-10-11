/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const CreateStatus = () => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/icons/round-account-button-with-user-inside.png')}
          style={styles.profileImage}
        />
        <TextInput
          multiline={true}
          placeholder="Apa yang anda pikirkan ?"
          style={[styles.input, {maxHeight: 100}]}
          placeholderTextColor="#4b4d5a"
        />
      </View>
      <View style={styles.statusCommand}>
        <Text style={[styles.textWhite, {flex: 1}]}>Teman dari teman</Text>
        <TouchableOpacity style={styles.buttonSend}>
          <Text style={styles.buttonText}>Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CreateStatus;
