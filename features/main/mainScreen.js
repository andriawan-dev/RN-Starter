import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute, MyReadingRoute, ProfileRoute } from '../../utils/values/routes';
import HomeScreen from '../home/view/homeScreen';
import MyReadingScreen from '../my-reading/view/myReadingScreen';
import ProfileScreen from '../profile/view/profileScreen';
import HomeIcon from '../../assets/icons/Home.svg';
import HomeActiveIcon from '../../assets/icons/Home-active.svg';
import MyReadIcon from '../../assets/icons/my-read.svg';
import MyReadActiveIcon from '../../assets/icons/my-read-active.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import ProfileActiveIcon from '../../assets/icons/profile-active.svg';
import { useEffect } from 'react';
import CodePush from 'react-native-code-push';
const Tab = createBottomTabNavigator();
const MainScreen = () => {
    
  return (
    <Tab.Navigator initialRouteName={HomeRoute}>
      <Tab.Screen 
        name={HomeRoute} 
        component={HomeScreen}
        options={{
            tabBarStyle: {
            },
            tabBarIcon: ({focused, color, size }) => {
                if(focused){
                    return <HomeActiveIcon width="30%" />
                }else{
                    return <HomeIcon width="30%" />
                }
            },
            tabBarLabel: 'Home',
        }} />
      <Tab.Screen 
        name={MyReadingRoute} 
        component={MyReadingScreen} 
        options={{
            tabBarIcon: ({focused, color, size }) => {
                if(focused){
                    return <MyReadActiveIcon width="30%" />
                }else{
                    return <MyReadIcon width="30%" />
                }
            },
            tabBarLabel: 'My Reading',
        }}/>
      <Tab.Screen 
        name={ProfileRoute}
        component={ProfileScreen} 
        options={{
            tabBarIcon: ({focused, color, size }) => {
                if(focused){
                    return <ProfileActiveIcon width="30%" />
                }else{
                    return <ProfileIcon width="30%" />
                }
            },
            tabBarLabel: 'Profile',
        }} />
    </Tab.Navigator>
  );
}

export default MainScreen;