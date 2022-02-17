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
const CameraImage = require('../resources/images/cameraImage.png');

const CreateYourAccount1 = ({navigation}) => {
  const [bio, setBio] = useState('');
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.titleText}>Describe yourself</Text>
      <Text style={styles.smallText}>
        What makes you special?
        Don't think too hard, just have fun with it.
      </Text>
      <TextInput
        placeholder="Your Bio"
        style={styles.textInput}
        value={bio}
        onChangeText={text => setBio(text)}
      />
      <View style={{flexDirection: 'row',marginTop:'auto'}}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('ChooseUsername')}
          activeOpacity={0.8}>
          <Text style={[styles.buttonText, {color: '#000'}]}>Skip for now</Text>
        </TouchableOpacity>
        {bio == '' ? (
          <TouchableOpacity
            disabled={true}
            style={[styles.nextButton, styles.nextButtonDisabled]}
            onPress={() => navigation.navigate('ChooseUsername')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('ChooseUsername')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Next</Text>
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
    marginTop: 30,
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
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 12,
    width: '25%',
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
