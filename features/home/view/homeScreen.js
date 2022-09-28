import { useEffect } from "react";
import { View,Text, Button, StyleSheet } from "react-native"
import { useNavigationContainerRef } from "@react-navigation/native";
import { loginRoute } from "../../../utils/values/routes";
import textStyles from "../../../utils/styles/testStyles";
const HomeScreen = ({navigation}) => {
  const useNavigate= useNavigationContainerRef();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button 
          title="Login" 
          onPress={() => {
            navigation.navigate(loginRoute);
          }} />
      ),
    });
  },[]);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={textStyles.headline4}>Headline 4</Text>
      <Text style={textStyles.headline5}>Headline 5</Text>
      <Text style={textStyles.headline6}>Headline 6</Text>
      <Text style={textStyles.subtitle1}>Subtitle 1</Text>
      <Text style={textStyles.subtitle2}>Subtitle 2</Text>
      <Text style={textStyles.bodyText1}>BodyText 1</Text>
      <Text style={textStyles.bodyText2}>BodyText 2</Text>
      <Text style={textStyles.button}>Button</Text>
      <Text style={textStyles.caption}>Caption</Text>
      <Text style={textStyles.overline}>Overline</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 20,
    letterSpacing: 0.2,
  }
});
export default HomeScreen;
