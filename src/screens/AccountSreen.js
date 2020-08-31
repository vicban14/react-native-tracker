import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>AccountScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default AccountScreen
