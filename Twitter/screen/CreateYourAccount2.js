import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const CreateYourAccount1 = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.titleText}>Create your account</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('CreateYourAccount1');
        }}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          editable={false}
          selectTextOnFocus={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('CreateYourAccount1');
        }}>
        <TextInput
          placeholder="Email address"
          style={styles.textInput}
          onPress={() => {
            navigation.navigate('CreateYourAccount1');
          }}
          editable={false}
          selectTextOnFocus={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.textInput, {marginTop: 50}]}
        onPress={() => {
          navigation.navigate('CreateYourAccount1');
        }}>
        <Text style={{fontSize: 14, color: '#000', marginLeft: 5}}>
          <Text style={{color: '#989898'}}>Date of birth</Text>
        </Text>
      </TouchableOpacity>
      <Text style={styles.smallText}>
        By signing up, you agree to our Terms, Privacy Policy, and Cookie Use.
        Twitter may use your contact information, including your email address
        and phone number for purposes outlines in out Privacy Policy, like
        keeping your account secure and personalizing out services, including
        ads. Learn more. Others will be able to find you by email or phone
        number, when provided, unless you choose otherwise here.
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonCreateAccount}
        onPress={() => {
          navigation.navigate('AccountVerification');
        }}>
        <Text style={styles.buttonTwitterText}>Sign up</Text>
      </TouchableOpacity>
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
  smallText: {
    fontSize: 12,
    marginTop: 100,
    textAlign: 'justify',
  },
  buttonCreateAccount: {
    width: '100%',
    borderRadius: 30,
    padding: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#1C9CEA',
    marginTop:'auto',
    marginBottom:50
  },
  buttonTwitterText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default CreateYourAccount1;
