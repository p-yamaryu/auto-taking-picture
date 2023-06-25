import styled from 'styled-components';
import { Link } from '@react-navigation/native';

export const MyColors = {
    teal: "#6FB1B4",
    darkteal: "#3a727f",
    darkerteal: "#274b58",
    yellow: "",
    navibackground: "#f2f1ed",
    darkLight: "#9ca3af",
    white: "#FFFFFF",
    black: "#1F3232",
    danger: "#EF2D56",
    emotionMap: "#BDE5CE",
    defaultMap: "#F2D58F",
    safetyMap: "#E2ADB3",
    gray: "#B1B3B6",
};

const {
  teal, darkteal, darkerteal, white, black, gray, navibackground, danger,
} = MyColors;

export const RootView = styled.View`
    flex: 1;
`;

export const MapHeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 24px 16px 16px 16px;
    height: 72px;
    align-items: center;
    backgroundColor: null;
`;

export const Separator = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: ${darkerteal};
  width: 100%;
  margin: 10px;
`;

export const SeparatorBar = styled.View`
  borderRightWidth: 1px;
  borderRightColor: ${darkerteal};
  height: 100%;
  marginLeft: 16px;
  marginRight: 26px;
`;

export const DetailHeaderContainerRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    backgroundColor: null;
    paddingBottom: 8px;
`;

export const MapHeaderTextInput = styled.TextInput`
    display: flex;
    background-color: ${white};
    height: 40px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    padding-left: 8px;
    margin-top: 8px;
    marginLeft: 20px;
    marginRight: 10px;
    marginBottom: 8px;
    width: 75%;
    borderBottomColor: #1F3232;
    border-radius: 24px;
    color: ${teal};
`;

export const MapHomeIcon = styled.TouchableOpacity`
    left: 16px;
    top: 24px;
    position: absolute;
    align-items: center;
    z-index: 1;
`;

export const MapSearchIcon = styled.TouchableOpacity`
    display: flex;
    alignItems: center;
    justifyContent: center;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    backgroundColor: ${white};
`;

export const InnerLandingContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${navibackground};
  justify-content: space-evenly;
  paddingHorizontal: 40px;
`;

export const PageTitle = styled.Text`
    paddingTop: 48px;
    font-size: 20px;
    text-align: center;
    marginBottom: 24px;

    ${(props) => props.welcome && `
      font-size: 32px;
    `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 16px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 16px;
  position: absolute;
  z-index: 1;
`;

export const StyledInputLabel = styled.Text`
  color: ${teal};
  font-size: 13px;
  text-align: left;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${navibackground};
  width: 100%;
  padding: 12px 64px;
  margin: 0px 8px 24px 8px;
  height: 60px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  borderBottomWidth: 2px;
  borderBottomColor: #1F3232;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 12px 20px;
  margin: 0px 8px 24px 8px;
  background-color: ${black};
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${white};
  font-size: 16px;
`;

export const LogoutButton = styled(StyledButton)`
  margin: 0px 0px 0px 16px;
  background-color: ${danger};
  height: 45px;
`;

export const StyledFormInput = styled.View`
  margin: 0px 8px 24px 8px;
  height: 60px;
  align-items: center;
`;

export const LinkText = styled(Link)`
  marginBottom: 24px;
  textDecoration: underline;
`;

export const MyLandingHeader = styled.View`
  display: flex;
  paddingVertical: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${white};
  flex-direction: row;
  z-index: 2;
`;

export const MyLandingBottom = styled.View`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${white};
  flex-direction: row;
  bottom: 0;
`;
export const LandingHeaderText = styled.Text`
  height: auto;
  color: ${darkteal};
  align-self: auto;
  text-align: center;
  font-size: 30px;
  marginLeft: 24px;
  marginRight: 24px;
`;

export const CopyrightFooter = styled.View`
  height: 48px;
  backgroundColor: ${white};
  align-items: center;
  justify-content: center;
`;

export const CopyrightFooterText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${darkteal};
  padding: 8px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  elevation: 8;
  align-self: stretch;
  height: 100px;
  borderColor: ${darkerteal};
  backgroundColor: ${white};
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  marginVertical: 20px;
  flex-direction: row;
`;

export const ButtonContainerDisabled = styled.TouchableOpacity`
  display: flex;
  elevation: 8;
  align-self: stretch;
  height: 100px;
  borderColor: ${darkerteal};
  backgroundColor: ${gray};
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  marginVertical: 20px;
  flex-direction: row;
`;
export const ButtonContentLeft = styled.View`
  flex: 1;
  align-items: flex-end;
`;
export const ButtonContentRight = styled.View`
  flex: 1;
  justify-content: center;
`;
export const LandingButtonText = styled.Text`
  fontSize: 18px;
  color: ${darkerteal};
  font-weight: bold;
  textTransform: uppercase;
`;

export const IconMargin = styled.View`
  marginRight: 10%;
`;

export const UserContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserNameText = styled.Text`
  fontSize: 18px;
  font-weight: bold;
`;