import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CreateYourAccount1 = ({navigation}) => {
  const [username, setUsername] = useState('');
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.titleText}>What should we call you?</Text>
      <Text style={styles.smallText}>
        Your @username is unique. You can always change it later.
      </Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{marginTop:45,fontSize:20,marginRight:10}}>
              @
          </Text>
        <View style={{flex:1}}>
          <TextInput
            placeholder="username"
            style={styles.textInput}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 'auto'}}>
        
        {username == '' ? (
          <TouchableOpacity
            disabled={true}
            style={[styles.nextButton, styles.nextButtonDisabled]}
            onPress={() => navigation.navigate('CreateYourAccount2')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Begin Journey</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('CreateYourAccount2')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Begin Journey</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titleText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1,
    paddingBottom: 7,
    width: '80%',
  },

  nextButton: {
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 12,
    width: '25%',
    marginLeft: 'auto',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  nextButtonDisabled: {
    backgroundColor: '#797979',
  },
  smallText: {
    fontSize: 12,
    textAlign: 'justify',
  },
  nextButton: {
    backgroundColor: '#1C9CEA',
    borderRadius: 50,
    padding: 12,
    width:"100%",
    marginLeft: 'auto',
  },
  skipButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
    width: '35%',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  nextButtonDisabled: {
    backgroundColor: '#797979',
  },
  textInput: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1,
    paddingBottom: 7,
    marginTop: 30,
  },
});

export default CreateYourAccount1;
