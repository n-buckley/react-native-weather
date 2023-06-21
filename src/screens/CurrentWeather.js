import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.Header}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={styles.header_temp}>6</Text>
        <Text style={styles.header_feels}>Feels like: 5</Text>
        <RowText
          leftText={'High: 8'}
          rightText={'Low: 6'}
          containerStyle={styles.HighLow}
          leftStyle={styles.highLow}
          rightStyle={styles.highLow}
        />
      </View>
      <RowText
        leftText={'Its sunny'}
        rightText={'Its perfect t-shirt weather'}
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
