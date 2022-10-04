import { useEffect } from "react";
import { View,Text, StyleSheet, TextInput, SafeAreaView, Image, Button } from "react-native";
import { initGoogleSignin, onGoogleButtonPress } from "../../../../utils/helpers/googleLoginHelper";
import textStyles from "../../../../utils/styles/testStyles";
import CustomTextInput from "../../../../utils/widgets/customTextInput";


const LoginScreen = () => {
  useEffect(() => {
    initGoogleSignin();
  },[]);
  return (
    <SafeAreaView style={styles.container}>
        <Image 
          style={styles.bgImage}
          resizeMode={"cover"}
          source={require('../../../../assets/images/auth/authBackground.png')} />
        {/* <Text>
          Aku mencari cinta sejati gg gaming sdlfjsdlkfj
        </Text> */}
        <View style={styles.cardForm}>
          <Text 
            style={{
              ...textStyles.headline6,
              textAlign: 'center',
              }}>Login</Text>
              <View style={{height: 12}} />
          <CustomTextInput 
            label={'Username/Email'} 
            placeholder={'Username'}/>
          <View style={{height: 12}} />
          <CustomTextInput 
            label={'Password'}
            placeholder={'Password'} />
          <Button 
            onPress={async () => {
              onGoogleButtonPress().then((auth) => console.log(`Signed in with Google! info: ${auth}`))
            }} 
            title={'Google'}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },  
  cardForm: {
    padding: 18,
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 25,
  },
  bgImage: {
    position: 'absolute',
    width: '110%',
    right: -26,
    left: -26,
  },
});
export default LoginScreen