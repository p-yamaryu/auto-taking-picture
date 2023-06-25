import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from "react-native-permissions";
import {
  PermissionsAndroid,
  Alert,
  Platform,
} from "react-native";
    
// Function to get permission for camera
export const requestCameraPermission = async () => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the camera');
        return true;
      } else {
        // console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  }

  if (Platform.OS === "ios") {
    const cameraPermissionStatus = await check(PERMISSIONS.IOS.CAMERA);

    if (cameraPermissionStatus === RESULTS.UNAVAILABLE) {
      Alert.alert("デバイスのカメラを使用することが出来ません");
      return false;
    }

    // リクエスト不可
    if (cameraPermissionStatus === RESULTS.BLOCKED) {
      // アプリの機能を利用できるように設定から権限を変更するようユーザに促すダイアログを表示させる
      promptForPermission();
      return false;
    }

    // リクエスト可能
    if (cameraPermissionStatus === RESULTS.DENIED) {
      // リクエスト結果
      const cameraPermissionRequestResult = await request(
        PERMISSIONS.IOS.CAMERA
      );

      return cameraPermissionRequestResult === RESULTS.GRANTED;
    }
    return true;
  }
};

// Function to get permission for location
export const requestLocationPermission = async () => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === "granted") {
        return true;
      } else {
        console.log("No permission to use Geolocation");
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  if (Platform.OS === "ios") {
    Geolocation.requestAuthorization("always");
  }
};