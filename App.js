import React, { useState } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  //TODO: can access the platform the user is using to do conditional Top or Bottom navigation

  const [loading, setLoading] = useState(true)
  //TODO: theres a couple ways to do "conditional rendering"
  if (loading) {
    return (
      <View style={styles.IndicatorWrapper}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  IndicatorWrapper: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
