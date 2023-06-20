import React from "react"
import { Text, View, SafeAreaView, StyleSheet} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style= {styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text>6</Text>
        <Text>Feels lik: 5</Text>
        <Text>High: 8 Low: 6</Text>
      </View>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }, 
  container: { 
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
  }
})

export default App
