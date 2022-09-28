import React from 'react'
import { StyleSheet, TouchableHighlight,View,Text } from 'react-native';

const CustomButton = (() => {
    const primary = ({text}) => {
        return <TouchableHighlight>
            <View>
                <Text></Text>
            </View>
        </TouchableHighlight>
    }   
    
    const secondary = ({text}) => {

    }

  return {
    primary: primary,
    secondary: secondary,
  }
})();

const styles = StyleSheet.create({
    primary: {
        flexDirection: 'row',
        flex:1,
    },
    secondary: {

    },
});

export default CustomButton