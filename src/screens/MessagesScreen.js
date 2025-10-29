import { View, Text, StyleSheet } from "react-native";
import g from "../styles/global";

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensagens</Text>
      <Text style={styles.text}>Em breve você poderá trocar mensagens aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { ...g.container, alignItems: "center", justifyContent: "center" },
  title: { ...g.h3, marginBottom: 8 },
  text: { ...g.textMuted },
});
