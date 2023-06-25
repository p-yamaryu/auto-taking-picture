import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import MapScreen from "./MapScreen";
import { MainStackParamList, ROUTE_HOME, ROUTE_MAPS } from "./routes";

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  const componentOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_HOME}
        component={Home}
        options={componentOptions}
      />
      <Stack.Screen
        name={ROUTE_MAPS}
        component={MapScreen}
        options={componentOptions}
      />
    </Stack.Navigator>
  );
}
export default function MainFlowNavigator() {
  return <MainStack />;
}
