import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeHeader = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',flexDirection:'row'}}>
      <Icon name='twitter' onPress={()=>navigation.goBack()} size={30} color='#1C9CEA' style={{alignSelf:'center',marginRight:'auto',marginLeft:'auto'}} />
    </View>
  )
}

export default WelcomeHeader