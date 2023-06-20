import React from "react" 
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import { Feather} from '@expo/vector-icons'

 const City = () => {
    return (
        <SafeAreaView style={styles.SafeArea}>
            <ImageBackground
                source={require('../../assets/pexels-bob-ward-3347244.jpg')}
                style={styles.ImageBackground}
            >
                <Text style={[styles.city_name, styles.city_text]}>City Name</Text>
                <Text style={[styles.city_country, styles.city_text]}>Country Name</Text>
                <View style={styles.Population}> 
                    <Feather name={'user'} size={50} color={'red'}/>
                    <Text style={styles.population_text}>8000</Text>
                </View>
                <View style={styles.RiseSet}> 
                    <Feather name={'sunrise'} size={50} color={'white'}/>
                    <Text style={styles.riseSet_text}>10:46:58 AM</Text>
                    <Feather name={'sunset'} size={50} color={'white'}/>
                    <Text style={styles.riseSet_text}>17:28:15 PM</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    SafeArea: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'lightblue',
    },
      
    ImageBackground: {
        flex: 1,
    },

    city_text: {
        justifyContent: 'center', 
        alignSelf: 'center', 
        color: 'white', 
        fontWeight: 'bold',
    },
    city_name: {
        fontSize: 40, 
    },

    city_country: {
        fontSize: 30,
    },

    Population: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 30,
    }, 

    population_text: {
        fontSize: 35,
        marginLeft: 7.5, 
        color: 'red',
        fontWeight: 'bold',
    },

    RiseSet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around', 
        marginTop: 30,
    }, 

    riseSet_text: {
        fontSize: 20, 
        color: 'white', 
        fontWeight: 'bold'
    },

})

export default City