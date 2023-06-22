import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  //TODO: can access the platform the user is using to do conditional Top or Bottom navigation

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.TEST_KEY}`
      )
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError('Could not fetch weather data')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, long])

  //TODO: why does it print 4 times if long/lat isnt chnaging
  if (weather) {
    console.log('the weather is:')
    console.log(weather)
  }

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
