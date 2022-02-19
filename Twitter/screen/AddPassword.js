import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateYourAccount1 = ({navigation}) => {
  const [password, setPassword] = useState('');

  const handleAddAccount = async () => {
    try {
      await AsyncStorage.setItem('password', password);
      navigation.navigate('PickProfilePicture')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.titleText}>You'll need a password</Text>
      <Text style={styles.smallText}>
        Make sure it's 8 characters or more.
      </Text>
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {password=="" ? (
        <TouchableOpacity
          disabled={true}
          style={[styles.nextButton, styles.nextButtonDisabled]}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleAddAccount}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
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
    marginTop: 30,
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 12,
    width: '25%',
    marginTop: 'auto',
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
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 12,
    width: '25%',
    marginTop: 'auto',
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
});

export default CreateYourAccount1;
