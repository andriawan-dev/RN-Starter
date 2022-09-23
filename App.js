import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './features/home/view/homeScreen';
import { HomeRoute, SplashRoute } from './utils/values/routes_values';
import SplashScreen from './features/splash/splashScreen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL }
const App = () => {
  useEffect(() => {
    initCodePush();
  },[]);

  const initCodePush = async () => {
    const update = await codePush.checkForUpdate();
    console.log('[App.js] isUpdate',update);
    if(update){
        if(!update.isMandatory){
          codePush.sync({ installMode: codePush.InstallMode.ON_NEXT_RESUME});
        }
    }else{
      console.log('App is updated');
    }
    
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SplashRoute}>
          <Stack.Screen options={{headerShown: false}} name={SplashRoute} component={SplashScreen} />
          <Stack.Screen name={HomeRoute} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default codePush(codePushOptions)(App);
