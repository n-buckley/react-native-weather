import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Count changed`)
  }, [count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease'}
        onPress={() => {
          setCount(count - 1)
        }}
      />
      <Button
        color={'red'}
        title={'Increase'}
        onPress={() => {
          setNewCount(newCount + 1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease'}
        onPress={() => {
          setNewCount(newCount - 1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },

  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter
