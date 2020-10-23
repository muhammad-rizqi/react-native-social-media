import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/styles';
import ChatItem from '../components/ChatItem';
import io from 'socket.io-client';
import {Component} from 'react';

class ChatScreen extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      chatMessages: [],
    };
  }
  componentDidMount() {
    this.socket = io('http://192.168.43.131:3000');
    this.socket.on('chat messages', (msg) =>
      this.setState({chatMessages: [...this.state.chatMessages, msg]}),
    );
  }
  sendMessage() {
    this.socket.emit('chat messages', this.state.message);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Image
            source={require('../assets/icons/go-back-left-arrow.png')}
            style={styles.icon}
          />
          <TouchableOpacity style={styles.appBarText}>
            <Text style={styles.appBarTitle}>Hello</Text>
            <Text style={styles.appBarDesc}>Online</Text>
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor="#212227" />
        <ScrollView style={[styles.pageContainer, {flex: 1}]}>
          {this.state.chatMessages.map((msg, index) => (
            <ChatItem key={index} outgoing={false} message={msg} time="12.00" />
          ))}
        </ScrollView>
        <View style={styles.composeMessage}>
          <TextInput
            placeholderTextColor="#4b4d5a"
            placeholder="Type a message ..."
            style={styles.input}
            onChangeText={(messageText) =>
              this.setState({message: messageText})
            }
          />
          <TouchableOpacity onPress={() => this.sendMessage()}>
            <Image
              source={require('../assets/icons/send-button.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const ChatScreen = () => {
//   const socket = io('http://192.168.1.43:3000');

//   const [message, setMessage] = useState('');
//   const sendMessage = () => {
//     socket.emit('chat messages', message);
//   };
//   const [chatMessages, setChatMessages] = useState([]);
//   const scrollViewRef = useRef();
//   useEffect(() => {
//     socket.on('chat messages', (msg) =>
//       setChatMessages([...chatMessages, msg]),
//     );
//   });
//   return (
//     <View style={styles.container}>
//       <View style={styles.appBar}>
//         <Image
//           source={require('../assets/icons/go-back-left-arrow.png')}
//           style={styles.icon}
//         />
//         <TouchableOpacity style={styles.appBarText}>
//           <Text style={styles.appBarTitle}>Hello</Text>
//           <Text style={styles.appBarDesc}>Online</Text>
//         </TouchableOpacity>
//       </View>
//       <StatusBar backgroundColor="#212227" />
//       <ScrollView
//         style={[styles.pageContainer, {flex: 1}]}
//         ref={scrollViewRef}
//         onContentSizeChange={() =>
//           scrollViewRef.current.scrollToEnd({animated: false})
//         }>
//         {chatMessages.map((msg, index) => (
//           <ChatItem key={index} outgoing={false} message={msg} time="12.00" />
//         ))}
//       </ScrollView>
//       <View style={styles.composeMessage}>
//         <TextInput
//           placeholderTextColor="#4b4d5a"
//           placeholder="Type a message ..."
//           style={styles.input}
//           onChangeText={(messageText) => setMessage(messageText)}
//         />
//         <TouchableOpacity onPress={() => sendMessage()}>
//           <Image
//             source={require('../assets/icons/send-button.png')}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

export default ChatScreen;
