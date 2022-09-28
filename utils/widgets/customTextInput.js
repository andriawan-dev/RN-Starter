import React from 'react'
import {View, StyleSheet, TextInput,Text } from 'react-native'
import textStyles from '../styles/testStyles';
import { greyColor, lightGreyColor } from '../values/colors';

const CustomTextInput = ({label,placeholder}) => {
  return (
    <View>
        <Text style={textStyles.bodyText1}>{label}</Text>
        <View style={{height: 12}} />
        <TextInput 
          style={styles.inputContainer}
          placeholder={placeholder}/>
        
       
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        ...textStyles.bodyText2,
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        height: 50,
        backgroundColor: lightGreyColor,
        color: greyColor,
        borderRadius: 6,

    }
});

export default CustomTextInput