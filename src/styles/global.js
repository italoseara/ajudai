import { StyleSheet } from "react-native";

// Theme tokens
export const colors = {
  primary: "#007bff",
  primaryText: "#ffffff",
  background: "#ffffff",
  surface: "#ffffff",
  card: "#f9fafb",
  text: "#333333",
  textMuted: "#666666",
  textSubtle: "#444444",
  border: "#e5e7eb",
  tagBg: "#cce5ff",
  tagText: "#0056b3",
  success: "#16a34a",
  successText: "#ffffff",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999,
};

const shadow = {
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
};

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
    paddingHorizontal: spacing.lg,
  },
  contentContainer: {
    paddingBottom: spacing.xl + spacing.md,
  },
  center: { alignItems: "center", justifyContent: "center" },
  row: { flexDirection: "row" },
  rowWrap: { flexDirection: "row", flexWrap: "wrap" },

  // Typography
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: spacing.lg,
    textAlign: "center",
    color: colors.text,
  },
  h2: { fontSize: 24, fontWeight: "700", color: colors.text },
  h3: { fontSize: 20, fontWeight: "700", color: "#222" },
  text: { fontSize: 15, color: colors.textSubtle },
  textMuted: { color: colors.textMuted },
  textBold: { fontWeight: "bold" },

  // Lists
  list: { paddingBottom: spacing.xl },

  // Inputs
  input: {
    height: 40,
    minHeight: 40,
    maxHeight: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: "#f9f9f9",
    textAlignVertical: "center",
  },
  searchBar: {
    // alias for input customization
  },

  // Cards
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadow,
  },

  // Tags / Pills
  tagPill: {
    backgroundColor: colors.tagBg,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  tagText: { color: colors.tagText, fontSize: 13 },

  // Buttons
  button: {
    marginTop: spacing.md,
    borderRadius: radius.sm,
    paddingVertical: spacing.sm + 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  buttonSecondary: {
    backgroundColor: "#eeeeee",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  buttonTextPrimary: { color: colors.primaryText },
  buttonTextSuccess: { color: colors.successText },
  buttonTextSecondary: { color: colors.text },

  // Media
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: spacing.md,
  },

  // Sections
  section: { padding: spacing.sm },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: spacing.sm },
  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
});

export default styles;
