import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { TEST_KEY_ENV } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${TEST_KEY_ENV}&units=imperial`
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

  return [loading, error, weather]
}