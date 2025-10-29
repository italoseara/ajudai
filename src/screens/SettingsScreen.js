import React from "react";
import { View, Text, StyleSheet } from "react-native";
import g from "../styles/global";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.text}>Opções de app serão adicionadas aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { ...g.container, alignItems: "center", justifyContent: "center" },
  title: { ...g.h3, marginBottom: 8 },
  text: { ...g.textMuted },
});
