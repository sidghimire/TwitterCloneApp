import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
const CameraImage = require('../resources/images/cameraImage.png');
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CreateYourAccount1 = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const getCameraImage = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: true,
      includeBase64: true,
    }).then(async img => {
      await AsyncStorage.setItem('profile', img.path);
      setImage(img.path);
      setModalVisible(false);
    });
  };
  const getGalleryImage = () => {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
    }).then(async img => {
      await AsyncStorage.setItem('profile', img.path);
      setImage(img.path);
      setModalVisible(false);
    });
  };
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.titleText}>Pick a profile picture</Text>
      <Text style={styles.smallText}>
        Have a favorite selfie? Upload it now
      </Text>
      <TouchableOpacity
        style={styles.imageView}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image
          source={image == null ? CameraImage : require(image)}
          style={styles.cameraImage}
        />
        
        
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 'auto'}}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('DescribeYourself')}
          activeOpacity={0.8}>
          <Text style={[styles.buttonText, {color: '#000'}]}>Skip for now</Text>
        </TouchableOpacity>
        {image == '' ? (
          <TouchableOpacity
            disabled={true}
            style={[styles.nextButton, styles.nextButtonDisabled]}
            onPress={() => navigation.navigate('DescribeYourself')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('DescribeYourself')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <Icon
              name="close-thick"
              onPress={() => setModalVisible(false)}
              size={30}
              color="#fff"
              style={{marginLeft: 'auto', marginBottom: 'auto'}}
            />
            <View style={{marginBottom: 'auto'}}>
              <TouchableOpacity
                style={styles.cameraButton}
                onPress={getCameraImage}>
                <Text style={styles.cameraButtonText}>OpenCamera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cameraButton}
                onPress={getGalleryImage}>
                <Text style={styles.cameraButtonText}>Choose From Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  cameraImage: {
    resizeMode: 'contain',
  },
  imageView: {
    alignSelf: 'center',
    padding: 30,
    borderWidth: 1,
    borderColor: '#989898',
    borderStyle: 'dashed',
    borderRadius: 30,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 30,
  },
  cameraButton: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
  },
  cameraButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CreateYourAccount1;
