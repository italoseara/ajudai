import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import g from "../styles/global";

export default function ServiceCard({
  id,
  name,
  location,
  service,
  rating,
  reviews,
  tags,
  navigation,
}) {
  const handleClick = () => {
    if (navigation && typeof navigation.navigate === "function") {
      navigation.navigate("Profile", { profileId: id });
    } else {
      Alert.alert("Perfil", `Você clicou no perfil de ${name}`);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>
        <Text style={styles.bold}>Localização:</Text> {location}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.bold}>Serviço:</Text> {service}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.bold}>Avaliação:</Text> {rating} ({reviews} avaliações)
      </Text>

      <View style={styles.tagsContainer}>
        {tags.map((tag, idx) => (
          <View key={idx} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Ver perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { ...g.card },
  name: { ...g.h3, marginBottom: 4 },
  info: { ...g.text, marginBottom: 2 },
  bold: { ...g.textBold },
  tagsContainer: { ...g.rowWrap, marginVertical: 8 },
  tag: { ...g.tagPill, paddingVertical: 2 },
  tagText: { ...g.tagText },
  button: { ...g.button, ...g.buttonPrimary },
  buttonText: { ...g.buttonText, ...g.buttonTextSuccess },
});
