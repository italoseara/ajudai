import { View, Text, StyleSheet } from "react-native";
import g from "../styles/global";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o AjudAí</Text>
      <Text style={styles.text}>Página em construção.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { ...g.container, alignItems: "center", justifyContent: "center" },
  title: { ...g.h3, marginBottom: 8 },
  text: { ...g.textMuted },
});
