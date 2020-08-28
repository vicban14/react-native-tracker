import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer>
        <Button
          title='Go to Signin'
          onPress={() => {
            navigation.navigate('Signin')
          }}
        />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
})

export default SignupScreen
