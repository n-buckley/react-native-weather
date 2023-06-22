import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  //TODO: can access the platform the user is using to do conditional Top or Bottom navigation
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App
