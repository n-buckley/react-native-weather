import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()

  //TODO: why does it print 4 times if long/lat isnt chnaging
  if (weather) {
    console.log('the weather is:')
    console.log(weather)
  }

  //TODO: theres a couple ways to do "conditional rendering"
  if (weather && weather.list) {
    //TODO: can access the platform the user is using to do conditional Top or Bottom navigation
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.IndicatorWrapper}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <ErrorItem />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  IndicatorWrapper: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
