import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeHeader = () => {
  return (
    <View style={{backgroundColor:'#fff'}}>
      <Icon name='twitter' size={30} color='#1C9CEA' style={{alignSelf:'center',margin:20}} />
    </View>
  )
}

export default WelcomeHeader