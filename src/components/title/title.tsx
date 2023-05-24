import { StyleSheet, Text } from "react-native";

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => (
  <Text style={styles.title}>{text}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
