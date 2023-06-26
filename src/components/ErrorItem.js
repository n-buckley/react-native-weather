import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = ({ weatherData }) => {
  return (
    <View style={styles.ErrorItem}>
      <Text style={styles.errorMessage}>Sorry something went wrong</Text>
      <Feather name={'frown'} size={100} coloe={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  ErrorItem: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  errorMessage: {
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 10,
    fontSize: 30
  }
})

export default ErrorItem
