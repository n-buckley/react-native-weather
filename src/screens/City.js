import React from "react" 
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import IconText from '../components/IconText'

 const City = () => {
    //TODO: is descrutuing styles something thats typical/good practice? 
    return (
        <SafeAreaView style={styles.SafeArea}>
            <ImageBackground
                source={require('../../assets/pexels-bob-ward-3347244.jpg')}
                style={styles.ImageBackground}
            >
                <Text style={[styles.city_name, styles.city_text]}>City Name</Text>
                <Text style={[styles.city_country, styles.city_text]}>Country Name</Text>
                <View style={[styles.Population, styles.layout_rowCenter]}> 
                    <IconText
                        iconName={'user'}
                        iconColor={'red'}
                        bodyText={'8000'}
                        bodyTextStyles={styles.population_text}
                    />
                </View>
                <View style={[styles.RiseSet, styles.layout_rowCenter]}> 
                <IconText
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyText={'10:46:58 AM'}
                        bodyTextStyles={styles.riseSet_text}
                    />
                    <IconText
                        iconName={'sunset'}
                        iconColor={'white'}
                        bodyText={'17:28:15 PM'}
                        bodyTextStyles={styles.riseSet_text}
                    />
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

    layout_rowCenter: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },

    Population: {
        
        justifyContent: 'center',
        marginTop: 30,
    }, 

    population_text: {
        fontSize: 35,
        marginLeft: 7.5, 
        color: 'red',
    },

    RiseSet: {
        justifyContent: 'space-around', 
        marginTop: 30,
    }, 

    riseSet_text: {
        fontSize: 20, 
        color: 'white', 
    },

})

export default City