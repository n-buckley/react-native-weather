import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'

const App = () => {
  //TODO: can access the platform the user is using to do conditional Top or Bottom navigation
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <Counter />
    </NavigationContainer>
  )
}

export default App
