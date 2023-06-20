import React from "react" 
import { View, Text, StyleSheet} from 'react-native'
import { Feather} from '@expo/vector-icons'

const ListItem = (props) => {
    const { dt_txt, min, max, condition} = props
    return (
        <View style={styles.Item} >
            <Feather name="sun" size={50} color='white' />
            <Text style={styles.item_date}>{dt_txt}</Text>
            <Text style={styles.item_temp}>{min}</Text>
            <Text style={styles.item_temp}>{max}</Text>
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
        backgroundColor: 'pink',
    },

    item_temp: {
        color: 'white',
        fontSize: 20,
    },

    item_date: {
        color: 'white',
        fontSize: 15,
    },
})

export default ListItem
