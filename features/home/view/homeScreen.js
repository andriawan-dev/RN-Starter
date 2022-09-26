import { useEffect } from "react";
import { View,Text, Button } from "react-native"
import { useNavigationContainerRef } from "@react-navigation/native";
import { loginRoute } from "../../../utils/values/routes";
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
      <Text>test update mantap</Text>
    </View>
  );
}

export default HomeScreen;
