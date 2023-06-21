import React from "react" 
import { Text, StyleSheet, View} from 'react-native'
import { Feather} from '@expo/vector-icons'

const IconText = ({iconName, iconColor, bodyText, bodyTextStyles}) => {
    return (
        <View style={styles.IconText}> 
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 

    IconText: {
        alignItems: 'center'
    },

    textTheme: {
        fontWeight: 'bold'
    },

})

export default IconText
