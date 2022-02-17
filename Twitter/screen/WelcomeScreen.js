import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        See what's happening in the world right now.
      </Text>
      <View style={{marginTop: 'auto'}}>
        <TouchableOpacity style={styles.buttonGoogle}>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              flexDirection: 'row',
            }}>
            <Icon name="google" size={20} color="#E94134" />
            <Text style={styles.buttonGoogleText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.underlineOrView}>
          <Text style={styles.orText}>Or</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonCreateAccount} onPress={()=>{navigation.navigate('CreateYourAccount1')}}>
          <Text style={styles.buttonTwitterText}>Create new account</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>
        By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.bottomText2}>Have an account already?</Text>
        <TouchableOpacity>
          <Text style={styles.bottomText3}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: 'auto',
  },
  buttonGoogle: {
    width: '100%',
    borderColor: '#e9e9e9',
    borderWidth: 1,
    borderRadius: 30,
    padding: 15,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonCreateAccount: {
    width: '100%',
    borderRadius: 30,
    padding: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#1C9CEA',
  },
  buttonGoogleText: {
    fontWeight: 'bold',
    color: '#000',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
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
  underlineOrView: {
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  orText: {
    fontSize: 15,
    alignSelf: 'center',
    position: 'relative',
    top: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  bottomText: {
    fontSize: 11,
    marginTop: 20,
    marginHorizontal: 10,
  },
  bottomText2: {
    fontSize: 13,
    marginTop: 20,
    marginHorizontal: 10,
  },
  bottomText3: {
    fontSize: 13,
    marginTop: 20,
    color: '#1C9CEA',
  },
});

export default WelcomeScreen;
