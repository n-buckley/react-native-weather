import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.Item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="white" />
      <View style={styles.DateTextWrapper}>
        <Text style={styles.item_date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.item_date}>
          {moment(dt_txt).format('h:mm:ss a')}
        </Text>
      </View>
      <Text style={styles.item_temp}>{`${Math.round(min)}°/${Math.round(
        max
      )}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  //style={styles.}

  Item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'lightslategrey'
  },

  item_temp: {
    color: 'white',
    fontSize: 20
  },

  item_date: {
    color: 'white',
    fontSize: 15
  },

  DateTextWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem
