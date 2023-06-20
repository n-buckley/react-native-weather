import React from "react"
import { Text, View, SafeAreaView, StyleSheet} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style= {styles.view__safeArea}>
      <View style={styles.view__appContainer}>
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
    flex: 1
  }, 
  view__appContainer: { 
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
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
   },

   text__description: {
    fontSize: 48,
   },

   text__message: {
    fontSize: 30, 
   }
})

export default App
