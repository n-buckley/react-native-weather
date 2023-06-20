import React from "react"
import { Text, View, SafeAreaView, StyleSheet} from 'react-native'
import { Feather} from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style= {styles.view__safeArea}>
      <View style={styles.view__wrapperHeader}>
        <Feather name="sun" size={100} color='black' />
        <Text>Current Weather</Text>
        <Text style={styles.text__temp}>6</Text>
        <Text style={styles.text__feels}>Feels like: 5</Text>
        <View style={styles.view__wrapperHighLow}> 
          <Text style={styles.text__highLow}>High: 8</Text>
          <Text style={styles.text__highLow}>Low: 6</Text>
        </View>
      </View>
      <View styles={styles.view_wrapperBody}>
        <Text style={styles.text__description}>Its sunny</Text>
        <Text style={styles.text__message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  view__safeArea: {
    backgroundColor: 'pink',
    flex: 1,
  }, 
  view__wrapperHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text__temp: {
    color: 'black',
    fontSize: 48
  }, 

   text__feels: {
    fontSize: 30, 
    color: 'black'
   },

   text__highLow: {
    fontSize: 20, 
    color: 'black'
   }, 
   view__wrapperHighLow: {
    flexDirection: 'row',
   },

   view_wrapperBody: {
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
   },

   text__description: {
    fontSize: 48,
   },

   text__message: {
    fontSize: 30, 
   }
})

export default CurrentWeather
