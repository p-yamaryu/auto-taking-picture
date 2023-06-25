import MainFlowNavigator from "./src/MainFlowNavigator";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <MainFlowNavigator />
      </NavigationContainer>
  );
}
