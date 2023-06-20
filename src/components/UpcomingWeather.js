import React from "react" 
import {SafeAreaView, View, Text, StyleSheet} from 'react-native'

export const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.view__safeArea}> 
            <Text> Upcoming Weather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    //style={styles.} 

    view__safeArea: {
        flex: 1,
      }, 
})