import { useEffect, useState } from "react";
import { View,Text, StyleSheet,Image,ActivityIndicator,SafeAreaView } from "react-native";
import codePush from "react-native-code-push";

const SplashScreen = ({navigate}) => {
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
    const update = await codePush.checkForUpdate();
    console.log('[SplashScreen.js] isUpdate',update);
    if(update){
      setUpdateCodePush(true);
        if(update.isMandatory){
          codePush.sync({
            installMode: codePush.InstallMode.IMMEDIATE
          },codePushStatusDidChange,codePushDownloadDidProgress,);
        }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
       <Image source={require('../../assets/images/LOGO.png')} style={styles.image} />
      <Text >Page content</Text>
          <View style={styles.bottomLayout}>
     <ActivityIndicator size="large" color="#0000ff" />
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
    position: 'absolute',
    left:0,
    right:0,
    bottom: '5%',
  }
});

export default SplashScreen;