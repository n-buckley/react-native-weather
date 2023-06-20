import React from "react" 
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native'
import { Feather} from '@expo/vector-icons'

const Item = (props) => {
    const { dt_txt, min, max, consition} = props
    return (
        <View>
            <Feather name="sun" size={100} color='black' />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

export const UpcomingWeather = () => {
    const DATA = [
        {
            "main": {
            "temp_min": 296.34,
            "temp_max": 298.24,
            },
            "weather": [
                {
                    "main": "Rain",
                }
            ],
            "dt_txt": "2022-08-30 16:00:00",
        }, 
        {
            "main": {
            "temp_min": 296.34,
            "temp_max": 298.24,
            },
            "weather": [
                {
                    "main": "Rain",
                }
            ],
            "dt_txt": "2022-08-30 16:00:00",
        }, 
        {
            "main": {
            "temp_min": 296.34,
            "temp_max": 298.24,
            },
            "weather": [
                {
                    "main": "Rain",
                }
            ],
            "dt_txt": "2022-08-30 16:00:00",
        }, 
    ]
    const renderItem = ({item}) => (
        <Item 
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max} 
        />
    )
    return (
        <SafeAreaView style={styles.view__safeArea}> 
            <Text> Upcoming Weather</Text>
            <FlatList 
            data={DATA} 
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}/> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    //style={styles.} 

    view__safeArea: {
        flex: 1,
      }, 
})