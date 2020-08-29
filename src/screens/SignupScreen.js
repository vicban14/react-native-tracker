import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
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
