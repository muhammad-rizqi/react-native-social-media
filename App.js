/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
// Memasukan Component atau menguhubungkan ke REACT
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Button,
  Picker,
  Switch,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => alert('Not Implemented Yet')}>
            <Image
              source={require('./src/assets/icon/arrow_back_24px.png')}
              style={{margin: 4, width: 24, height: 24, alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              flex: 1,
              color: 'white',
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            Muhammad Rizqi
          </Text>
        </View>
        <View style={{position: 'relative', height: 250}}>
          <Image
            style={styles.coverImage}
            source={require('./src/assets/image/cover.png')}
          />
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={require('./src/assets/image/pp.jpg')}
            />
          </View>
        </View>
        <View style={{padding: 16}}>
          <Text style={styles.profileTitle}>Muhammad Rizqi</Text>
          <Text style={{textAlign: 'center', color: '#2e2e2e'}}>
            I'm Programmer. I live in Java island. I'm Sundanese {'\n\n'} So, I
            can't speak Java but can write program with Java, JavaScript, Kotlin
            and PHP. Design UI/UX ? Yes I can..
          </Text>
        </View>
        <View style={{backgroundColor: '#f0f2f5', padding: 16}}>
          <View style={styles.infoContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Intro</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.infoIcon}
                source={require('./src/assets/icon/company.png')}
              />
              <Text style={styles.infoText}>Marbot di Masjid Al-Ikhlas</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.infoIcon}
                source={require('./src/assets/icon/graduation.png')}
              />
              <Text style={styles.infoText}>
                Pernah belajar di SMK Tamansiswa cibadak
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.infoIcon}
                source={require('./src/assets/icon/home.png')}
              />
              <Text style={styles.infoText}>Tinggal di Sukabumi</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.infoIcon}
                source={require('./src/assets/icon/location.png')}
              />
              <Text style={styles.infoText}>
                Dari Cibadak, Jawa Barat, Indonesia
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.infoIcon}
                source={require('./src/assets/icon/love.png')}
              />
              <Text style={styles.infoText}>Lajang</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#f0f2f5', padding: 16}}>
          <View style={styles.infoContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 42, height: 42, borderRadius: 42 / 2}}
                source={require('./src/assets/image/pp.jpg')}
              />
              <TextInput
                style={styles.statusText}
                placeholder="Apa yang Anda pikirkan?"
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* Dikarenakan state belum dibahas maka state nya tidak ada, maka picker belum berjalan dengan baik */}

              <Picker
                style={{height: 50, width: 150}}
                onValueChange={(value) => alert('Not Implemented Yet')}>
                <Picker.Item label="Publik" value="public" />
                <Picker.Item label="Teman Dari Teman" value="private" />
              </Picker>
              {/* Dikarenakan state belum dibahas maka state nya tidak ada, maka picker belum berjalan dengan baik */}
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                ios_backgroundColor="#3e3e3e"
                value={true}
                onChange={() => alert('Not Implemented Yet')}
              />

              <View style={{flex: 1, margin: 8}}>
                <Button
                  color="#0778e8"
                  title="Kirim"
                  onPress={() => alert('Not Implemented Yet')}
                />
              </View>
            </View>
          </View>
        </View>
        <ActivityIndicator size="large" color="#0778e8" />
      </ScrollView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    resizeMode: 'stretch',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderColor: '#eee',
    borderWidth: 5,
  },
  profileContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  profileTitle: {
    margin: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  navContainer: {
    height: 42,
    backgroundColor: '#444499',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  infoContainer: {
    padding: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ebee',
    borderRadius: 10,
  },
  infoIcon: {
    tintColor: '#92979c',
    alignSelf: 'center',
    margin: 8,
    width: 18,
    height: 18,
  },
  infoText: {alignSelf: 'center', flex: 1},
  statusText: {
    height: 42,
    flex: 1,
    borderRadius: 42 / 2,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: '#f0f2f5',
    color: '#656784',
  },
});
