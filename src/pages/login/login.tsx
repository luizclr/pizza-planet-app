import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { Title } from "~/components/title/title";

export const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Title text="Pizza Planet" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
