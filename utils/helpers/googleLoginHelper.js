import auth from '@react-native-firebase/auth';
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';

export function initGoogleSignin(){
    GoogleSignin.configure({
      webClientId: '618433091190-vribkmrpujl1oidv75r8tl3tmcpf570q.apps.googleusercontent.com',
    });
}

export async function onGoogleButtonPress() {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //   // user cancelled the login flow
    // } else if (error.code === statusCodes.IN_PROGRESS) {
    //   // operation (e.g. sign in) is in progress already
    // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //   // play services not available or outdated
    // } else {
    //   // some other error happened
    // }
  }
}