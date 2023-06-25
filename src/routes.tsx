import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

const ROUTE_HOME = "Home";
const ROUTE_MAPS = "Maps";

export type MainStackParamList = {
  Home: { stock: Int32 } | undefined;
  Maps: undefined;
};

export { ROUTE_HOME, ROUTE_MAPS };
