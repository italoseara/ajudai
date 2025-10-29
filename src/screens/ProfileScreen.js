import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MapPin } from "lucide-react-native";

import g, { colors } from "../styles/global";
import { getProfile } from "../api";

const defaultAvatar = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

export default function ProfileScreen({ route, navigation }) {
  const profileId = route?.params?.profileId;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!profileId) {
      setLoading(false);
      setError(new Error("Nenhum profileId fornecido"));
      return;
    }

    setLoading(true);

    getProfile(profileId)
      .then((data) => {
        if (mounted) setProfile(data);
      })
      .catch((err) => {
        console.error("Failed to load profile", err);
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [route]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error || !profile) {
    return (
      <View style={styles.screenContainer}>
        <Text>Erro ao carregar perfil.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screenContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.card}>
        <View style={styles.center}>
          {<Image source={{ uri: profile.avatar || defaultAvatar }} style={styles.avatar} />}
          <Text style={styles.name}>{profile.name}</Text>
          <View style={styles.locationRow}>
            <MapPin size={14} color="#666" />
            <Text style={styles.location}>{profile.location}</Text>
          </View>
          <Text style={styles.rating}>
            ⭐ {profile.rating} ({profile.reviews} avaliações)
          </Text>
          <Text style={styles.headline}>{profile.headline}</Text>

          <View style={styles.tagsRow}>
            {profile.tags.map((t, i) => (
              <View key={i} style={styles.tagPill}>
                <Text style={styles.tagText}>{t}</Text>
              </View>
            ))}
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.actionButton, styles.primaryButton]}
              onPress={() => {}}
            >
              <Text style={[styles.primaryButtonText]}>Iniciar Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.secondaryButton]}
              onPress={() => {}}
            >
              <Text style={[styles.secondaryButtonText]}>Propor Troca</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O que procuro em troca</Text>
        <View style={styles.rowWrap}>
          {profile.exchangeNeeds.map((n, i) => (
            <View key={i} style={styles.needPill}>
              <Text style={styles.needText}>{n}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.servicesHeader}>
          <Text style={styles.sectionTitle}>Serviços oferecidos</Text>
        </View>

        {profile.offeredServices.map((s, idx) => (
          <View key={idx} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{s.title}</Text>
            <View style={styles.rowWrap}>
              {s.tags.map((t, i) => (
                <View key={i} style={styles.tagPill}>
                  <Text style={styles.tagText}>{t}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.serviceDesc}>{s.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { ...g.container },
  loadingContainer: { ...g.container, justifyContent: "center", alignItems: "center" },
  contentContainer: { ...g.contentContainer },
  card: { ...g.card },
  center: { ...g.center },
  avatar: { ...g.avatar },
  name: { ...g.h3, marginTop: 6 },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 },
  location: { ...g.textMuted },
  rating: { marginTop: 8, fontWeight: "600", color: "#444" },
  headline: { marginTop: 12, textAlign: "center", color: "#333" },
  tagsRow: { ...g.rowWrap, marginTop: 12, justifyContent: "center" },
  tagPill: { ...g.tagPill, paddingVertical: 4 },
  tagText: { ...g.tagText },
  actionsRow: { ...g.row, marginTop: 12, width: "100%", gap: 8 },
  actionButton: { ...g.button, flex: 1, marginTop: 10 },
  primaryButton: { ...g.buttonPrimary },
  primaryButtonText: { ...g.buttonText, ...g.buttonTextPrimary },
  secondaryButton: { ...g.buttonSecondary },
  secondaryButtonText: { ...g.buttonText, ...g.buttonTextSecondary },
  section: { ...g.section },
  sectionTitle: { ...g.sectionTitle },
  rowWrap: { ...g.rowWrap },
  needPill: {
    backgroundColor: "#f1f1f1",
    padding: 8,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  needText: { color: "#333" },
  servicesHeader: { ...g.servicesHeader },
  serviceCard: { backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 12 },
  serviceTitle: { fontWeight: "700", marginBottom: 6 },
  serviceDesc: { color: "#444" },
});
