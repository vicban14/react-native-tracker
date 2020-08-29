import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({ routeName })
      }}
    >
      <Text style={styles.link}>{linkText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    marginLeft: 12,
    color: 'blue',
  },
})

export default withNavigation(NavLink)
