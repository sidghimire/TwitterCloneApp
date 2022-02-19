import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateYourAccount1 = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [dobPickerVisible, setDobPickerVisible] = useState(false);

  const handleAddAccount = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('dob', dob.toLocaleDateString());
      navigation.navigate('CreateYourAccount2')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.titleText}>Create your account</Text>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email address"
        style={styles.textInput}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.textInput, {marginTop: 50}]}
        onPress={() => {
          setDobPickerVisible(true);
        }}>
        <Text style={{fontSize: 14, color: '#000', marginLeft: 5}}>
          {!dobPickerVisible ? (
            <Text style={{color: '#989898'}}>Date of birth</Text>
          ) : (
            dob.toLocaleDateString()
          )}
        </Text>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior="none"
        style={{
          flex: 1,
        }}>
        {dobPickerVisible ? (
          <DatePicker
            date={dob}
            mode="date"
            onDateChange={setDob}
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        ) : null}
      </KeyboardAvoidingView>
      {email == '' || name == '' || dob == '' ? (
        <TouchableOpacity
          style={[styles.nextButton, styles.nextButtonDisabled]}
          onPress={() => navigation.navigate('CreateYourAccount2')}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleAddAccount}
          style={styles.nextButton}
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
    marginBottom: 30,
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
});

export default CreateYourAccount1;
