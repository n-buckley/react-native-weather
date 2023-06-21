import React from "react"
import { Text, View} from 'react-native'

const RowText = ({leftText, rightText, leftStyle, rightStyle, containerStyle}) => {
    //TODO: whats the best way to deconstruct props? in the =()=> or as a const?
  return (
        <View style={containerStyle}> 
          <Text style={leftStyle}>{leftText}</Text>
          <Text style={rightStyle}>{rightText}</Text>
        </View>
    )
}

export default RowText