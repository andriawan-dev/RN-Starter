import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './features/home/view/homeScreen';
import { HomeRoute, loginRoute, mainRoute, SplashRoute } from './utils/values/routes';
import SplashScreen from './features/main/splashScreen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MainScreen from './features/main/mainScreen';
import LoginScreen from './features/auth/view/login/loginScreen';

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SplashRoute}>
          <Stack.Screen options={{headerShown: false}} name={SplashRoute} component={SplashScreen} />
          <Stack.Screen options={{headerShown: false}} name={mainRoute} component={MainScreen} />
          <Stack.Screen options={{headerShown: false}} name={loginRoute} component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
