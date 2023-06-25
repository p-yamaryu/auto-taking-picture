import React, { useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  RootView,
  MyLandingHeader,
  LandingHeaderText,
  InnerLandingContainer,
  ButtonContainer,
  ButtonContentLeft,
  ButtonContentRight,
  IconMargin,
  LandingButtonText,
  CopyrightFooter,
  CopyrightFooterText,
  MyColors,
} from "./style";
import Logo from "../assets/logo.svg";
import Camera from "../assets/camera.svg";
import { MainStackParamList, ROUTE_MAPS } from "./routes";
import { Alert } from "react-native";

const { emotionMap } = MyColors;

type HomeProps = NativeStackScreenProps<MainStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  useEffect(() => {
    Alert.alert(
      "The application uses a camera to acquire images and the data is used for research."
    );
  }, []);

  return (
    <RootView>
      <MyLandingHeader>
        <LandingHeaderText>EASY</LandingHeaderText>
        <Logo width={100} height={100} />
        <LandingHeaderText>CAMERA</LandingHeaderText>
      </MyLandingHeader>

      <InnerLandingContainer>
        <ButtonContainer onPress={() => navigation.navigate(ROUTE_MAPS)}>
          <ButtonContentLeft>
            <IconMargin>
              <Camera color={emotionMap} width={60} height={60} />
            </IconMargin>
          </ButtonContentLeft>
          <ButtonContentRight>
            <LandingButtonText>Take Picture！</LandingButtonText>
          </ButtonContentRight>
        </ButtonContainer>
      </InnerLandingContainer>
      <CopyrightFooter>
        <CopyrightFooterText>2023 Ryuta Yamaguchi</CopyrightFooterText>
      </CopyrightFooter>
    </RootView>
  );
}

Home.navigationOptions = {
  title: "Biketastic",
};
