import React from "react";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import g, { colors, radius, spacing } from "../styles/global";

import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/SearchBar";
import { getServices } from "../api";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getServices()
      .then((data) => {
        if (mounted) setServices(data);
      })
      .catch((err) => {
        console.error("Failed to load services", err);
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const filtered = services.filter((service) => {
    const q = search.toLowerCase();
    return (
      service.name.toLowerCase().includes(q) ||
      service.location.toLowerCase().includes(q) ||
      service.service.toLowerCase().includes(q) ||
      service.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <View style={styles.container}>
      {/* Hero section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Troque serviços sem usar dinheiro</Text>
        <Text style={styles.heroSubtitle}>
          Conecte-se com pessoas da sua região e troque habilidades
        </Text>
        <SearchBar search={search} setSearch={setSearch} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : error ? (
        <Text>Erro ao carregar serviços.</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.list}>
          {filtered.map((service, index) => (
            <ServiceCard key={index} {...service} navigation={navigation} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: radius.lg,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    textAlign: "center",
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  list: { ...g.list },
  container: { ...g.container },
});
