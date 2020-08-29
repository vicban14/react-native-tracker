import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({ routeName })
        }}
      >
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </Spacer>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
})

export default withNavigation(NavLink)
