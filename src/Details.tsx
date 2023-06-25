import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { MainStackParamList, ROUTE_HOME } from "./routes";

type DetailProps = NativeStackScreenProps<MainStackParamList, "Details">;

export default function Details({ route, navigation }: DetailProps) {
  const title = route.params.title;
  const stock = route.params.stock;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title === "" ? "No title" : title,
      headerRight: () => {
        return (
          <Button
            title="Buy"
            onPress={() => {
              // Pass and merge params back to home screen
              const newStock = stock - 1;
              console.log(newStock); // debug
              navigation.navigate({
                name: ROUTE_HOME,
                params: { stock: newStock },
                merge: true,
              });
            }}
            disabled={stock === 0}
          />
        );
      },
    });
  }, [navigation, title, stock]);

  return (
    <View>
      <Text>{route.params.content}</Text>
      <Text>{stock} item(s) left</Text>
    </View>
  );
}
