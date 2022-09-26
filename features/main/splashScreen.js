import { useEffect, useState } from "react";
import { View,Text, StyleSheet,Image,ActivityIndicator,SafeAreaView } from "react-native";
import codePush from "react-native-code-push";
import * as Progress from 'react-native-progress';
import { primaryColor } from "../../utils/values/colors";
import { mainRoute } from "../../utils/values/routes";

const SplashScreen = ({navigation}) => {
  
  const [isUpdateCodePush,setUpdateCodePush] = useState(false);
  const [progressUpdate,setProgressUpdate] = useState(0);
  useEffect(() => {
    initCodePush();
  },[]); 
  const codePushStatusDidChange = (status) => {
    switch(status) {
        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log("Checking for updates.");
            break;
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log("Downloading package.");
            break;
        case codePush.SyncStatus.INSTALLING_UPDATE:
            console.log("Installing update.");
            break;
        case codePush.SyncStatus.UP_TO_DATE:
            console.log("Up-to-date.");
            break;
        case codePush.SyncStatus.UPDATE_INSTALLED:
            console.log("Update installed.");
            break;
    }
}

const codePushDownloadDidProgress = (progress) => {
    setProgressUpdate(progress.totalBytes / progress.receivedBytes);
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
}



  const initCodePush = async () => {
    try{
      const update = await codePush.checkForUpdate();
      console.log('[SplashScreen.js] isUpdate',update);
      if(update){
        setUpdateCodePush(true);
          if(update.isMandatory){
            codePush.sync({
              installMode: codePush.InstallMode.IMMEDIATE
            },codePushStatusDidChange,codePushDownloadDidProgress,);
          }else{
            navigation.replace(mainRoute); 
          }
      }else{
        navigation.replace(mainRoute);
      }
    }catch(error){

    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/LOGO.png')} style={styles.image} />
      <Text >Page content</Text>
      <View style={styles.bottomLayout}>
        {isUpdateCodePush && <Progress.Bar 
          progress={progressUpdate} 
          width={200} style={styles.progress} 
          color={primaryColor}/>}
        
        {/* <ActivityIndicator size="large" color={primaryColor} /> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '70%',
    resizeMode: 'contain',
  },
  bottomLayout:{
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '5%',
  }
});

export default SplashScreen;