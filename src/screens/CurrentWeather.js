import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    weather,
    main: { temp, feels_like, temp_max, temp_min }
  } = weatherData
  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        styles.SafeArea,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={styles.Header}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="black"
        />
        <Text>Current Weather</Text>
        <Text style={styles.header_temp}>{temp}</Text>
        <Text style={styles.header_feels}>{`Feels like: ${feels_like}`}</Text>
        <RowText
          leftText={`High: ${temp_max}`}
          rightText={`Low: ${temp_min}`}
          containerStyle={styles.HighLow}
          leftStyle={styles.highLow}
          rightStyle={styles.highLow}
        />
      </View>
      <RowText
        leftText={weather[0].description}
        rightText={weatherType[weatherCondition].message}
        containerStyle={styles.Body}
        leftStyle={styles.body_description}
        rightStyle={styles.body_message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: 'pink',
    flex: 1
  },
  Header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header_temp: {
    color: 'black',
    fontSize: 48
  },

  header_feels: {
    fontSize: 30,
    color: 'black'
  },

  highLow: {
    fontSize: 20,
    color: 'black'
  },
  HighLow: {
    flexDirection: 'row'
  },

  Body: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },

  body_description: {
    fontSize: 48
  },

  body_message: {
    fontSize: 30
  }
})

export default CurrentWeather
