import React, { useState, useRef } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import {
  RootView,
  DetailHeaderContainer,
  DetailHeaderContainerRow,
  TripHomeIcon,
  TripInfoHorizontal,
  TripInfoVertical,
  TripInfoItem,
  TripInfoDate,
  TripInfoText,
  TripInfoTextHorizontal,
  TripInfoValue,
  TripInfoUnit,
  TripIcon,
  TripIconTouchable,
  Separator,
  SeparatorBar,
  MyColors,
} from "./style";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";
import Logo from "../assets/logo.svg";
import Calories from "../assets/calories.svg";
import Clock from "../assets/clock.svg";
import ThumbsUp from "../assets/like.svg";
import FaceHappy from "../assets/face_happy.svg";

import { ChevronDown, ChevronUp } from "react-native-feather";

import { MainStackParamList, ROUTE_HOME } from "./routes";

const { teal, black } = MyColors;

type TripDetailProps = NativeStackScreenProps<MainStackParamList, "TripDetail">;

// map pin clustering: https://dev.to/upsilon_it/how-to-do-map-clustering-with-react-native-10ih
export default function TripDetailScreen({
  navigation,
  tripInfo,
}: TripDetailProps) {
  const [isExpanded, setExpanded] = useState(false);
  // tripInfo = {
  //   time: 99,
  //   timeUnit: "min",
  //   cal: 999,
  //   calUnit: "kcal",
  //   region: {
  //     latitude: 51.5079145, // (maxLat - minLat)/2
  //     longitude: -0.0899163, // (maxLng - minLng)/2
  //     latitudeDelta: 0.01,
  //     longitudeDelta: 0.01,
  //   },
  //   coordinate: {
  //     latitude: 35.67714827145542,
  //     longitude: 139.6551462687416,
  //   }
  // });
  const mapRef = useRef(null);

  return (
    <RootView>
      <MapView
        ref={mapRef}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        initialRegion={tripInfo.region}
        provider={PROVIDER_GOOGLE}
        scrollEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        toolbarEnabled={
          false
        } /* hide google buttons for navigation and open in GMaps */
        moveOnMarkerPress={false}
      >
        {tripInfo.markers.map((locationMarker, idx) => {
          return (
            <Marker
              key={idx}
              title={locationMarker.title}
              description={locationMarker.description}
              coordinate={locationMarker.coordinate}
              pinColor={locationMarker.color}
            />
          );
        })}
      </MapView>
      {/* draw icon and text input on top of google maps */}
      <DetailHeaderContainer>
        <TripHomeIcon onPress={() => navigation.navigate(ROUTE_HOME)}>
          <Logo width={40} height={40} />
        </TripHomeIcon>
        <DetailHeaderContainerRow>
          {/* TouchableOpacity */}
          {isExpanded ? (
            <TripInfoVertical>
              <TripInfoDate>Today's Total</TripInfoDate>
              <Separator />
              <TripInfoItem>
                <Clock width={40} height={40} />
                <TripInfoText>
                  <TripInfoValue>{tripInfo.time}</TripInfoValue>
                  <TripInfoUnit>{tripInfo.timeUnit}</TripInfoUnit>
                </TripInfoText>
                <TripIcon>
                  <FaceHappy width={24} height={24} />
                </TripIcon>
              </TripInfoItem>
              <Separator />
              <TripInfoItem>
                <Calories width={40} height={40} />
                <TripInfoText>
                  <TripInfoValue>{tripInfo.cal}</TripInfoValue>
                  <TripInfoUnit>{tripInfo.calUnit}</TripInfoUnit>
                </TripInfoText>
                <TripIcon>
                  <ThumbsUp width={24} height={24} />
                </TripIcon>
              </TripInfoItem>
            </TripInfoVertical>
          ) : (
            <TripInfoHorizontal>
              <TripInfoItem>
                {/* icon left */}
                <Clock width={40} height={40} />
                <TripInfoTextHorizontal>
                  <TripInfoValue>{tripInfo.time}</TripInfoValue>
                  <TripInfoUnit>{tripInfo.timeUnit}</TripInfoUnit>
                </TripInfoTextHorizontal>
              </TripInfoItem>
              <SeparatorBar />
              <TripInfoItem>
                {/* icon right */}
                <Calories width={40} height={40} />
                <TripInfoTextHorizontal>
                  <TripInfoValue>{tripInfo.cal}</TripInfoValue>
                  <TripInfoUnit>{tripInfo.calUnit}</TripInfoUnit>
                </TripInfoTextHorizontal>
              </TripInfoItem>
            </TripInfoHorizontal>
          )}
        </DetailHeaderContainerRow>
        <DetailHeaderContainerRow>
          {isExpanded ? (
            <TripIconTouchable onPress={() => setExpanded(!isExpanded)}>
              <ChevronUp color={black} />
            </TripIconTouchable>
          ) : (
            <TripIconTouchable onPress={() => setExpanded(!isExpanded)}>
              <ChevronDown color={black} />
            </TripIconTouchable>
          )}
        </DetailHeaderContainerRow>
      </DetailHeaderContainer>
    </RootView>
  );
}
