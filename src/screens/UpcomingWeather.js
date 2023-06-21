import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = () => {
  const DATA = [
    {
      main: {
        temp_min: 296.34,
        temp_max: 298.24
      },
      weather: [
        {
          main: 'Rain'
        }
      ],
      dt_txt: '2022-08-30 16:00:00'
    },
    {
      main: {
        temp_min: 296.34,
        temp_max: 298.24
      },
      weather: [
        {
          main: 'Rain'
        }
      ],
      dt_txt: '2022-08-30 17:00:00'
    },
    {
      main: {
        temp_min: 296.34,
        temp_max: 298.24
      },
      weather: [
        {
          main: 'Rain'
        }
      ],
      dt_txt: '2022-08-30 18:00:00'
    }
  ]
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ImageBackground
        source={require('../../assets/pexels-paul-voie-2627945.jpg')}
        style={styles.ImageBackground}
      >
        <Text> Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  //style={styles.}

  SafeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightblue'
  },
  ImageBackground: {
    flex: 1
  }
})

export default UpcomingWeather
