import React from "react" 
import { SafeAreaView, Text, StyleSheet} from 'react-native'

 const City = () => {
    return (
        <SafeAreaView style={styles.SafeArea}>
            <Text style={styles.Text}>City</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    SafeArea: {
        flex: 1,
      }, 

})

export default City