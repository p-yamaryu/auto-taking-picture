import React, { useState, useEffect, useRef } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import Styled from "styled-components/native";
import { MapHomeIcon } from "./style";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Logo from "../assets/header-camera.svg";
import { MainStackParamList, ROUTE_HOME } from "./routes";
import ReactInterval from "react-interval";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import Geolocation from "react-native-geolocation-service";
import { requestCameraPermission, requestLocationPermission } from "./function/permission";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

type MapsProps = NativeStackScreenProps<MainStackParamList, "Maps">;

const LATITUDE_DELTA = 0.002;
const LONGITUDE_DELTA = 0.002;

const Container = Styled.View`
    flex: 1;
`;

export default function MapScreen({ navigation }: MapsProps) {
  const devices = useCameraDevices();
  const camera = useRef(null);
  const device = devices.front; // front/backで内外カメラ切り替えできる
  
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    requestLocationPermission();
    requestCameraPermission();
  }, []);

  const getCapture = async () => {
      const snapshot = await camera.current.takeSnapshot({
        quality: 85,
        skipMetadata: true,
      });
      CameraRoll.save(snapshot.path);
  };

  if (device == null)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        >
        <Image
            source={require("./../assets/walking-man.png")}
            style={{ width: 44, height: 44 }}
            resizeMode="contain"
        />
        </Marker>
      </MapView>

      <Camera
        ref={camera}
        device={device}
        photo={true}
        isActive={true}
        style={styles.camera}
      />

      <MapHomeIcon onPress={() => navigation.navigate(ROUTE_HOME)}>
          <Logo />
      </MapHomeIcon>

      <ReactInterval
        timeout={3000}
        enabled={true}
        callback={() => {
          getCapture();
          getLocation();
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  camera: {
    flex: 1,
    height: "50%",
    width: "100%",
  },
});
