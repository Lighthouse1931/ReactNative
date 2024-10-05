import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from '../navigation/StackNavigator'
import TabNavigator from '../navigation/TabNavigator'
import DrawerNavigator from '../navigation/DrawerNavigator'
import TwoFactorAuthView from '../components/TwoFactorAuthView'

const index = () => {
  return (
      <TwoFactorAuthView></TwoFactorAuthView>
  )
}


export default index